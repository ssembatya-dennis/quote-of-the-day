const quotesData = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
  },
  {
    quote: "The mind is everything. What you think you become.",
    author: "Buddha",
  },
  // ... more quote objects
];

class QuoteManager {
  constructor(quotes) {
    this.quotes = quotes;
    // Optionally store the last selected index to prevent immediate repetition
    this.lastIndex = -1;
  }

  // Method to get a single random quote object
  getRandomQuote() {
    let randomIndex;
    do {
      // Generate a random index within the bounds of the array
      randomIndex = Math.floor(Math.random() * this.quotes.length);
    } while (randomIndex === this.lastIndex && this.quotes.length > 1); // Avoid immediate repetition if more than one quote

    this.lastIndex = randomIndex;

    return this.quotes[randomIndex];
  }
}

// 2. DOM Element Selectors
const quoteTextElement = document.querySelector(".quote_text");
const quoteAuthorElement = document.querySelector(".quote_author--name");
const newQuoteButton = document.querySelector(".new_quote_btn");

// 3. Instantiate the QuoteManager
const manager = new QuoteManager(quotesData);

// 4. Function to display a quote
function displayNewQuote() {
  const newQuote = manager.getRandomQuote(); // Get the random quote object

  // Update the DOM elements
  quoteTextElement.textContent = newQuote.quote;
  quoteAuthorElement.textContent = `- ${newQuote.author}`;
}

// 5. Event Listeners and Initial Load
newQuoteButton.addEventListener("click", displayNewQuote);

// Initial quote display on page load
displayNewQuote();
