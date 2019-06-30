const handlebars = require('handlebars');
/**
 * Creates a helper function to loop through HTML code x number of times.
 * @param {Number} n - Number of loops
 * @param {String} block - HTML block of code
 */
handlebars.registerHelper('times', function(n, block) {
    var fn = block.fn; 
    var accum = '';
    for(var i = 0; i < n; ++i)
        accum += block.fn(i);
    return accum;
});