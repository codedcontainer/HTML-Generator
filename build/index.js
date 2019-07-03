'use strict';

var _accordion = require('./accordion/accordion');

var hbsAccordion = _interopRequireWildcard(_accordion);

var _table = require('./table/table');

var hbsTable = _interopRequireWildcard(_table);

require('./hbsHelpers/times');

var _argvHelp = require('./argvHelp');

var argv = _interopRequireWildcard(_argvHelp);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var argvs = argv;
console.log(argvs);
if (argv.accordion) {
    hbsAccordion.create(argv.tabs, argv.type, argv.data).then(function (html) {
        console.log('Accordion HTML written to build directory');
    }).catch(function (err) {
        console.log(err);
    });
}
if (argvs.argv._[0] == "table") {
    console.log(argv);
    hbsTable.create(argv.rows, argv.columns, argv.data).then(function () {
        console.log('Table HTML written to build directory');
    }).catch(function (err) {
        console.log(err);
    });
}