const path = require('path'); 
const fs = require('fs'); 
const util = require('util'); 
const readfile = util.promisify(fs.readFile); 
import {tableTemplateCompile} from '../hbsHelpers/compile';

const create = async(rows, columns, data)=>{
    var custom; 
    data !== undefined ? custom = "Data": custom = ""; 
    if (data !== undefined){
        var jsonData = await readFile(path.resolve(data));
        jsonData = JSON.parese(jsonData); 
    }
    const text = await readFile(path.resolve(__dirname, `table${custom}.hbs`));
    const hbs = await tableTemplateCompile(text,data,rows,columns); 
    return hbs;
}; 
export {create}; 