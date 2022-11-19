/**
 * Converts a numbers to a string with a unit as a suffix,
 * and thousands separators.
 */
export const formatDistance = (distance: number, unit: string) => {
  return `${new Intl.NumberFormat().format(distance)} ${unit}`;
};
