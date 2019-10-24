// Capitalize first word 
String.prototype.capitalizeFirst = function () {

  // const charOne = this[0]
  // const upperFirst = charOne.toUpperCase()
  // const leftOverCharacters = this.slice(1)
  // const joinedCharacters = upperFirst + leftOverCharacters
  // return joinedCharacters
  return this[0].toUpperCase() + this.slice(1)
}
console.log("foo bar".capitalizeFirst())



// TRANSFORM FOR UPPERCASE
String.prototype.upperCase = function () {
  return this.toUpperCase()
}
console.log("foo bar".upperCase())


// Capitalize All Words
String.prototype.allCaps = function () {
  return this.split(' ').map((word) => {
    // Check to see if word is "small word"

    return word.capitalizeFirst()
  }).join(' ')

  // const words = this.split(' ')
  // const allCapWords = words.map((word) => {
  //   return word.capitalizeFirst()
  // })
  // const joinedWords = allCapWords.join(' ')

  // return joinedWords
}
console.log("foo bar".allCaps())

// Remove Extra Space
String.prototype.removeSpace = function () {
  return this.replace(/\s/g, "")

}
console.log("  foo   bar ".removeSpace())


// Remove Extra Space Alternative
String.prototype.removeSpace2 = function () {
  return this.trim()
}
console.log("  foo   bar ".removeSpace2())



// KABOB CASE
String.prototype.kabobCase = function () {
  return this.removeSpace().toLowerCase().split(' ').join('-')
}
console.log("foo  Bar".kabobCase())


// SNAKE CASE
String.prototype.snakeCase = function () {
  return this.split(' ').join('_')
}
console.log("foo bar".snakeCase())


// CAMEL CASE
// String.prototype.CamelCase = function () {

// }
// console.log("foo bar".CamelCase())

