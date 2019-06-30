'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var handlebars = require('handlebars');
/**
 * Takes a Raw hbs template and returns a compiled version
 * @param {String} raw html
 * @param {Integer} Number of times to loop
 * @param {Object} Object of data, can be undefined 
 */
var compile = function compile(html, loops, data) {
    return new Promise(function (resolve, reject, data) {
        try {
            var template = handlebars.compile(html);
            var result = template(data);
            resolve(result);
        } catch (err) {
            reject(err);
        }
    });
};
exports.compile = compile;