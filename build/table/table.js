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


var create = async function create(rows, columns) {
    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

    var custom;
    data !== undefined ? custom = "Data" : custom = "";
    if (data !== undefined) {
        var jsonData = await readfile(path.resolve(data));
        jsonData = JSON.parese(jsonData);
    }
    var text = await readfile(path.resolve(__dirname, 'table' + custom + '.hbs'), 'utf8');
    var hbs = await (0, _compile.tableTemplateCompile)(text, rows, columns, data);
    return hbs;
};
exports.create = create;