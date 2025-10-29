// Example: src/view/QuoteView.js
export default class QuoteView {
  constructor() {
    // Get references to all necessary DOM elements
    // text elements
    this.quoteText = document.querySelector(".quote_text");
    this.authorText = document.querySelector(".quote_author");

    // buttons
    this.newQuoteBtn = document.querySelector(".new_quote_btn");
    this.downloadBtn = document.querySelector(".download_btn");
    this.shareBtn = document.querySelector(".share_btn");
  }

  // Renders quote data to the UI
  renderPageQuote(quoteObject) {
    this.quoteText.textContent = quoteObject.q;
    this.authorText.textContent = `Author - ${quoteObject.a}`;
  }

  // When the button is clicked, execute the handler function passed from the Controller
  onNewQuoteBtnClick(handler) {
    this.newQuoteBtn.addEventListener("click", handler);
  }

  onDownloadBtnClick(handler) {
    this.downloadBtn.addEventListener("click", handler);
  }

  onShareBtnClick(handler) {
    this.shareBtn.addEventListener("click", handler);
  }
}
