const path = require('path');
const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const write = util.promisify(fs.writeFile);

import {accordionTemplateCompile} from '../hbsHelpers/compile';
/**
 * Determine the type of accordion template to use based on the data being used. Will return * a handlebars compiled version of the code 
 * @param {Number} loops - Number of accordion tabs 
 * @param {Number} version - Version of Bootstrap to use 
 * @param {Object} data - Tab header and body content 
 * @returns {String} hbs - Compiled handlebars file
 */
const create = async (loops,version, data) => {
    var custom; 
    data !== undefined ? custom = "Data": custom = ""; 
    if (data !== undefined){
        var jsonData = await readFile(path.resolve(data));
        jsonData = JSON.parse(jsonData); 
    }
    //if data is set then use a data file, else use placholder text template.
    const text = await readFile(path.resolve(__dirname, `accordion${version}${custom}.hbs`), 'utf8');
    const hbs = await accordionTemplateCompile(text,loops,jsonData); 
    await write(path.resolve(__dirname, '../','generatedHtml', "accordion.html"), hbs);
    return hbs;       
} 
export {create};