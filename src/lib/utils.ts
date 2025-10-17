import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Takes a list of tailwind classnames, resolves (true or false) them smartly via clsx, and then finally merges conflicting classes by only keeping the last one in the list.
 * @example
 * console.log(cn("m-2", "m-4"));
 * > "m-4"
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
