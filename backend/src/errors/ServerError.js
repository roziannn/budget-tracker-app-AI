const HttpError = require("./HttpError");

class ServerError extends HttpError {
  constructor(message) {
    super(message, 500);
    this.name = "ServerError";
  }
}

module.exports = ServerError;
// error return dr server cacat logic, crash, dll trkait server
