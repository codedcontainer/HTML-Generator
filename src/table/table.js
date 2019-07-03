const path = require('path'); 
const fs = require('fs'); 
const util = require('util'); 
const read = util.promisify(fs.readFile);
const write = util.promisify(fs.writeFile); 

import {tableTemplateCompile} from '../hbsHelpers/compile';

const create = async(rows, columns, data)=>{
    var custom; 
    data !== undefined ? custom = "Data": custom = ""; 
    if (data !== undefined){
        var jsonData = await read(path.resolve(data));
        jsonData = JSON.parse(jsonData); 
    }
    const text = await read(path.resolve(__dirname, `table${custom}.hbs`),'utf8');
    const hbs = await tableTemplateCompile(text,rows,columns,jsonData); 
    await write(path.resolve(__dirname, '../','generatedHtml', "table.html"), hbs);
}; 
export {create}; 