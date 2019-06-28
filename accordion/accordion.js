const hbsCompile = require(__dirname+"/../hbsHelpers/compile");
var exports = module.exports = {}; 
const path = require('path');
const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

exports.create = async (loops) => {
    const text = await readFile(path.resolve(__dirname, "accordion.hbs"), 'utf8');
    const hbs = await hbsCompile.compile(text,loops,{}); 
    return hbs;       
}