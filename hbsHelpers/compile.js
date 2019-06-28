const handlebars = require('handlebars');

var exports = module.exports = {}; 
exports.compile = (html, loops, data) =>{
    return new Promise((resolve, reject, data) =>{
        try{
            if(!data.length > 0){
                html = html.replace("{{#times x}}", `{{#times ${loops}}}`);
            }
            else{
                html = html.replace("{{#each x}}", `{{#each data}}`);
                html = html.replace("{{/times}}, {{/each}}");
            }            
            const template = handlebars.compile(html)
            const result = template(data); 
            resolve(result); 
        }
        catch(err){
            reject(err);
        }
           
    }); 
}

