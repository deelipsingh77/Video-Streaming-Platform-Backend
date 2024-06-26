class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong",
    localFilePaths = [],
    errors = [],
    stack = "",
  ) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.data = null;
    this.success = false;
    this.errors = errors;
    this.localFilePaths = localFilePaths;

    if (process.env.NODE_ENV === "development") {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ApiError;
