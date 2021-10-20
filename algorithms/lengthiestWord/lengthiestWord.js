"use strict";
// Write a function `lengthiestWord` that accepts a sentence string as an argument. The function should return the longest word of the sentence. If there is a tie, return the word that appears later in the sentence.
var lengthiestWord = function (str) {
    var strArr = str.split(" ");
    var longWord = "";
    strArr.forEach(function (word) {
        if (word.length >= longWord.length) {
            longWord = word;
        }
    });
    return longWord;
};
console.log(lengthiestWord("a sentence string")); // sentence
console.log(lengthiestWord("I am pretty hungry")); // 'hungry'
console.log(lengthiestWord("we should think outside of the box")); // 'outside'
console.log(lengthiestWord("down the rabbit hole")); // 'rabbit'
console.log(lengthiestWord("simmer down")); // 'simmer'
