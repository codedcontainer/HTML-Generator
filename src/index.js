import * as hbsAccordion from './accordion/accordion';
import * as hbsTable from './table/table'; 
import './hbsHelpers/times'; 
import * as argv from './argvHelp';
const yargv = argv.argv; 

if (yargv._[0]== "accordion") {
    hbsAccordion.create(yargv.type, yargv.tabs, yargv.data).then((html) => {
        console.log('Accordion HTML written to build directory');
    }).catch((err) => {
        console.log(err);
    });
}
if (yargv._[0]== "table"){
    hbsTable.create(yargv.rows, yargv.columns ,yargv.data).then(()=>{
        console.log('Table HTML written to build directory');
    }).catch((err) => {
        console.log(err);
    });
}
