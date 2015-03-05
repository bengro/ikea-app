# ikea-app
ikea catalogue app fueled with data collected by import.io. My preferred AngularJS app setup.

## Original Plan
  1) Scrap **all** products from IKEA using a crawler powered by import.io.
  2) Accessing the scrapped data through import.io REST API.
  3) Provide a web app to search and browse IKEA products.

### Issues
  1) When crawling the data, title and description were omitted by the crawler. When training the pages it worked fine.
  2) After collecting the data, I needed to define "inputs" to make the API searchable. No documentation, perhaps does not work for crawled data sets?
  3) Query object badly documented - for a long time I mistakenly assumed that the column names correspond to the key.
  4) There is a jQuery dependency for JS library.

### Changed plan
  1) Scrap **all** products from IKEA, steal the title from the alt description.
  2) Download data as JSON - ship them with web app.
  3) Provide a web app to search and browse IKEA products.


## Build

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
  * Data abstraction layer
  * Basic responsiveneess
  * noscript warning

**Next tasks**:
  * Proper route management (back, forward button, change title on state change)
  * Auto-complete for search input
  * Add end-to-end tests
  * Virtualis results to render thousands of them fluidly
  * e2e tests with protactor
  
**General code quality**:
  * component-based application structure
  * app directory: source code.
  * dist directory: minified HTML, CSS, JS ready for production.
  * Tests run again final concatenated JS script.
  * BEM for CSS
  * JSLint
  
**Dependencies**:
  * Front-end: AngularJS 1.3, ngRoute, LESS, bootstrap
  * Testing: Karma, Jasmine, angular-mocks
  * Build tools: gulp, gulp plugins