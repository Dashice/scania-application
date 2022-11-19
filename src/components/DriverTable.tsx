import { formatDistance } from "@lib";

import { Driver, Option } from "@types";

export interface DriverTableProps {
  /**
   * An array of drivers. Renders said drivers in a table.
   */
  drivers: Driver[];
  /**
   * The available filter options to filter drivers by.
   * @default null
   */
  filterOptions: Option[];
  /**
   * The selected filter option to filter drivers by.
   */
  selectedFilterOption: string | null;
}

/**
 * Renders a table of drivers.
 */
export const DriverTable = ({
  drivers,
  filterOptions,
  selectedFilterOption,
}: DriverTableProps) => {
  /**
   * Filters the `drivers` array based on the `selectedFilterOption`.
   */
  const filterBySelectedOption = (driver: Driver) => {
    if (!selectedFilterOption || !filterOptions) return true;

    // Find the current index of the `selectedFilterOption` in the `filterOptions` array.
    const filterOptionIndex = filterOptions.findIndex(
      (option) => option.value === Number(selectedFilterOption)
    );

    // Get previous, current and next filterOptions.
    const previousFilterOption = filterOptions[filterOptionIndex - 1];
    const currentFilterOption = filterOptions[filterOptionIndex];
    const nextFilterOption = filterOptions[filterOptionIndex + 1];

    // If the previous filter option is undefined, we are at the first index.
    // We then want to filter out all drivers that have a distance <= the current filter option.
    if (!previousFilterOption) {
      return driver.distance <= currentFilterOption.value;
    }

    // If the next filter option is undefined, we are at the last index.
    // We then want to filter out all drivers that have a distance > the current filter option.
    if (!nextFilterOption) {
      return driver.distance > currentFilterOption.value;
    }

    // If we are somewhere in-between the first and last index, we want to filter out all drivers
    // that have a distance > the previous filter option and <= the current filter option.
    return (
      driver.distance > previousFilterOption.value &&
      driver.distance <= currentFilterOption.value
    );
  };

  return (
    <section aria-label="Driver data">
      <div className="max-w-4xl overflow-hidden rounded-t-md">
        <table className="w-full bg-white">
          <thead>
            <tr className="border-b bg-scania-gray-500 border-scania-gray-700">
              {Object.keys(drivers[0]).map((key) => (
                <th key={key} className="p-4 capitalize text-start">
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {drivers
              .filter((driver) => filterBySelectedOption(driver))
              .map((driver, index) => (
                <tr
                  key={index}
                  className="border-b border-scania-gray-500 hover:bg-scania-gray-300"
                >
                  {Object.entries(driver).map(([key, value], jIndex) => (
                    <td key={jIndex} className="p-4">
                      {key === "distance" ? formatDistance(value, "km") : value}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
