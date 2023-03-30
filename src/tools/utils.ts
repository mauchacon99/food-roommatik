/**
 * Reusable function kits.
 */
export class Utils {
  /**
   * Convert text to lowercase.
   *
   * @param str This is value transform.
   * @returns Value transform in lowercase.
   */
  formatTextToLowercase = (str: string): string => {
    return `${str.charAt(0).toUpperCase()}${str.slice(1).toLocaleLowerCase()}`;
  };
  /**
   * Text to crop.
   *
   * @param str This is value transform.
   * @returns New cropped text.
   */
  abstractText = (str: string, qt: number = 18) => {
    return `${str.slice(0, qt)}...`;
  };
}
