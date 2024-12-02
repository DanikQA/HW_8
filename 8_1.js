const words = ["apple", "banaNA", "kiWi", "ORANGE"];

function capitalizeStrings (arr) {
   return words.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLocaleLowerCase());
}

console.log(capitalizeStrings(words)); // ["Apple", "Banana", "Kiwi", "Orange"]