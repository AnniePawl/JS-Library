# JS String Library

![npm](https://img.shields.io/npm/v/@annapawl/string_library?color=%232fad8e)
![GitHub repo size](https://img.shields.io/github/repo-size/AnniePawl/JS-String-Library?color=%232fad8e)

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
**removeEndSpace()** </br> 
This method removes any extra space before and after a string </br> 
`'   String Cheese   '.removeEndSpace()` &#8594; "String Cheese"

**removeAllSpace()** </br> 
This method removes any space within a string </br> 
`'   String Cheese  '.camelCase()` &#8594; "StringCheese"

## Test Coverage 
