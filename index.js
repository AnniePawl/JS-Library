// CAPITALIZE FIRST WORD
String.prototype.capitalizeFirst = function () {

  // const charOne = this[0]
  // const upperFirst = charOne.toUpperCase()
  // const leftOverCharacters = this.slice(1)
  // const joinedCharacters = upperFirst + leftOverCharacters
  // return joinedCharacters
  return this[0].toUpperCase() + this.slice(1)
}
console.log("foo bar".capitalizeFirst())



// TRANSFORM TO UPPERCASE
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
  // "a frog"       ['a', '  frog  ']
  return this.split(' ').map((word) => { return word.trim() }).join('')
}

console.log('------------')
console.log(" aaa foo moo  bar ".removeSpace2())



// KABOB CASE
String.prototype.kabobCase = function () {
  // Lowercase, split on space, trim, join with -
  const t = this
    .toLowerCase()
    .split(" ")

  console.log('')
  console.log(t)
  console.log('')

  return this
    .toLowerCase()
    .split(" ")
    // .map((word) => word.trim())
    .filter((word) => word != '')
    .join('-')

  // return this.removeSpace().toLowerCase().split(' ').join('-')

  // ' '  >  '' > -''-
}
console.log("  foo  Kabob  \n  Bar \t r ".kabobCase())


// SNAKE CASE
String.prototype.snakeCase = function () {
  return this.split(' ').join('_')
}
console.log("foo   Bar".snakeCase())


// CAMEL CASE
// String.prototype.CamelCase = function () {
//   return this.split(' ').

// }
// console.log("foo bar".CamelCase())

