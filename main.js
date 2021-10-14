/* Practice Assignment 6:

Complete this javascript file according to the individual instructions
given in the comments. 

*** DO NOT CHANGE any of the code that you are not instructed to. */

// 1) Create an array named myPizzaOrder that cannot be reassigned and
// contains the 3 elements: "Pepperoni", 12.99, false
const myPizzaOrder = ["Pepperoni", 12.99, false];
console.log(myPizzaOrder);

// 2) Create a function named getPizzaType that will accept an array
// as a parameter and returns the 1st element from the array.
function getPizzaType(array) {
    return array[0];
}
console.log(getPizzaType(myPizzaOrder));

// 3) Create a function named addTax that will accept an array
// like your myPizzaOrder array as a parameter. The function will
// insert an element into the array between the 2nd and 3rd
// element in the array that is equal to the 2nd element multiplied
// by 0.0925 and rounded to the nearest penny (ie 0.95, 0.79, 0.42, etc).
// The function should return the array.
// ===========
// Hint: find the method that will allow you to set the decimals.
function addTax(array) {
    array.splice(1,0,((array[1]*0.0925).toFixed(2)));
    return array;
}
let testarray = [1, 2, 3, 4];
console.log(addTax(testarray));

// 4) Create a function named completeOrder that will accept an array
// as a parameter. The function will change the value of the 4th
// element in the array to true and return the array.
function completeOrder(array) {
    array[3] = true;
    return array;
}
let array = [1,2,3,4,5];
console.log(completeOrder(array));

// 5) Create a function named allTheNumbers that accepts a number as
// a parameter. The function will create an array that contains all of
// the numbers from 1 to whatever number the parameter is. The array
// should not include the parameter number. The function returns
// the array.
function allTheNumbers(number) {
    let array = [];
    for (i=1 ; i < number ; i++) {
        array.push(i);
    }
    return array;
}
console.log(allTheNumbers(5));

// 6) Create a function named getEvens that accepts 2 parameters:
// startNum and endNum. The function should return an array that
// includes the even numbers from startNum to endNum. If the startNum
// or endNum are even, they should be included in the returned array.
function getEvens(startNum, endNum) {
    let array = [];
    for (i=startNum ; i <= endNum ; i++) {
        if (i % 2 == 0) {
        array.push(i);
        }
    }
    return array;
}
console.log(getEvens(2,10));

// 7) Create a function named getLastElement that accepts an array
// as a parameter and returns the last element of the array. The
// array can have any number of elements. The function should always
// return the last element.
function getLastElement(array) {
    return (array[(array.length-1)]);
}
console.log(getLastElement(myPizzaOrder));

// 8) Create a function named combineArrays that accepts two arrays
// as parameters and combines them into one array. The function
// should return the new combined array.
function combineArrays(array1, array2) {
    let newArray = array1;
    newArray.push(...array2);
    return newArray;
}
let array1 = [1,2];
let array2 = [3,4,5];
console.log(combineArrays(array1, array2));

// 9) Create a function named isPalindrome that accepts a string as
// a parameter. The function will return true if the string is a
// palindrome and false if the string is not. To check for a
// palindrome, remove all spaces and set to lowercase. The string
// will be identical both forward and reverse if it is a palindrome.
// For example: Taco Cat is a palindrome. tacocat is the same both
// forward and reverse.
// ==========
// Hints: There are several possible solutions for this. I use a
// combination of string and array methods. You can turn the string
// into an array, use arrays methods, and turn the array back into
// a string. This is also a challenge on freeCodeCamp. Check the
// help forums there if you get stuck!
function isPalindrome (string) {
    string = string.toLowerCase();
    string = string.replaceAll(' ', '');
    const array = string.split('');
    isItTrue = false;
    i2 = array.length-1;
    for (i=0;i<i2;i++,i2--) {
        if (array[i] == array[i2]) {
            isItTrue = true;
        }
        else {
            isItTrue = false;
            break;
        }
    }
    return isItTrue;
}
let string = " heLLo 1AAAA    3  ";
let string2 = " Taco Cat ";
console.log(isPalindrome(string));
console.log(isPalindrome(string2));