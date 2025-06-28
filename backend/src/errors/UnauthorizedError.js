const HttpError = require("./HttpError");

class Unauthorized extends HttpError {
  constructor(message = "Not Found") {
    super(message, 401);
    this.name = "UnauthorizedError";
  }
}

module.exports = Unauthorized;

// belum login
