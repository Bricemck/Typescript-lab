const prompt = require('prompt-sync')();
const word_list: string[] = ["apple", "banana", "orange",]

function randomChoice(words: string[]): string {
    const index: number = Math.floor(Math.random() * word_list.length);
    return words[index];
}

const word: string = randomChoice(word_list);
let word_letters: Set<string> = new Set(word.split(""));

const correct = new Set<string>();
const incorrect = new Set<string>();
let attempts: number = 5


console.log("It's Hangman, you know the drill!");
console.log(`The word has ${word.length} letters.`);

while (attempts > 0 && word_letters.size > 0) {
    const display = word.split("").map(letter => correct.has(letter) ? letter : "_");


    console.log(`\nword: ${display.join(" ")}`);
    console.log(`Incorrect Guesses: ${Array.from(incorrect).join(", ")}`);
    console.log(`You have ${attempts} guesses left`);

    const input = prompt("Guess a letter: ");
    const guess: string = input?.toLowerCase() ?? "";

    if (word_letters.has(guess)) {
        correct.add(guess);
        word_letters.delete(guess);
        console.log("Correct!");
    } else {
        incorrect.add(guess);
        attempts --;
        console.log("Wrong, try again!");
    }
    if (word_letters.size === 0) {
        console.log(`\nYou win! The word was "${word}".`);
    } else {
        console.log(`\nYou lost! The word was "${word}".`);
    }
}



// console.log(word_letters);

// correct.add("e");
// incorrect.add('x');

// console.log(correct.has("e"));
// console.log(incorrect.size);

// console.log(word)