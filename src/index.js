// capitalizeFirst()
// Capitalizes the first letter of a string 
String.prototype.capitalizeFirst = function () {
    return this[0].toUpperCase() + this.slice(1);
};
// capitalizeAll()
// Capitalizes the first letter of all words in a string
String.prototype.captitalizeAll = function () {
    return this.split(' ').map(function (word) {
        return word[0].toUpperCase() + word.slice(1);
    }).join(' ');
};
// upperCase()
// Transforms all letters to uppercase
String.prototype.upperCase = function () {
    return this.toUpperCase();
};
// removeAllSpaces()
// Removes all spaces from a string 
String.prototype.removeAllSpaces = function () {
    return this.replace(/\s/g, "");
};
// removeEndSpaces()
// Removes spaces from both ends of a string
String.prototype.removeEndSpaces = function () {
    return this.trim();
};
// removeExcessSpaces()
// Removes excess space around words (leaves single space)
String.prototype.removeExcessSpaces = function () {
    var result = [];
    this.trim().split(' ').forEach(function (word) {
        if (word.length > 0) {
            result.push(word.trim());
        }
    });
    return result.join(' ');
};
// kebabCase()
// Transforms string to lowercase and replaces spaces with hyphen 
String.prototype.kebabCase = function () {
    return this.toLowerCase().split(' ').join('-');
};
// snakeCase()
// Transforms string to lowercase and replaces spcaces with underscore
String.prototype.snakeCase = function () {
    return this.toLowerCase().split(' ').join('_');
};
// CamelCase
// Capitalizes first letter of each word following first word and removes spaces
String.prototype.camelCase = function () {
    var words = this.removeExcessSpaces().captitalizeAll().split(' ');
    words[0] = words[0].toLowerCase();
    return words.join('');
};
