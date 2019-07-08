const handlebars = require('handlebars');
/**
 * Takes a Raw hbs accordion template and returns a compiled version
 * @param {String} html html
 * @param {Integer} loops of times to loop
 * @param {Object} jsData of data, can be undefined 
 */
const accordionTemplateCompile = (html, loops, jsData) =>{
    return new Promise((resolve, reject) =>{
        try{ 
            if(!jsData)
                html = html.replace("{{#times x}}", `{{#times ${loops}}}`);                                    
            const template = handlebars.compile(html)
            const result = template(jsData); 
            resolve(result); 
        }
        catch(err){
            reject(err);
        }           
    }); 
}
/**
 * Take a raw hbs table template and returns a compiled version
 * @param {String} html precompiled handlebars html page 
 * @param {JSON} jsonData data to insert into template 
 * @param {Number=} rows Number of rows if no data import
 * @param {Number=} columns Number of columns if not data import
 */
const tableTemplateCompile = (html, rows, columns,jsonData)=>{
    return new Promise((resolve,reject)=>{
        try{
            if(!jsonData)
            {
                html = html.replace("{{#times x}}", `{{#times ${rows}}}`);
                html = html.replace("{{#times y}}", `{{#times ${columns}}}`);
            }
                const template = handlebars.compile(html);
                const result = template(jsonData); 
                resolve(result);
        }
            catch(err){
                reject(err); 
            }
    });
}

export {accordionTemplateCompile, tableTemplateCompile};

