# ikea-app
ikea catalogue app fueled with data collected by import.io.


## Original Plan
  1.  Scrap **all** products from IKEA using a crawler powered by import.io.
  2.  Accessing the scrapped data through import.io REST API.
  3.  Provide a web app to search and browse IKEA products.

### Issues
  1.  When crawling the data, title and description were omitted by the crawler. (When training the pages it worked fine.)
  2.  After collecting the data, I wanted to make the data set available to access via REST.
      I did not manage to do so, as for my crawled data set I could not find a way to define "inputs" to make the API searchable.
      
### Changed plan
  1.  Scrap **500KB worth of products** from IKEA, steal the title from the alt description.
  2.  Download data as JSON - ship it with web app.
  3.  Write an abstract Data layer such that we could replace the static json file, with a rest call easily.
  3.  Provide a web app to search and browse IKEA products.


## Build

### Get it building and running
    npm install
    gulp deploy
    gulp webserver

Then hit, git for example:
  * http://localhost:8000/index.html#/?q=bathroom
  * http://localhost:8000/index.html#/?q=stuva
  * http://localhost:8000/index.html#/?q=398.736.85
  * http://localhost:8000/index.html#/?q=table
    
### All build options
**Install**:
npm install

**Compile scripts**
gulp scripts

**Compile styles**
gulp style

**Build app**:
gulp less

**Unit Tests**:
gulp test / gulp test-once

**Run**:
gulp webserver

**Watch**: 
gulp watch


## Details

**Features implemented**:
  * Hot linking (e.g. http://localhost:8000/index.html#/?q=lamp)
  * Data layer abstraction using a AngularJS factory
  * IKEA products can be searched by id, description, title or category.
  * Basic responsiveness (can be improved substantially)
  * CSS transitions, using an AngularJS directive
  * noscript warning
    
**General code remarks**:
  * **component-based application structure**: files are grouped together on a feature-basis. 
    Personally, I like having the test files inside those directories as well. Makes it obvious if there are missing test files.
  * **app directory**: contains all source code including comments. 
  * **dist directory**: contains no comments and is minified HTML, CSS, JS ready for production.
  * **BEM**: Methodology for modular CSS (I have tried to use it for the first time, needs some revising)
  * **JSLint**: Forces developers to write similar JS code and prevents typical JS traps.
  
**Dependencies/Tools**:
  * Front-end: AngularJS 1.3, ngRoute, LESS, bootstrap
  * Testing: Karma, Jasmine, angular-mocks
  * Build tools: npm, gulp, gulp plugins
  
**Next tasks**:
  * Test older browsers, particularly IE10.
  * Route management (back, forward button, change title on state change)
  * Improve responsiveness, make it prettier.
  * Make results page more interesting with zoom option for images.
  * Add end-to-end tests (Protractor)
  * Improve performance on results page when rendering thousands of products