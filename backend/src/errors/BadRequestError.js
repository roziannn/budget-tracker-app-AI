const HttpError = require("./HttpError");

class BadRequest extends HttpError {
  constructor(message) {
    super(message, 400);
    this.name = "BadRequestError";
  }
}

module.exports = BadRequest;
