function convertToRoman(num) {

    // The lookupTable gives each roman numeral letter a value. This table is not changing which is why it is a const
    const lookupTable = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }

    // We need an empty accumulator which will change to the roman numeral result which is why it is a let variable
    let accumulator = '';

    // Here we are able to access the key and the key value which is labeled numberValue
    for (const key in lookupTable) {
        const numberValue = lookupTable[key];

        // As long as the num is greater than or equal to the naumberValue, we simultaneously subtract the numberValue from num and add the corresponding key to the accumulator variable.
        while (numberValue <= num) {
            num -= numberValue;
            accumulator += key;
        }
    }

    return accumulator;
}

console.log(convertToRoman(86));