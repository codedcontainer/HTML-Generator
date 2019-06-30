const handlebars = require('handlebars');
/**
 * Takes a Raw hbs template and returns a compiled version
 * @param {String} raw html
 * @param {Integer} Number of times to loop
 * @param {Object} Object of data, can be undefined 
 */
const compile = (html, loops, jsData) =>{
    return new Promise((resolve, reject) =>{
        try{ 
            if(jsData !== undefined )
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
export {compile};

