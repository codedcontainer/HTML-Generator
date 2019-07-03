'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.create = undefined;

var _compile = require('../hbsHelpers/compile');

var path = require('path');
var fs = require('fs');
var util = require('util');
var read = util.promisify(fs.readFile);
var write = util.promisify(fs.writeFile);

var create = async function create(rows, columns, data) {
    var custom;
    data !== undefined ? custom = "Data" : custom = "";
    if (data !== undefined) {
        var jsonData = await read(path.resolve(data));
        jsonData = JSON.parse(jsonData);
    }
    var text = await read(path.resolve(__dirname, 'table' + custom + '.hbs'), 'utf8');
    var hbs = await (0, _compile.tableTemplateCompile)(text, rows, columns, jsonData);
    await write(path.resolve(__dirname, '../', 'generatedHtml', "table.html"), hbs);
};
exports.create = create;