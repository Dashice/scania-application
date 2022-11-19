/**
 * Accepts a list arguments and returns a `string` with the arguments joined.
 * Useful when building Tailwind classNames, which may contain multiple conditional styling definitions.
 *
 * If no arguments are truthy, returns `undefined`, which is a valid value for JSX className attributes.
 *
 * @example - tw('flex', isVertical ? 'flex-col' : 'flex-row', isDark && 'bg-black') -> 'flex flex-row bg-black'
 */
export const tw = (
  ...args: (string | number | boolean | null | undefined)[]
) => {
  const array = args.filter((arg) => arg);
  return array.length ? array.join(" ") : undefined;
};
