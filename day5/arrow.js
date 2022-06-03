// Arrays used 
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var stringArray = ["hello", "javascript", "is", "awesome"];
var palindromeArray = ["racecar", "madam", "level", "noon", "redivider"];


//Arrow Functions

// Print odd numbers in an array
var odd_arow = () => {
  arr.forEach((item) => {
    if (item % 2 != 0) {
      console.log(item);
    }
  });
};
odd_arow();

// Convert all the strings to title caps in a string array
var title_arow = () => {
  for (var i = 0; i < stringArray.length; i++) {
    console.log(stringArray[i][0].toUpperCase() + stringArray[i].slice(1));
  }
};
title_arow();

// Sum of all numbers in an array
var sum_arow = () => {
  var sum = 0;
  for (i in arr) {
    sum += arr[i];
  }
  console.log(sum);
};
sum_arow();

// Return all the prime numbers in an array
var prime_arow = () => {
  isPrime = function (num) {
    for (var i = 2; i < num; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  };
  for (var i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      console.log(arr[i]);
    }
  }
};
prime_arow();

// Return all the palindromes in an array
var palindrome_arow = () => {
  for (var i = 0; i < palindromeArray.length; i++) {
    if (palindromeArray[i] == palindromeArray[i].split("").reverse().join("")) {
      console.log(palindromeArray[i]);
    }
  }
};
palindrome_arow();
