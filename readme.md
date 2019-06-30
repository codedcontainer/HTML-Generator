# HTML Auto Loader #
An application that is written with node.js that automates the process of creating html tags such as bootstrap accordions and tables.

## How to run ##
1. `npm install`
2. Run the application see below for an example command
~~~~
node build/index.js
    --accordion     type of component to build
    --tabs          # of loops without json data file
    --data          Json file of data 
    --type          bootstrap version
~~~~

## What I Have Learned ##
- Async/await functions and their return type
    - awaiting on custom functions that return a promise
- ES6 compiling into ES5 using Babel
- Categorizing run code in package.json
- [Visual Studio intellisense with JSdoc](http://www.codedcontainer.com/visual-studio-code-javascript-intellisense-with-jsdoc/)
