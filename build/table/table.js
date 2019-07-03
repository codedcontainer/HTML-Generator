'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.create = undefined;

var _compile = require('../hbsHelpers/compile');

var path = require('path');
var fs = require('fs');
var util = require('util');
var readfile = util.promisify(fs.readFile);


var create = async function create(rows, columns, data) {
    var custom;
    data !== undefined ? custom = "Data" : custom = "";
    if (data !== undefined) {
        var jsonData = await readFile(path.resolve(data));
        jsonData = JSON.parese(jsonData);
    }
    var text = await readFile(path.resolve(__dirname, 'table' + custom + '.hbs'));
    var hbs = await (0, _compile.tableTemplateCompile)(text, data, rows, columns);
    return hbs;
};
exports.create = create;