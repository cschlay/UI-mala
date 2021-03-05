/**
 * Accepts any number of arguments and constructs className string from a list.
 *
 * Inspired from https://www.npmjs.com/package/classnames
 */
export const getClass = (...args: string[]): string => args.join(" ");
