import * as hbsAccordion from './accordion/accordion';
import * as hbsTable from './table/table'; 
import './hbsHelpers/times'; 
import * as argv from './argvHelp'; 

if (argv.accordion) {
    hbsAccordion.create(argv.tabs, argv.type, argv.data).then((html) => {
        console.log('Accordion HTML written to build directory');
    }).catch((err) => {
        console.log(err);
    });
}
if (argv.table){
    hbsTable.create(argv.rows, argv.columns ,argv.data).then(()=>{
        console.log('Table HTML written to build directory');
    }).catch((err) => {
        console.log(err);
    });
}
