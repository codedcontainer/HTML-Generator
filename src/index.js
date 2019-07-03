import * as hbsAccordion from './accordion/accordion';
import * as hbsTable from './table/table'; 
import './hbsHelpers/times'; 
import * as argv from './argvHelp';
const argv = argv.argv; 

console.log(argv);
if (argv.accordion) {
    hbsAccordion.create(argv.tabs, argv.type, argv.data).then((html) => {
        console.log('Accordion HTML written to build directory');
    }).catch((err) => {
        console.log(err);
    });
}
if (argvs._[0]== "table"){
    console.log('table command');
       // console.log(argv);
    hbsTable.create(argv.rows, argv.columns ,argv.data).then(()=>{
        console.log('Table HTML written to build directory');
    }).catch((err) => {
        console.log(err);
    });
}
