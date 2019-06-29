import * as hbsAccordion from './accordion/accordion';
import './hbsHelpers/times'; 
const argv = require('yargs').argv;
const util = require('util');
const fs = require('fs');
const readFile = util.promisify(fs.readFile);

//default accordion without a data file
if (argv.accordion && argv.data == undefined) {
    hbsAccordion.create(argv.tabs, argv.type, undefined).then((html) => {
        console.log(html);
    }).catch((err) => {
        console.log(err);
    });
}
else { //read data file
    readFile(argv.data, 'utf8').then((data) => {
        const jsonData = JSON.parse(data);
        hbsAccordion.create(argv.tabs, argv.type, jsonData).then((html) => {
            console.log(html);
        }).catch((err) => {
            console.log(err);
        });
    });
}