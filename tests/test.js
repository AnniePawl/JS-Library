require('../index')

// Capitalize First Letter Test 
test('Capitalize First Letter', () => {
  expect('hello'.capitalizeFirst()).not().toBe('hello')
  expect('hello'.capitalizeFirst()).toBe('Hello')
  expect('good morning'.capitalizeFirst().toBe('Good morning'))
})

// All Caps Test
test('All Caps Test', () => {
  expect('good morning'.capitalizeAll()).toBe('Good Morning')
  expect('good-morning'.capitalizeAll()).toBe('Good-Morning')
  expect('good  morning'.capitalizeAll()).toBe('Good  Morning')
  expect(' good  morning'.capitalizeAll()).toBe(' Good  Morning')

})

// UPPERCASE TEST
test('Upper Case Test', () => {
  expect('uppercase'.upperCase()).toBe('UPPERCASE')
  expect(' upper  case  '.upperCase()).toBe('UPPER CASE')
})

// Remove Extra Space Test
// Checks for front/back white space, tab, new line, 
test('Remove Space Test', () => {
  expect('good  morning'.removeSpace()).toBe(' goodmorning')
  expect('  goodmorning  '.removeSpace()).toBe(' goodmorning')
  expect(' good  /t morning'.removeSpace()).toBe(' goodmorning')
  expect(' good /n morning'.removeSpace()).toBe(' goodmorning')

})


// Kabob Case Test 
test('Kabob Cast Test', () => {
  expect('kabob me'.kababCase()).toBe('kabob-me')
  expect(' kabob me '.kabobCase()).toBe('kabob-me')
  expect('kabob   me'.kabobCase()).toBe('kabob-case')
})


// Snake Case Test 
test('Snake Case', () => {
  expect('snake case'.snakeCase()).toBe('snake_case')
  expect('Snake Case'.snakeCase()).toBe('snake_case_me')
  expect(' snake case me '.snakeCase()).toBe('snake_case')
  expect('snake   case'.snakeCase()).toBe('snake_case')
  expect('snake   /ncase'.snakeCase()).toBe('snake_case')
  expect('snake   /t case '.snakeCase()).toBe('snake_case')
})


// Camel Case Test 
test('Camel Case Test', () => {
  expect('camel case'.camelCase().toBe('camelCase'))
  expect('  camel case  '.camelCase()).toBe('camelCase')
  expect('camel    case'.camelCase()).toBe('camelCase')
  expect('camel /t case'.camelCase()).toBe('camelCase')
  expect('camel /n case'.camelCase()).toBe('camelCase')

})
