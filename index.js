// Capitalize First Word
String.prototype.capitalize = function () {
  return this[0].toUpperCase() + this.slice(1)
}

console.log("foo bar".capitalize())


// Capitalize All
String.prototype.allCaps = function () {
  return this.toUpperCase()
}

console.log("foo bar".allCaps())


// Transform to Uppercase
// function Uppercase(str) {

// }


