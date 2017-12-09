const request = require('request');
const rp = require('request-promise');
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
    options.uri = url;console.log(options);
    return rp.get(options);
};

module.exports.post = function post(url, options) {
    options.uri = url;
    console.log(options);
    return rp.post(options);
};

module.exports.HTTPError = HttpError;
