/**
 * @file validations.js
 * @description validations for the Quote Model layer, validating data recieved from the API
 * call
 */

/**
 * @class ValidateQuotesListResponse
 * @description validates the overall structure of the API response for Quotable, including response structure, Quotes List structure, Quote content and author.
 */
export default class ValidateQuotesListResponse {
  /**
   * validates the API fetch response data structure
   *
   * @param {object} responseData - The parsed JSON object from the API.
   * @returns {boolean} True if the data matches the expected schema.
   */

  static isValidResponse(responseData) {
    const isInvalidResponse = null || undefined;
    if (responseData === isInvalidResponse) {
      console.error("Validation failed: response data is null or undefined");
      return false;
    }

    const isPlainObjectType = typeof responseData === "object";
    if (isPlainObjectType !== true) {
      console.error("Validation failed: response data is not an object.");
      return false;
    }

    return true;
  }

  /**
   * validates the actual targeted Quotes List data entry and for each indivual quote,
   * checks only for the content and author properties data type.
   *
   * @param {object} responseData - The parsed JSON object from the API.
   * @returns {boolean} True if the data matches the expected schema.
   */
  static isValidQuoteList(responseData) {
    // focus on the results entry from the API response that holds the actual Quotes list
    const quotesList = responseData.results;

    const isValidArrayType = Array.isArray(quotesList);
    if (isValidArrayType !== true) {
      console.error("Validation failed: 'Quotes List' data is missing");
      return false;
    }

    const isEmptyQuotesList = quotesList.length === 0;
    if (isEmptyQuotesList === true) {
      console.error("Validation failed: 'Quotes List' data is empty");
    }

    // check each individual quote item to ensure it's (content & author) are a valid "string"
    // data type and not null values.
    for (const quote of quotesList) {
      const isInvalidQuote = null || undefined;
      if (quote === isInvalidQuote) {
        console.error("Validation failed: Quote item is null or undefined");
        return false;
      }

      const isPlainObjectType = typeof quote === "object";
      if (isPlainObjectType !== true) {
        console.error("Validation failed: Quote item is not an object.");
        return false;
      }

      const quoteContent = quote.content;
      if (typeof quoteContent !== "string" || quoteContent.length === 0) {
        console.error(
          "Validation failed: Quote 'content' is missing or not a string."
        );
        return false;
      }

      const quoteAuthor = quote.author;
      if (typeof quoteAuthor !== "string" || quoteAuthor.length === 0) {
        console.error(
          "Validation failed: Quote 'author' is missing or not a string."
        );
        return false;
      }
    }

    return true;
  }
}
