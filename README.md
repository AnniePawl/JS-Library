# JS String Library
![npm](https://img.shields.io/npm/v/@annapawl/string_library?style=flat-square)
![npm bundle size](https://img.shields.io/bundlephobia/min/@annapawl/string_library?style=flat-square)
![GitHub repo size](https://img.shields.io/github/repo-size/AnniePawl/JS-String-Library?style=flat-square)
[![Build Status](https://travis-ci.com/AnniePawl/JS-String-Library.svg?branch=master)](https://travis-ci.com/AnniePawl/JS-String-Library)
[![Coverage Status](https://coveralls.io/repos/github/AnniePawl/JS-String-Library/badge.svg?branch=master)](https://coveralls.io/github/AnniePawl/JS-String-Library?branch=master)
![npm](https://img.shields.io/npm/dy/@annapawl/string_library?style=flat-square)
[![NPM](https://img.shields.io/static/v1?style=social&logo=npm&label=NPM&message=install)](https://www.npmjs.com/package/<@annapawl/string_library>)
This is a lightweight library that extends the functionality of JavaScript's built-in String type

### Getting Started
Run the following command in your project folder: <br/>
```
npm install @annapawl/string_library --save
``` 
Then add this to your index.js file <br/>
```
require('@annapawl/src/string_library')
```

## Capitalization 
**capitalizeFirst()** </br> 
This method capitalizes the first letter of an entire string </br> 
`'string cheese'.capitalizeFirst()` &#8594; "String cheese"

**capitalizeAll()** </br> 
This method capitalizes the first letter of every word in a string </br> 
`'string cheese'.capitalizeAll()` &#8594; "String Cheese"

**upperCase()** </br> 
This method capitalizes ALL letters in a string </br> 
`'string cheese'.upperCase()` &#8594; "STRING CHEESE"


## Special Casing 
**kebabCase()** </br> 
This method transforms a string into lower case and seperates words with hyphens </br> 
`'String Cheese'.kebabCase()` &#8594; "string-cheese"

**snakeCase()** </br> 
This method transforms a string into lower case and seperates words with an underscore </br> 
`'String Cheese'.snakeCase()` &#8594; "string_cheese"

**camelCase()** </br> 
This method removes spaces from a string and capitalizes the first letter of each word following the first word </br> 
`'String Cheese'.camelCase()` &#8594; "stringCheese"

## Spacing 
**removeEndSpaces()** </br> 
This method removes any extra space before and after a string </br> 
`'   String Cheese   '.removeEndSpaces()` &#8594; "String Cheese"

**removeAllSpaces()** </br> 
This method removes any space within a string </br> 
`'   String Cheese  '.removeAllSpaces()` &#8594; "StringCheese"

**removeExcessSpaces()** </br> 
This method removes excess spaces around words (leaves single space) </br> 
`'   String Cheese  '.removeAllSpaces()` &#8594; "StringCheese"

## Test Coverage 
```
npx jest --coverage
```
----------|----------|----------|----------|----------|-------
------------|
File      |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------|----------|----------|----------|----------|-------------------|
All files |      100 |      100 |      100 |      100 |                   |
 index.js |      100 |      100 |      100 |      100 |                   |
----------|----------|----------|----------|----------|-------------------|
Test Suites: 1 passed, 1 total
Tests:       9 passed, 9 total
Snapshots:   0 total
Time:        1.686s
