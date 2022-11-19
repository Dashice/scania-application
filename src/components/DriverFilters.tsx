import { useEffect, useMemo } from "react";

import { formatDistance } from "@lib";

import { Option } from "@types";

export interface DriverFiltersProps {
  /**
   * The selected filter option to filter drivers by.
   * @default null
   */
  selected: string | null;
  /**
   * Callback function, which returns the selected filter option.
   */
  onSelectedChange: (optionValue: string | null) => void;
  /**
   * Callback function, which returns the available filter options to filter drivers by.
   */
  onOptionsChange: (options: Option[]) => void;
}

/**
 * Renders a set of filters to filter drivers by with a reset button.
 */
export const DriverFilters = ({
  selected,
  onSelectedChange,
  onOptionsChange,
}: DriverFiltersProps) => {
  const filterOptions = useMemo(() => [100000, 150000, 200000, 250000], []);

  /**
   * Generates options for the dropdown component based on the static options array.
   * @returns {Option[]} An array of options.
   */
  const options = useMemo(() => {
    const optionDistancesMap = new Map<number, number>();
    filterOptions.map((distance, index) =>
      optionDistancesMap.set(index, distance)
    );

    const optionDistances = Array.from(optionDistancesMap.values());

    /**
     * We reduce the options array to an array of objects with a value and label property.
     * We use `reduce` over `map` in this instance, as we are allowed to return multiple
     * values from the callback function if needed.
     */
    return optionDistances.reduce((acc, option, index) => {
      // The previous indexed value in the iteration.
      const previousValue = optionDistances[index - 1];
      // The current indexed value in the iteration.
      const currentValue = option;
      // The next value in the iteration.
      const nextValue = optionDistances[index + 1];

      // If the previous value is undefined, we are at the first index.
      // We return the current value with a "less than or equal" label.
      const getFirstRange = () => ({
        value: currentValue,
        label: `<= ${formatDistance(currentValue, "km")}`,
      });

      // If the currentIndex is somewhere in-between the first and last index.
      // We want the object label to be a range between two values.
      const getRange = () => ({
        value: currentValue,
        label: `> ${formatDistance(previousValue, "km")} & <= ${formatDistance(
          currentValue,
          "km"
        )}`,
      });

      // If the currentIndex is the last index, we want the object label to be
      // to be described as "more than (+1)" the last value in the array.
      const getLastRange = () => ({
        value: currentValue + 1,
        label: `> ${formatDistance(currentValue, "km")}`,
      });

      if (!previousValue && !nextValue)
        return [...acc, getFirstRange(), getLastRange()];

      if (!previousValue) return [...acc, getFirstRange()];
      if (!nextValue) return [...acc, getRange(), getLastRange()];

      return [...acc, getRange()];
    }, [] as Option[]);
  }, [filterOptions]);

  useEffect(() => onOptionsChange(options), [options, onOptionsChange]);

  return (
    <aside className="flex items-center my-12" aria-label="Filter">
      <select
        value={selected || undefined}
        onChange={(e) => onSelectedChange(e.target.value)}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <button
        type="button"
        className="underline text-scania-blue-secondary ms-8"
        onClick={() => onSelectedChange(null)}
      >
        Reset
      </button>
    </aside>
  );
};
