# ikea-app
experimenting with import.io, material design, and gulp

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

**Build app**:
gulp deploy

**Unit Tests**:
gulp test

**Run**:
gulp webserver

**Watch**: 
gulp watch


## Details

Dependencies:
  * Front-end: AngularJS 1.3, ngRoute, Import.io, jQuery
  * Testing: Karma, Jasmine
  * Build tools: gulp, gulp plugins,

Features implemented:
  * Hot linking
  * Basic responsive behaviour
  * noscript warning

Improvements:
  * Proper route management (back, forward button, change title on state change)
  * Auto-complete
  * Run test on dist
  * Add end-to-end tests
  
Code quality:
  * BEM
  * JSLint
  