const handlebars = require('handlebars');

handlebars.registerHelper('times', function(n, block) {
    var fn = block.fn; 
    var accum = '';
    for(var i = 0; i < n; ++i)
        accum += block.fn(i);
    return accum;
});