export default class QuoteModel {
  constructor() {
    this._quotes = [];
    this._currentQuoteIndex = 0;

    // using a public CORS proxy
    this.PROXY_URL = "https://api.allorigins.win/raw?url=";
    this.TARGET_URL = "https://zenquotes.io/api/quotes";

    this.API_URL = this.PROXY_URL + encodeURIComponent(this.TARGET_URL);
  }

  /**
   * Attempts to fetch the array of quotes from the ZenQuotes API.
   * @returns {Promise<boolean>} True if the fetch was successful, false otherwise.
   */
  async fetchQuotes() {
    try {
      console.log("Attempting to fetch quotes from API...");

      // 1. Make the GET Request
      const response = await fetch(this.API_URL);

      // 2. Check for Successful HTTP Status (200-299)
      if (!response.ok) {
        throw new Error(`HTTP Error! Status Code: ${response.status}`);
      }

      // 3. Extract the JSON Data
      const data = await response.json();

      // 4. Validate and Store the Data
      if (Array.isArray(data) && data.length > 0) {
        this._quotes = data;
        this._currentQuoteIndex = 0;

        console.log(`Successfully fetched ${this._quotes.length} quotes.`);

        return true;
      } else {
        throw new Error("API returned an empty or invalid data array.");
      }
    } catch (error) {
      console.error("Failed to fetch and process quotes:", error.message);
      // Optionally load a fallback quote if the fetch fails
      this._quotes = [
        {
          q: "Error loading quotes. Check your connection or API status.",
          a: "System",
        },
      ];
      return false;
    }
  }

  /**
   * Gets the current quote object.
   * @returns {object} The current quote {q: "...", a: "..."}
   */
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
