const request = require('request');
const HttpError = require('http-error-constructor');
/*
 * url {String}
 * options {Object}
 * options.headers {Object}
 * options.body {String|Object}
 * options.query {Object}
 * options.timeout {Number}
 * options.retries {Number}
 * options.followRedirect {Boolean}
 */
module.exports.get = function get(url, options) {
  options.url = url;
  return request.get(options);
};

module.exports.post = function post(url, options) {
  options.url = url;
  return request.post(url, options);
};

module.exports.HTTPError = HttpError;
