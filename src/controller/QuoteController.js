export default class QuoteController {
  /**
   * The Controller takes instances of the Model and View.
   * @param {QuoteModel} model - The application's data and state manager.
   * @param {QuoteView} view - The application's UI renderer and event reporter.
   */
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // 1. Initialize the event listeners when the controller is created.
    this.setupEventListeners();
  }

  /**
   * Initializes the application: fetches data and renders the first quote.
   */
  async init() {
    console.log("Controller Initializing...");

    // 1. Tell the Model to fetch data
    const success = await this.model.fetchQuotes();

    // 2. If data fetch was unsuccessful, log an error
    if (!success) {
      console.error("Application failed to initialize: No quotes available.");
    }

    const initialQuote = this.model.getCurrentQuote();

    // 3. Tell the View to render the initial quote
    this.view.renderPageQuote(initialQuote);
  }

  /**
   * Sets up event listeners on the View and maps them to Controller handler methods.
   */
  setupEventListeners() {
    console.log("Controller setting up event listeners for the View...");

    this.view.onNewQuoteBtnClick(this.handleNewQuoteBtnClick.bind(this));
    this.view.onDownloadBtnClick(this.handleDownloadQuoteBtnClick.bind(this));
    this.view.onShareBtnClick(this.handleShareQuoteBtnClick.bind(this));
  }

  // --- Event Handler Methods ---

  /**
   * Handler for the "New Quote" button click.
   */
  handleNewQuoteBtnClick() {
    console.log("New Quote clicked. Updating Model state...");
    // 1. Tell the Model to change the current quote (e.g., get a random one)
    const newQuote = this.model.getNewQuote();

    // 2. Tell the View to update the display with the new data
    this.view.renderPageQuote(newQuote);
  }

  /**
   * Handler for the "Download" button click.
   */
  handleDownloadQuoteBtnClick() {
    console.log("Download clicked. Initiating download process...");

    // Note: The View is best equipped to handle DOM manipulation for image generation/download.
  }

  /**
   * Handler for the "Share" button click.
   */
  handleShareQuoteBtnClick() {
    console.log("Share clicked. Initiating share process...");

    // 2. Use the View to access browser/OS-level sharing APIs
  }
}
