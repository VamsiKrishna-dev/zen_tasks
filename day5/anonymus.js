//Do the below programs in anonymous function & IIFE

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Print odd numbers in an array
var oddNumbers = function (arr) {
  arr.forEach(function (item) {
    if (item % 2 != 0) {
      console.log(item);
    }
  });
};
console.log("Odd Numbers in the Array", arr, ": ");
oddNumbers(arr);

// Convert all the strings to title caps in a string array

var stringArray = ["hello", "world", "javascript"];
var titleCaps = function (arr) {
  for (var i = 0; i < stringArray.length; i++) {
    console.log(stringArray[i][0].toUpperCase() + stringArray[i].slice(1));
  }
};
console.log("Original string array: ", stringArray);
titleCaps(stringArray);

// Sum of all numbers in an array
var sumArray = (function () {
  var sum = 0;
  for (i in arr) {
    sum += arr[i];
  }
  console.log("Sum of all numbers in the Array", arr, ": ", sum);
})();

// Return all the prime numbers in an array
isPrime = function (num) {
  for (var i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
};
var temp = [];
for (var i = 0; i < arr.length; i++) {
  if (isPrime(arr[i])) {
    temp.push(arr[i]);
  }
}
console.log("Prime Numbers in the Array", arr, ": ", temp.toString());

// Return all the palindromes in an array
var palindromeArray = ["madam", "racecar", "hello", "world"];
var temp2 = [];
var palindrome = (function () {
  for (let i = 0; i < palindromeArray.length; i++) {
    if (palindromeArray[i] == palindromeArray[i].split("").reverse().join("")) {
      temp2.push(palindromeArray[i]);
    }
  }
})();

console.log(
  "Array: ",
  palindromeArray,
  "\n Palindrome Words: ",
  temp2.toString()
);

// Return median of two sorted arrays of the same size
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Array1: ", arr1);
var arr2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log("Array2: ", arr2);
var median = (function () {
  if (arr1.length == arr2.length) {
    var arr3 = arr1.concat(arr2);
    if (arr3.length % 2 == 0) {
      console.log(
        "Median of two arrays: ",
        (arr3[arr3.length / 2 - 1] + arr3[arr3.length / 2]) / 2
      );
    } else {
      console.log("Median of two arrays: ", arr3[(arr3.length - 1) / 2]);
    }
  } else {
    console.log("Please enter two arrays of same size");
  }
})();

// Remove duplicates from an array
var duplcateArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 10, 10, 10, 10, 6, 7, 8, 9, 1, 1, 1,
  2, 13, 9, 10,
];
var removeDuplicates = (function () {
  var newArray = [];
  for (var i = 0; i < duplcateArray.length; i++) {
    if (newArray.indexOf(duplcateArray[i]) == -1) {
      newArray.push(duplcateArray[i]);
    }
  }
  console.log("Array with Duplicates: ", duplcateArray);
  console.log("Filtered Array: ", newArray);
})();

// Rotate an array by k times
var rotateArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var k = 2;
var rotate = function (arr, k) {
  var newArray = [];
  for (var i = 0; i < rotateArray.length; i++) {
    newArray.push(rotateArray[(i + k) % rotateArray.length]);
  }
  console.log("Original Array: ", rotateArray);
  console.log("Rotated Array by", k, "times: ", newArray);
};
rotate(rotateArray, k);
