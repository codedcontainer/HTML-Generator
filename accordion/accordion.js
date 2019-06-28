const hbsCompile = require(__dirname+"/../hbsHelpers/compile");
var exports = module.exports = {}; 
const path = require('path');
const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

exports.create = async (loops,version, data) => {
    data !== undefined ? custom = "Data": custom = ""; 

    const text = await readFile(path.resolve(__dirname, `accordion${version}${custom}.hbs`), 'utf8');
    const hbs = await hbsCompile.compile(text,loops,data); 
    return hbs;       
} 