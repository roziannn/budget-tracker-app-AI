const HttpError = require("./HttpError");

class Forbidden extends HttpError {
  constructor(message = "Not Found") {
    super(message, 403);
    this.name = "ForbiddenError";
  }
}

module.exports = Forbidden;
