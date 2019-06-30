import * as hbsAccordion from './accordion/accordion';
import './hbsHelpers/times'; 
const argv = require('yargs').argv;
const util = require('util');
const fs = require('fs');
const readFile = util.promisify(fs.readFile);

//default accordion without a data file
//console.log(argv.data);
if (argv.accordion) {
    hbsAccordion.create(argv.tabs, argv.type, argv.data).then((html) => {
        console.log(html);
    }).catch((err) => {
        console.log(err);
    });
}
