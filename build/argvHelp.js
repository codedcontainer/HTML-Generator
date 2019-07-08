'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var argv = require('yargs').command('accordion [tabs] <type> [data]', "Create a Bootstrap accordion", function (yargs) {
    yargs.positional('tabs', {
        describe: 'number of accordion tabs',
        type: 'number'
    }).positional('type', {
        describe: 'bootstrap version',
        type: 'number'
    }).positional('data', {
        describe: 'absolute path to JSON data file',
        type: 'string'
    });
}).command('table [rows] [columns] [data]', "Create a generic HTML table", function (yargs) {
    yargs.positional('rows', {
        describe: 'number of table rows <tr>',
        type: 'number'
    }).positional('columns', {
        describe: 'number of table columns <td>',
        type: 'number'
    }).positional('data', {
        describe: 'absolute path to JSON data file',
        type: 'string'
    });
}).help().argv;

exports.argv = argv;