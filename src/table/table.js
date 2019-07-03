const path = require('path'); 
const fs = require('fs'); 
const util = require('util'); 
const readfile = util.promisify(fs.readFile); 
import {tableTemplateCompile} from '../hbsHelpers/compile';

const create = async(rows, columns, data)=>{
    var custom; 
    data !== undefined ? custom = "Data": custom = ""; 
    if (data !== undefined){
        var jsonData = await readfile(path.resolve(data));
        jsonData = JSON.parse(jsonData); 
    }
    const text = await readfile(path.resolve(__dirname, `table${custom}.hbs`),'utf8');
    const hbs = await tableTemplateCompile(text,rows,columns,jsonData); 
    return hbs;
}; 
export {create}; 