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
  formatTextToLowercase = (str: string): string =>
    `${str.charAt(0).toUpperCase()}${str.slice(1).toLocaleLowerCase()}`;

  /**
   * Text to crop.
   *
   * @param str This is value transform.
   * @param qt Quantity abstract text.
   * @returns New cropped text.
   */
  abstractText = (str: string, qt = 18): string => `${str.slice(0, qt)}...`;
}
