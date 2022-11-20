import { useEffect } from "react";

import { camelToDash } from "@lib";

import { Option } from "@types";

/**
 * Sets the custom events for a `CustomElement` type.
 */
type CustomEvents<K extends string> = {
  [key in K]: (event: CustomEvent) => void;
};

/**
 * Sets the custom element with its associated event types
 * and assigns it as a new JSX element globally.
 */
type CustomElement<T, K extends string> = Partial<
  T & React.DOMAttributes<T> & { children: any } & CustomEvents<`on${K}`>
>;

/**
 * Declares the global JSX namespace and adds the `scandash-dropdown`
 * element as a `JSX.IntrinsicElement`.
 */
declare global {
  namespace JSX {
    interface IntrinsicElements {
      ["scandash-dropdown"]: CustomElement<
        HTMLScandashDropdownElement,
        "optionChange"
      >;
    }
  }
}

export interface ScandashDropdownProps
  extends Omit<
    CustomElement<HTMLScandashDropdownElement, "optionChange">,
    "options"
  > {
  /**
   * The id of the wrapper element, required to enable event-listening
   * for the dropdown in the applications current iteration.
   *
   * @todo - Remove this requirement once the dropdown component is
   * better integrated with React.
   */
  id: string;
  /**
   * An array of options to be rendered in the dropdown.
   */
  options: Option[];
  /**
   * The selected option in the dropdown.
   */
  selected: string | null;
  /**
   * Callback function, which returns the selected option.
   */
  onSelectedChange: (optionValue: string | null) => void;
}

/**
 * A make-shift wrapper for the `scandash-dropdown` component.
 * Renders a dropdown component which allows the user to select an option
 * from a collection of choices.
 *
 * This is not an ideal solution, but is required to enable event-listening
 * at this stage of development.
 */
export const ScandashDropdown = ({
  id,
  options,
  selected,
  onSelectedChange,
  ...rest
}: ScandashDropdownProps) => {
  // Listen for the `optionChange` event on the dropdown element.
  // and call the `onSelectedChange` callback with the selected option.
  /**
   * @todo - This useEffect should not be needed as 'onOptionChange' prop should
   * be ideally available for the component itself.
   */
  useEffect(() => {
    const element = document.getElementById(id) as HTMLScandashDropdownElement;
    if (!element) return;

    const handleOptionChange = (event: any) => {
      const { detail } = event;
      onSelectedChange(detail?.value || null);
    };

    element.addEventListener("optionChange", handleOptionChange);
    return () => {
      element.removeEventListener("optionChange", handleOptionChange);
    };
  }, [id, onSelectedChange]);

  return (
    /**
     * @todo - Image asset is not correctly linked inside this web-component.
     */
    <scandash-dropdown
      id={id}
      options={JSON.stringify(
        options?.map((option) => ({
          label: option.label,
          value: option.value.toString(),
          selected: option.value.toString() === selected,
        }))
      )}
      /**
       * @todo - We convert all the keys to dash-case here, as react-output-target process failed.
       * This is needed, as the web-component expects the props in dash-case, and passing in camelCase
       * as React expects, causes the web-component to not react to camelCase prop changes.
       */
      {...Object.entries(rest).reduce((obj, attribute) => {
        const [key, value] = attribute;
        obj[camelToDash(key)] = value;
        return obj;
      }, {} as any)}
    ></scandash-dropdown>
  );
};
