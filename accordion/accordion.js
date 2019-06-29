const path = require('path');
const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
import * as hbsCompile from '../hbsHelpers/compile';

/**
 * Determine the type of accordion template to use based on the data being used. Will return * a handlebars compiled version of the code 
 * @param {Number} loops - Number of accordion tabs 
 * @param {Number} version - Version of Bootstrap to use 
 * @param {Object} data - Tab header and body content 
 * @returns {String} hbs - Compiled handlebars file
 */
const create = async (loops,version, data) => {
    data !== undefined ? custom = "Data": custom = "";
    if (data == undefined) data = {};
    //if data is set then use a data file, else use placholder text template.
    const text = await readFile(path.resolve(__dirname, `accordion${version}${custom}.hbs`), 'utf8');
    const hbs = await hbsCompile.compile(text,loops,data); 
    return hbs;       
} 
export {create};