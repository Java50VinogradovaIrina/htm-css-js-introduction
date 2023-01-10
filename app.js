// const array = [10, 20, 30, -10, 11, 100]
// const index = array.indexOf(30);
//const res = array.splice(index, 1);
//array.splice(index,0, -10, -20);
//array.splice(index,2, 20);
//const ar1 = [40,200];
//array.splice(index, 1, ...ar1);
// const NumbersPerPage = 2;
// const page = 3;
// const firstIndex = (page-1) * NumbersPerPage;
// const pageNumbers = array.slice(firstIndex, firstIndex
//      + NumbersPerPage )

// const ar1 = array.map(multiply2);
// function multiply2(number) {
//     return number * 2;
// }
// const ar2 = array.map(function (number, index) {
//     return index + 1 + '. ' + number;
// });
// 
// const ar1 =array.splice(1, 1, 53);
// console.log (ar1);

function coloringString(str1, str2) {
    const arStr2 = Array.from(str2);
    const res = arStr2.map(function(symbol, index) {
        let color;
        if (symbol === str1 [index]) {
            color = 'green';
            
        } else  {
            color = str1.includes(symbol) ? 'yellow' : 'red';
        }
        return color;
    })
    return res;
}

console.log(coloringString("pappy", "app"));
console.log(coloringString("pappy", "apple"));
console.log(coloringString("pappy", "pappy"));
console.log(coloringString("hope", "pole"));

function getNumbersWithDigitsAmount(digitsAmount, array) {
    const res = array.filter(function(number) {
        const nDigits = getNumberDigits(number);
        return nDigits === digitsAmount;

    });
    return res;
}
function getNumberDigits(number) {
    number = Math.abs(Math.trunc(number));
    const res = number.toString().length;
    return res;

}
console.log (`getNumbersWithDigitsAmount(3, [1, 100, -100, 25, 1000]) return ${getNumbersWithDigitsAmount (3, [1, 100, -100, 25, 1000]) }`)
