'use strict';

let ones = [
    "", "one", "two",
    "three", "four", "five",
    "six", "seven", "eight", "nine" 
]

let tens = [
    "ten", "eleven", "twelve",
    "thirteen", "fourteen",
    "fifteen", "sixteen",
    "seventeen", "eighteen", "nineteen"
]

let tensBig = [
    "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy",
    "eighty", "ninety"
]

let big = [
    "", "", "", "", "hundred", "thousand", "million", "billion", 'trillion', 'quadrillion',
    'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion'
]

let veryBig = ["", "", "million", "billion", 'trillion', 'quadrillion',
    'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion']

function nearestThree(value, roundTo = 3) {
    return Math.floor(value / roundTo) * roundTo;
}

function intoThree(number) {
    let numbersArray = input.toString().split("").reverse().join("").match(/.{1,3}/g).reverse();

    for (let index = 0; index < numbersArray.length; index++) {
        let numbers = numbersArray[index];
        numbersArray[index] = numbers.split("").reverse().join("");
    }

    return numbersArray;
}

function toSmallWords(number) {
    let smallWords = "";
    number = number.split("");
    if(number.length == 3) {
        smallWords += ones[number[0]] + " " + big[4] + " "
        smallWords += number[1] != 0 ? 
                    (number[1] == 1 ? tens[number[2]] : tensBig[number[1]] + " ")
                    : " "
        smallWords += number[1] == 1 ? "" : ones[number[2]]
    }

    if(number.length == 2) {
        smallWords += tens[number[1]]
    }

    if(number.length == 1) {
        smallWords += ones[number[0]]
    }

    return smallWords;
}

function convert(input) {
    let output = "The number: " + input + "\n";
    output += "In words: ";
    
    let numbersArray = intoThree(input);
    console.log(numbersArray);
   
    let bigIndex = (Math.floor(Math.log10(input))) - (Math.floor(Math.log10(input)) % 3);
    bigIndex = (bigIndex / 3) + 4;
    
    for (let index = 0; index < numbersArray.length; index++) {
        const number = numbersArray[index];

        if(index == numbersArray.length - 1) {
            output += toSmallWords(number);
            break;
        }

        if (index == 0) {
            output += toSmallWords(number) + " " + big[bigIndex] + " ";
        } else {
            output += toSmallWords(number) + " " + big[bigIndex - index] + " ";
        }
    }
    
    return output;
}

let args = process.argv;
let input = args[2];
// let input = 1123547896;
let convertedToWord = "";

console.log(convert(input));