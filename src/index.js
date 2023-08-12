module.exports = function toReadable (number) {
    const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 1, 20];
    const numStr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
    'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
     'eighteen','nineteen', 'twenty']

  if(num[number]){
    const numOne = numStr[number]
    return numOne;
  }
  const num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const numStr1 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
    'nine']
    if(number[0] == 2 && number.length === 3){
        return 'twenty' + numStr1[number[1]];
    }
}
