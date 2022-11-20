/**
 * Converts a camelCase string to a dash-separated string.
 *
 * @example camelToDash('fooBar') // => 'foo-bar'
 */
export const camelToDash = (text: string) =>
  text.replace(/([A-Z])/g, ($1) => "-" + $1.toLowerCase());
