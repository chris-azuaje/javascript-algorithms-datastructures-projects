// Here we have the full alphabet, upper case only, and it is placed outside of the function so there is no need to re-create it.

const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
];

function rot13(str) {

    // The accumulator will return as the final output
    let accumulator = "";

    // The for loop will go through each character of the string. If it is not part of the alphabet, it will be added to the accumulator. If it is part of the alphabet, it will add or subtract 13.
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const isALetter = alphabet.includes(char);
        if (isALetter === false) {
            accumulator += char;
        } else {
            const charIndex = alphabet.findIndex((c) => c === char);
            accumulator += alphabet[charIndex + 13] || alphabet[charIndex - 13];
        }
    } return accumulator;

}

console.log(rot13("SERR PBQR PNZC"));
