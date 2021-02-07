const {inherits} = require('util');

function ApiError() {}
ApiError.prototype.name = 'ApiError';
inherits(ApiError, Error);

exports.ApiError = ApiError;
