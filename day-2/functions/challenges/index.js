const { check, printGreenMessage, printRedMessage } = require("../../../test-api");

function modulo(a, b) {
return a % b;
}

console.log("modulo() gives the correct output");
try {
  check(modulo).whenCalledWith(10, 2).returns(0);
  check(modulo).whenCalledWith(119, 10).returns(9);
  check(modulo).whenCalledWith(50, 6).returns(2);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

function squareRoot(total) {
return Math.sqrt(total);
}

console.log("squareRoot() works for positive integers");

try {
  check(squareRoot).whenCalledWith(100).returns(10);
  check(squareRoot).whenCalledWith(25).returns(5);
  check(squareRoot).whenCalledWith(121).returns(11);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

function raiseToPower(num, power) {
return Math.pow(num,power);
}

console.log("raiseToPower() raises given number to a power");
try {
  check(raiseToPower).whenCalledWith(10, 3).returns(1000);
  check(raiseToPower).whenCalledWith(25, 2).returns(625);
  check(raiseToPower).whenCalledWith(10, 0).returns(1);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

function capitaliseFirstLetter(str) {
const firstPart = str[0].toUpperCase();
const secondPart = str.slice(1);

return firstPart + secondPart;
 }

console.log("capitaliseFirstLetter() can capitalise the first letter in a string");
try {
  check(capitaliseFirstLetter).whenCalledWith("bang").returns("Bang");
  check(capitaliseFirstLetter).whenCalledWith("apple").returns("Apple");
  check(capitaliseFirstLetter).whenCalledWith("coding").returns("Coding");

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

// declare areValuesEqual here

// return true if the passed arguments are strictly equal
// you can complete this problem without resorting to if statements


function areValuesEqual(a,b){
return a === b ? true : false
};



console.log("areValuesEqual() checks if two values are the same");
try {
  check(areValuesEqual).whenCalledWith(10, 10).returns(true);
  check(areValuesEqual).whenCalledWith("good", "bad").returns(false);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

// declare isFromThe60s here

// return true if the year is in the 1960's
// returns false otherwise
// you can complete this problem without resorting to if statements

function isFromThe60s(num){
  return num > 1959 && num < 1970 ? true : false;
}


console.log("isFromThe60s() checks if a number is within 1960 to 1969 (inclusive)");
try {
  check(isFromThe60s).whenCalledWith(1962).returns(true);
  check(isFromThe60s).whenCalledWith(1965).returns(true);
  check(isFromThe60s).whenCalledWith(1970).returns(false);
  check(isFromThe60s).whenCalledWith(1960).returns(true);
  check(isFromThe60s).whenCalledWith(1959).returns(false);
  check(isFromThe60s).whenCalledWith(1901).returns(false);
  check(isFromThe60s).whenCalledWith(1990).returns(false);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

// declare isEvenLength here

// return true if string has an even length
// you can complete this problem without resorting to if statements

function isEvenLength(str){
return str.length % 2 == 0 ? true : false;
}



console.log("isEvenLength() checks if string has even number of characters");
try {
  check(isEvenLength).whenCalledWith("hello").returns(false);
  check(isEvenLength).whenCalledWith("abcd").returns(true);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

// declare isAbsolutePath here

// checks if a string is an absolute path - does it start with a /
// HINT: all absolute file paths start with a /

function isAbsolutePath(str){
return str.substring(0,1) === '/' ? true : false;
}

console.log("isAbsolutePath() checks if a file path is absolute or relative");

try {
  check(isAbsolutePath).whenCalledWith("/Users/mitch").returns(true);
  check(isAbsolutePath).whenCalledWith("/Users/mitch/northcoders/remote_course/remote_precourse_1").returns(true);
  check(isAbsolutePath).whenCalledWith("../composers").returns(false);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

// declare getMiddle here

// return the middle (or middle two) character(s) of the passed string
// HINT: You could use the ternary operator for this challenge

function getMiddle(str) {
  var middle = str.length / 2;
  return (str.length % 2) 
    ? str.charAt(Math.floor(middle))
    : str.slice(middle - 1, middle + 1);
}



console.log("getMiddle() returns the middle character in a string of odd length");
try {
  check(getMiddle).whenCalledWith("abc").returns("b");
  check(getMiddle).whenCalledWith("mitch").returns("t");

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

console.log("getMiddle() returns the middle characters in a string of even length");
try {
  check(getMiddle).whenCalledWith("abcd").returns("bc");
  check(getMiddle).whenCalledWith("blob").returns("lo");

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

// declare getCharCode here

// returns a sentence stating the character code for a given character
// Look up ASCII online to get a better idea of what a character code is
// Look up a useful JavaScript method for dealing with charCodes !

function getCharCode(a) { 
  return `The ASCII character for ${a} is ${a.charCodeAt(0)}`; 
}

console.log("getCharCode() will return a message stating the ascci code of a passed char");

try {
  check(getCharCode).whenCalledWith("A").returns("The ASCII character for A is 65");
  check(getCharCode).whenCalledWith("b").returns("The ASCII character for b is 98");
  check(getCharCode).whenCalledWith("z").returns("The ASCII character for z is 122");
  check(getCharCode).whenCalledWith("k").returns("The ASCII character for k is 107");
  check(getCharCode).whenCalledWith("!").returns("The ASCII character for ! is 33");
  check(getCharCode).whenCalledWith("M").returns("The ASCII character for M is 77");

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

// declare createPercentage here

// should take 2 numbers and work out their percentage

function createPercentage(num1,num2){
var num = Math.round((num1 / num2) * 100);
return num.toString() + '%';
}


console.log('createPercentage() creates a percentage string in the form "--%"');

try {
  check(createPercentage).whenCalledWith(1, 2).returns("50%");
  check(createPercentage).whenCalledWith(50, 100).returns("50%");
  check(createPercentage).whenCalledWith(2, 3).returns("67%");
  check(createPercentage).whenCalledWith(3, 4).returns("75%");
  check(createPercentage).whenCalledWith(1, 7).returns("14%");

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

// declare extractNumber here

// should extract a number embedded in a string surrounded by ( ) parentheses

function extractNumber(str){
  var answer = [];
  var numbers = ['0','1','2','3','4','5','6','7','8','9','10']
  var splitt = str.split('')
for(let i = 0; i < splitt.length; i++){
  for(let j = 0; j < numbers.length; j++){
if(splitt[i] === numbers[j]){
answer.push(numbers[j])
}
  }
}
return parseInt(answer.join(''));
}

console.log(extractNumber("lasjdasasj(123)asljdlajk"));




console.log("extractNumber() should return the number buried inside a string");

try {
  check(extractNumber).whenCalledWith("lasjdasasj(123)asljdlajk").returns(123);
  check(extractNumber).whenCalledWith("qwasdaoyer(44687)iuwyeibasdahgsd").returns(44687);
  check(extractNumber).whenCalledWith("qwasdasdfsyer(19827)iusdfsdfsd").returns(19827);
  check(extractNumber).whenCalledWith("qwasdasdfsyer(5601)iusdfsdfsd").returns(5601);
  check(extractNumber).whenCalledWith("qwasdasdfsyer(29)iusdfsdfsd").returns(29);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}
