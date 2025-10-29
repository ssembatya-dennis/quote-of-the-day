/**
 * @file QuoteModel.js
 * @description - The OuoteModel.js recieves a List of Quotes data from a third party API
 * "Quotable API", runs validations before storing this data, and offers a few methods to the
 * read and mutate the internal state of this data
 */

import ValidateQuotesListResponse from "./validations.js";
/**
 * @class QuoteModel
 * @description - The QuoteModel makes fetch requests to the "Quotable API", validates the
 * response received, stores the data, and offers methods like getCurrentQuote and getNewQuote
 * to the public API to read and mutate the internal state of the Quotes List data stored.
 */
export default class QuoteModel {
  /**
   * stores the URL of the Quotable API,
   * @constructor
   */
  constructor() {
    this._quotes = [];
    this._currentQuoteIndex = 0;

    this.API_URL = "https://api.quotable.io/quotes?limit=50";
  }

  /**
   *  Attempts to fetch data from a third party API
   * 1) validates the response data structure
   * 2) validates the actual quotesList and quote structure and content
   * 3) stores this valid quotesList data in a private quotes variable
   * 4) logs to the console a successful error message.
   * @async
   * @function fetchQuotes
   * @returns {boolean} - True if the data fetch call was successful
   */
  async fetchQuotes() {
    try {
      const response = await fetch(this.API_URL);

      if (response.ok !== true) {
        throw new Error(`HTTP Error! Status Code: ${response.status}`);
      }

      const quotesList = await response.json();

      // validate the API response structure
      const validQuotesListResponse =
        ValidateQuotesListResponse.isValidResponse(quotesList);

      if (validQuotesListResponse !== true) {
        return;
      }

      // validate the actual quotes List and quote content data
      const validQuoteContents =
        ValidateQuotesListResponse.isValidQuoteList(quotesList);

      if (validQuoteContents !== true) {
        return;
      }
      this._quotes = quotesList.results;
      this._currentQuoteIndex = 0;
      console.log(
        `Successfully fetched and validated ${this._quotes.length} quotes.`
      );
      return true;
    } catch (error) {
      console.error("Failed to fetch and process quotes:", error.message);
    }
  }

  getCurrentQuote() {
    // Ensure there is at least one quote available, even the fallback
    if (this._quotes.length === 0) {
      return { q: "No quotes loaded.", a: "Application" };
    }
    return this._quotes[this._currentQuoteIndex];
  }

  getNewQuote() {
    // Logic to get a new random quote from the array
    const randomIndex = Math.floor(Math.random() * this._quotes.length);
    this._currentQuoteIndex = randomIndex;
    return this.getCurrentQuote();
  }
}
