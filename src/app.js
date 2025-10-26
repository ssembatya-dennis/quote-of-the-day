import QuoteModel from "./model/QuoteModel.js";
import QuoteView from "./view/QuoteView.js";
import QuoteController from "./controller/QuoteController.js";

const Quote_API = new QuoteModel();
const Quote_UI = new QuoteView();
const quoteManager = new QuoteController(Quote_API, Quote_UI);

// Initialize the application
quoteManager.init();
