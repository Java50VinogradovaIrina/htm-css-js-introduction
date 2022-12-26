//let num = 40.3;

//num = Math.floor(num);
//num = Math.trunc(num);
 //num = Math.ceil(num);
//num = Math.round(num);
//num **= 2;
//let str = "abcd";
//let str1 = 'abcd';
//let res = +"123" + 56;
//let str2 = "ab" / 8;
 //let res = true + true;
 //let res1 = true && false;
 //let res2  = -123 && 256;
function getDigitSum(number) {
    let num = 0;
    let sum = 0; 
    
    while(number) {
        num = number % 10;
        number = (number - num)/10;
        sum = sum+num;
    }
    return sum;
}

getDigitSum(123);

function getDigitSum1(number) {
   // if(number<0){
     //   number= -number
   // }
number = Math.trunc(Math.abs(number));
let sum = 0;
do {
    const digit = number % 10;
    number = Math.trunc(number/10);
    sum += digit;
}while (number);
return sum;
}


function computeExpression(expressionStr) {
    const res = eval(expressionStr);
    return res;
    try{
        res = eval(expressionStr);

    } catch(e) {
        res =  NaN;
    }


    return res;
}
//console.log(computeExpression("9000 / ((10 + 20) ** 2)")) ; //prints 10



function printAnanas() {
    const res = ("A" +  + "A" + "AS").toLowerCase();
    console.log (res);
}
printAnanas();

function revers(number){
    let res = number < 0 ? "-" : "";
    if( number < 0) {
        number = - number;
    }
    number = Math.trunc(number);
    do {
        const digit = number % 10;
        res += digit;
        number = Math.trunc(number / 10);
    }while(number);
    return res;
}
let n = 10;
let count = 0;
while (--n) {
    count++;
}
let d;
// 3 + 7 * "10"
//tests
console.log("result of getDigitsSum(123.45) is " + getDigitsSum(123.45));
console.log("result of getDigitsSum(-280.123) is " + getDigitsSum(-280.123));
console.log("result of getDigitsSum(123) is " + getDigitsSum(123));
printAnanas();
console.log("result of computeExpression('9000 / ((10 + 20) ** 2)') is " + computeExpression('9000 / ((10 + 20) ** 2)'));
console.log("result of computeExpression('9000 / ((10 + 20) ** 2))') + 10 is " + (computeExpression('9000 / ((10 + 20) ** 2)') + 10));
console.log("result of computeExpression('9 + 100 / 2') is " + computeExpression('9 + 100 / 2'));
console.log("result of reverse(123.45) is " + reverse(123.45));
console.log("result of reverse(-280.123) is " + reverse(-280.123));

