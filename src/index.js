module.exports = function toReadable(number) {
    const num = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20,
    ];
    const numStr = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
        "twenty",
    ];

    const numStr1 = [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];

    if (num[number]) {
        const numOne = numStr[number];
        return numOne;
    } else if (number >= 21 && number <= 29) {
        const lastNum = number % 10;
        const str = numStr1[lastNum - 1];
        return `twenty ${str}`;
    } else if (number === 30) {
        return `thirty`;
    } else if (number >= 31 && number <= 39) {
        const lastNum = number % 10;
        const str = numStr1[lastNum - 1];
        return `thirty ${str}`;
    } else if (number === 40) {
        return `forty`;
    } else if (number >= 41 && number <= 49) {
        const lastNum = number % 10;
        const str = numStr1[lastNum - 1];
        return `forty ${str}`;
    } else if (number === 50) {
        return `fifty`;
    } else if (number >= 51 && number <= 59) {
        const lastNum = number % 10;
        const str = numStr1[lastNum - 1];
        return `fifty ${str}`;
    } else if (number === 60) {
        return `sixty`;
    } else if (number >= 61 && number <= 69) {
        const lastNum = number % 10;
        const str = numStr1[lastNum - 1];
        return `sixty ${str}`;
    } else if (number === 70) {
        return `seventy`;
    } else if (number >= 71 && number <= 79) {
        const lastNum = number % 10;
        const str = numStr1[lastNum - 1];
        return `seventy ${str}`;
    } else if (number === 80) {
        return `eighty`;
    } else if (number >= 81 && number <= 89) {
        const lastNum = number % 10;
        const str = numStr1[lastNum - 1];
        return `eighty ${str}`;
    } else if (number === 90) {
        return `ninety`;
    } else if (number >= 91 && number <= 99) {
        const lastNum = number % 10;
        const str = numStr1[lastNum - 1];
        return `ninety ${str}`;
    }
};
