// [November]/[Day 4]/[Javascript]/{Palidrome.js}

/* Given a string, return true if the string is a palindrome or false if it is not. Palindromes are strings that form the same word if it is reversed. Do include spaces and punctuation in determining if the string is a palindrome. Make use of Functions and Methods where necessory */

function palidrome(str){
    var len = str.length;  // assign the length of string
    var mid = Math.floor(len / 2);  //round down  

// checking the string
    for (let i = 0; i < mid; i++){
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(palidrome("abba"));  // true