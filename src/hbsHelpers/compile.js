const handlebars = require('handlebars');
/**
 * Takes a Raw hbs template and returns a compiled version
 * @param {String} raw html
 * @param {Integer} Number of times to loop
 * @param {Object} Object of data, can be undefined 
 */
const compile = (html, loops, data) =>{
    return new Promise((resolve, reject, data) =>{
        try{                    
            const template = handlebars.compile(html)
            const result = template(data); 
            resolve(result); 
        }
        catch(err){
            reject(err);
        }           
    }); 
}
export {compile};

