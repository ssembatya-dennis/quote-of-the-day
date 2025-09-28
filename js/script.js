// Array of quote objects
const quotes = [
  { text: "It's gonna be a good day.", author: "Jordan Ferrone" },
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "You are never too old to set another goal or to dream a new dream.",
    author: "C.S. Lewis",
  },
];

// Get DOM elements
const quoteElement = document.querySelector(".banner__quote");
const authorElement = document.querySelector(".author_name");
const newQuoteBtn = document.querySelector("#newQuoteBtn");
const downloadBtn = document.querySelector("#downloadBtn");

// Function to get random quote
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// Function to display quote
function displayQuote() {
  const quote = getRandomQuote();
  quoteElement.textContent = quote.text;
  authorElement.textContent = quote.author;
}

// Function to download quote as text file
function downloadQuote() {
  const quote = quoteElement.textContent;
  const author = authorElement.textContent;
  const content = `${quote}\n- ${author}\nDate: ${new Date().toLocaleString()}`;
  const blob = new Blob([content], { type: "text/plain" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `Quote_of_the_Day_${new Date().toISOString().split("T")[0]}.txt`;
  a.click();
  window.URL.revokeObjectURL(url);
}

// Display initial quote on page load
displayQuote();

// Add event listeners
newQuoteBtn.addEventListener("click", displayQuote);
downloadBtn.addEventListener("click", downloadQuote); // Add download button event listener
