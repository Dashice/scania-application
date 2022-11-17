export const tw = (
  ...args: (string | number | boolean | null | undefined)[]
) => {
  const array = args.filter((arg) => arg);
  return array.length ? array.join(" ") : undefined;
};
