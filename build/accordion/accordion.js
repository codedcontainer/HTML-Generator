'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.create = undefined;

var _compile = require('../hbsHelpers/compile');

var path = require('path');
var fs = require('fs');
var util = require('util');
var readFile = util.promisify(fs.readFile);
var write = util.promisify(fs.writeFile);

/**
 * Determine the type of accordion template to use based on the data being used. Will return * a handlebars compiled version of the code 
 * @param {Number} loops - Number of accordion tabs 
 * @param {Number} version - Version of Bootstrap to use 
 * @param {Object} data - Tab header and body content 
 * @returns {String} hbs - Compiled handlebars file
 */
var create = async function create(loops, version, data) {
    var custom;
    data !== undefined ? custom = "Data" : custom = "";
    if (data !== undefined) {
        var jsonData = await readFile(path.resolve(data));
        jsonData = JSON.parse(jsonData);
    }
    //if data is set then use a data file, else use placholder text template.
    var text = await readFile(path.resolve(__dirname, 'accordion' + version + custom + '.hbs'), 'utf8');
    var hbs = await (0, _compile.accordionTemplateCompile)(text, loops, jsonData);
    await write(path.resolve(__dirname, '../', 'generatedHtml', "accordion.html"), hbs);
    return hbs;
};
exports.create = create;