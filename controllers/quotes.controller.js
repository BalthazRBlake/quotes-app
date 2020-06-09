const path = require("path");
const DB_PATH = path.join(__dirname + "/../data/db.json");
let db = require(DB_PATH);
const fs = require("fs");

function render(file, response) {
  return response.sendFile(path.join(__dirname + `/../views/${file}.html`));
}

class QuotesController {
  async index(request, response) {
    return render("quotes", response);
  }
}

module.exports = new QuotesController();