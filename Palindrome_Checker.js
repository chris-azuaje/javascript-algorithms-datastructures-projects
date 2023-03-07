function palindrome(str) {
    const alphaNumericOnly = str
        // Lowercase the input
        .toLowerCase()
        // Strip out non-alphanumeric characters
        .match(/[a-z0-9]/g);

    // Checking alphaNumericOnly output
    console.log(alphaNumericOnly);

    // return string === reversedString
    return alphaNumericOnly.join('') === alphaNumericOnly.reverse().join('');
}

console.log(palindrome("eye"));