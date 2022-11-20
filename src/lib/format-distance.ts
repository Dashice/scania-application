/**
 * Converts a numbers to a string with a unit as a suffix,
 * and thousands separators.
 *
 * @example formatDistance(1000, 'm') // => '1,000 m'
 */
export const formatDistance = (distance: number, unit: string) => {
  return `${new Intl.NumberFormat().format(distance)} ${unit}`;
};
