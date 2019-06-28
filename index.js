const handlebars = require('handlebars');
const hbsAccordion = require(__dirname + '/accordion/accordion'); 
const argv = require('yargs').argv; 

handlebars.registerHelper('times', function(n, block) {
    var fn = block.fn; 
    var accum = '';
    for(var i = 0; i < n; ++i)
        accum += block.fn(i);
    return accum;
});

if (argv.accordion){
    hbsAccordion.create(argv.tabs).then((html)=>{
        console.log(html);
    }).catch((err)=>{
        console.log(err);
    });
}

