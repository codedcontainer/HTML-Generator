"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var handlebars = require('handlebars');
/**
 * Takes a Raw hbs accordion template and returns a compiled version
 * @param {String} html html
 * @param {Integer} loops of times to loop
 * @param {Object} jsData of data, can be undefined 
 */
var accordionTemplateCompile = function accordionTemplateCompile(html, loops, jsData) {
    return new Promise(function (resolve, reject) {
        try {
            if (jsData !== undefined) html = html.replace("{{#times x}}", "{{#times " + loops + "}}");
            var template = handlebars.compile(html);
            var result = template(jsData);
            resolve(result);
        } catch (err) {
            reject(err);
        }
    });
};
/**
 * Take a raw hbs table template and returns a compiled version
 * @param {String} html precompiled handlebars html page 
 * @param {JSON} jsonData data to insert into template 
 * @param {Number=} rows Number of rows if no data import
 * @param {Number=} columns Number of columns if not data import
 */
var tableTemplateCompile = function tableTemplateCompile(html, jsonData) {
    var rows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
    var columns = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;

    return new Promise(function (resolve, reject) {
        try {
            if (jsonData !== undefined) {
                html = html.replace("{{#times x}}", "{{#times " + rows + "}}");
                html = html.replace("{{#times y}}", "{{#times " + columns + "}}");
            }
            var template = handlebars.compile(html);
            var result = template(jsonData);
            resolve(result);
        } catch (err) {
            reject(err);
        }
    });
};

exports.accordionTemplateCompile = accordionTemplateCompile;
exports.tableTemplateCompile = tableTemplateCompile;