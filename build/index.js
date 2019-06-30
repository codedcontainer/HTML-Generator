'use strict';

var _accordion = require('./accordion/accordion');

var hbsAccordion = _interopRequireWildcard(_accordion);

require('./hbsHelpers/times');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var argv = require('yargs').argv;
var util = require('util');
var fs = require('fs');
var readFile = util.promisify(fs.readFile);

//default accordion without a data file
//console.log(argv.data);
if (argv.accordion) {
    hbsAccordion.create(argv.tabs, argv.type, argv.data).then(function (html) {
        console.log(html);
    }).catch(function (err) {
        console.log(err);
    });
}