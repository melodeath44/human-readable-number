module.exports = function toReadable (number) {
    const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 1, 20];
    const numStr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
    'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
     'eighteen','nineteen', 'twenty']

    const numStr1 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
       'nine']

    if(num[number]){
    const numOne = numStr[number]
    return numOne;
        }

    else if (number.toString()[0] === '2' && number.toString().length === 2) {
        return `twenty ${numStr1[number.toString()[1]]}`;
        }
}
