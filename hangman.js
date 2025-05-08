var _a;
var prompt = require('prompt-sync')();
var word_list = ["apple", "banana", "orange",];
function randomChoice(words) {
    var index = Math.floor(Math.random() * word_list.length);
    return words[index];
}
var word = randomChoice(word_list);
var word_letters = new Set(word.split(""));
var correct = new Set();
var incorrect = new Set();
var attempts = 5;
console.log("It's Hangman, you know the drill!");
console.log("The word has ".concat(word.length, " letters."));
while (attempts > 0 && word_letters.size > 0) {
    var display = word.split("").map(function (letter) { return correct.has(letter) ? letter : "_"; });
    console.log("\nword: ".concat(display.join(" ")));
    console.log("Incorrect Guesses: ".concat(Array.from(incorrect).join(", ")));
    console.log("You have ".concat(attempts, " guesses left"));
    var input = prompt("Guess a letter: ");
    var guess = (_a = input === null || input === void 0 ? void 0 : input.toLowerCase()) !== null && _a !== void 0 ? _a : "";
    if (word_letters.has(guess)) {
        correct.add(guess);
        word_letters.delete(guess);
        console.log("Correct!");
    }
    else {
        incorrect.add(guess);
        attempts--;
        console.log("Wrong, try again!");
    }
    if (word_letters.size === 0) {
        console.log("\nYou win! The word was \"".concat(word, "\"."));
    }
    else {
        console.log("\nYou lost! The word was \"".concat(word, "\"."));
    }
}
// console.log(word_letters);
// correct.add("e");
// incorrect.add('x');
// console.log(correct.has("e"));
// console.log(incorrect.size);
// console.log(word)
