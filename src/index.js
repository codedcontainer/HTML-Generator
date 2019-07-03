import * as hbsAccordion from './accordion/accordion';
import * as hbsTable from './table/table'; 
import './hbsHelpers/times'; 
const argv = require('yargs').argv;

//default accordion without a data file
//console.log(argv.data);
if (argv.accordion) {
    hbsAccordion.create(argv.tabs, argv.type, argv.data).then((html) => {
        console.log(html);
    }).catch((err) => {
        console.log(err);
    });
}
if (argv.table){
    hbsTable.create(argv.rows, argv.columns,argv.data).then((html)=>{
        console.log(html); 
    }).catch((err) => {
        console.log(err);
    });
}
