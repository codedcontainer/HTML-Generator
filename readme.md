# HTML Generator #
An application that is written with node.js and handlebars templates that automates the process of creating HTML. Uses HTML templates from Bootstrap (3 & 4) and generic templates.

## How To Run ##
1. `npm install`
2. Use NPX to build `npx run build` or watch `npx run dev`
    * `npm run dev` will copy hbs files into /build folder
3. Make sure to include "generatedHtml" folder in /build
4. View testData.json files for JSON input examples
5. Run the application see below examples

## Templates ##
1. Bootstrap 3 & 4 Accordions
2. Generic HTML Table 

### Bootstrap Accordion HTML Builder ###
- Run node /build/index.js --help to view builders
    - Type --help on a command to learn more about a builder

## What I Have Learned ##
- Async/await functions and their return type
    - awaiting on custom functions that return a promise
- ES6 compiling into ES5 using Babel
- Categorizing run code in package.json
- [Visual Studio intellisense with JSdoc](http://www.codedcontainer.com/visual-studio-code-javascript-intellisense-with-jsdoc/)
- Windows is picky about using both single and double quotes in your package.json scripts list instead you need to escape inside double quotes
- Yargs postional argument setting
