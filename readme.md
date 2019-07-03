# HTML Auto Loader #
An application that is written with node.js that automates the process of creating html such as bootstrap accordions and tables.

## How to run ##
1. `npm install`
2. Use NPX to build `npx run build` or watch `npx run dev`
    * `npm run dev` will copy hbs files into /build folder
3. Run the application see below examples

### Bootstrap Accordion HTML Builder ###
~~~~
node build/index.js
    --accordion     Bootstrap Accordion
    --tabs          # of loops without JSON data file
    --data          JSON file of data 
    --type          Bootstrap version
~~~~
### Generic Table HTML Builder ###
~~~~
node build/index.js
    --table         Generic Table
    --rows          # of rows
    --columns       # of columns 
    --data          JSON file of data
~~~~

## What I Have Learned ##
- Async/await functions and their return type
    - awaiting on custom functions that return a promise
- ES6 compiling into ES5 using Babel
- Categorizing run code in package.json
- [Visual Studio intellisense with JSdoc](http://www.codedcontainer.com/visual-studio-code-javascript-intellisense-with-jsdoc/)
- Windows is picky about using both single and double quotes in your package.json scripts list instead you need to escape inside double quotes
