module.exports = function toReadable(number) {
    const num = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
        39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
        57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
        75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92,
        93, 94, 95, 96, 97, 98, 99, 100];
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
        "twenty one",
        "twenty two",
        "twenty three",
        "twenty four",
        "twenty five",
        "twenty six",
        "twenty seven",
        "twenty eight",
        "twenty nine",
        "thirty",
        "thirty one",
        "thirty two",
        "thirty three",
        "thirty four",
        "thirty five",
        "thirty six",
        "thirty seven",
        "thirty eight",
        "thirty nine",
        "forty",
        "forty one",
        "forty two",
        "forty three",
        "forty four",
        "forty five",
        "forty six",
        "forty seven",
        "forty eight",
        "forty nine",
        "fifty",
        "fifty one",
        "fifty two",
        "fifty three",
        "fifty four",
        "fifty five",
        "fifty six",
        "fifty seven",
        "fifty eight",
        "fifty nine",
        "sixty",
        "sixty one",
        "sixty two",
        "sixty three",
        "sixty four",
        "sixty five",
        "sixty six",
        "sixty seven",
        "sixty eight",
        "sixty nine",
        "seventy",
        "seventy one",
        "seventy two",
        "seventy three",
        "seventy four",
        "seventy five",
        "seventy six",
        "seventy seven",
        "seventy eight",
        "seventy nine",
        "eighty",
        "eighty one",
        "eighty two",
        "eighty three",
        "eighty four",
        "eighty five",
        "eighty six",
        "eighty seven",
        "eighty eight",
        "eighty nine",
        "ninety",
        "ninety one",
        "ninety two",
        "ninety three",
        "ninety four",
        "ninety five",
        "ninety six",
        "ninety seven",
        "ninety eight",
        "ninety nine",
        "one hundred"
    ];

    if (num[number]) {
        const numOne = numStr[number];
        return numOne;
    }
    else if (number >= 101 && number <= 199) {
        const newNumStr = number.toString();
        const newNumSlice = newNumStr.slice(1);
        const finishNum = parseInt(newNumSlice);
        return `one hundred ${numStr[finishNum]}`;
    }
    else if (number >= 201 && number <= 299) {
        const newNumStr = number.toString();
        const newNumSlice = newNumStr.slice(1);
        const finishNum = parseInt(newNumSlice);
        return `two hundred ${numStr[finishNum]}`;
    }
    else if (number >= 301 && number <= 399) {
        const newNumStr = number.toString();
        const newNumSlice = newNumStr.slice(1);
        const finishNum = parseInt(newNumSlice);
        return `three hundred ${numStr[finishNum]}`;
    }
    else if (number >= 401 && number <= 499) {
        const newNumStr = number.toString();
        const newNumSlice = newNumStr.slice(1);
        const finishNum = parseInt(newNumSlice);
        return `four hundred ${numStr[finishNum]}`;
    }
    else if (number >= 501 && number <= 599) {
        const newNumStr = number.toString();
        const newNumSlice = newNumStr.slice(1);
        const finishNum = parseInt(newNumSlice);
        return `five hundred ${numStr[finishNum]}`;
    }
    else if (number >= 601 && number <= 699) {
        const newNumStr = number.toString();
        const newNumSlice = newNumStr.slice(1);
        const finishNum = parseInt(newNumSlice);
        return `six hundred ${numStr[finishNum]}`;
    }
    else if (number >= 701 && number <= 799) {
        const newNumStr = number.toString();
        const newNumSlice = newNumStr.slice(1);
        const finishNum = parseInt(newNumSlice);
        return `seven hundred ${numStr[finishNum]}`;
    }
    else if (number >= 801 && number <= 899) {
        const newNumStr = number.toString();
        const newNumSlice = newNumStr.slice(1);
        const finishNum = parseInt(newNumSlice);
        return `eight hundred ${numStr[finishNum]}`;
    }
    else if (number >= 901 && number <= 999) {
        const newNumStr = number.toString();
        const newNumSlice = newNumStr.slice(1);
        const finishNum = parseInt(newNumSlice);
        return `nine hundred ${numStr[finishNum]}`;
    }
    else if(number === 200){
        return 'two hundred'
    }
    else if(number === 300){
        return 'three hundred'
    }
    else if(number === 400){
        return 'four hundred'
    }
    else if(number === 500){
        return 'five hundred'
    }
    else if(number === 600){
        return 'six hundred'
    }
    else if(number === 700){
        return 'seven hundred'
    }
    else if(number === 800){
        return 'eight hundred'
    }
    else if(number === 900){
        return 'nine hundred'
    }
};
