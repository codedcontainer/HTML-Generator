const path = require('path');
const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
import {accordionTemplateCompile} from './hbsHelpers/compile';
/**
 * Determine the type of accordion template to use based on the data being used. Will return * a handlebars compiled version of the code 
 * @param {Number} loops - Number of accordion tabs 
 * @param {Number} version - Version of Bootstrap to use 
 * @param {Object} data - Tab header and body content 
 * @returns {String} hbs - Compiled handlebars file
 */
const create = async (type,loops,version, data) => {
    var custom; 
    data !== undefined ? custom = "Data": custom = "";
    console.log({data, custom});
    if (data !== undefined) {
        var jsonData = await readFile(path.resolve(data)); 
        jsonData = JSON.parse(jsonData);
        console.log(jsonData);
    }
    //if data is set then use a data file, else use placholder text template.
    const text = await readFile(path.resolve(__dirname,`${type}`,`${type}${version}${custom}.hbs`), 'utf8');
    const hbs = await accordionTemplateCompile(text,loops,jsonData); 
    return hbs;       
} 
export {create};