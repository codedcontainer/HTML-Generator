const handlebars = require('handlebars');

var exports = module.exports = {}; 
exports.compile = (html, loops, data) =>{
    return new Promise((resolve, reject) =>{
        try{
            html = html.replace("{{#times x}}", `{{#times ${loops}}}`);
            const template = handlebars.compile(html)
            const result = template(data); 
            resolve(result); 
        }
        catch(err){
            reject(err);
        }
           
    }); 
}

