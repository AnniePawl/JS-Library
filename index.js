// Capitalize first word 
String.prototype.capitalizeFirst = function () {
  return this[0].toUpperCase() + this.slice(1)
}

// Capitalize All Words
// Edge Case- Extra spaces between words?
String.prototype.captitalizeAll = function () {
  return this.split(' ').map((word) => {
    return word[0].toUpperCase() + word.slice(1)
  }).join(' ')
}

// UPPERCASE ALL
// Edge Cases?
String.prototype.upperCase = function () {
  return this.toUpperCase()
}

// Remove Spaces 
// Edge Cases?
String.prototype.removeSpace = function () {
  return this.replace(/\s/g, "")
}

// kabob-case
// Edge Cases
String.prototype.kabobCase = function () {
  return this.toLowerCase().split(' ').join('-')
}

// Snake Case
// Edge Cases? 
String.prototype.snakeCase = function () {
  return this.toLowerCase().split(' ').join('_')
}
console.log('snake case me'.snakeCase())


// CamelCase
String.prototype.camelCase = function () {
  return
}