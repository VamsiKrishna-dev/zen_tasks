
//Do the below programs in anonymous function & IIFE

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Print odd numbers in an array  

var oddNumbers = function () {
    arr.forEach(function (item) {
        if (item % 2 != 0) {
            console.log(item);
        }
    });
}();

// Convert all the strings to title caps in a string array  

var stringArray = ["hello", "world", "javascript"];
console.log(stringArray);
var titleCaps = function () {
    for (var i = 0; i < stringArray.length; i++) {
        console.log(stringArray[i][0].toUpperCase()+stringArray[i].slice(1));
    }
}();

// Sum of all numbers in an array  
var sumArray = function () {
    var sum = 0;
    for (i in arr) {
        sum += arr[i];
    }
    console.log(sum);
}();

console.log(arr);
// Return all the prime numbers in an array  
isPrime = function (num) {
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}
for (var i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
        console.log(arr[i]);
    }
}

// Return all the palindromes in an array  
var palindromeArray = ["madam", "racecar", "hello", "world"];
var palindrome = function () {
    for (var i = 0; i < palindromeArray.length; i++) {
        if (palindromeArray[i] == palindromeArray[i].split("").reverse().join("")) {
            console.log(palindromeArray[i]);
        }
    }
}();

// Return median of two sorted arrays of the same size  
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arr2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var median = function () {
    var arr3 = [];
    for (var i = 0; i < arr1.length; i++) {
        arr3.push(arr1[i]);
        arr3.push(arr2[i]);
    }
    arr3.sort(function (a, b) {
        return a - b
    });
    console.log(arr3);
    if (arr3.length % 2 == 0) {
        console.log((arr3[arr3.length / 2 - 1] + arr3[arr3.length / 2]) / 2);
    } else {
        console.log(arr3[(arr3.length - 1) / 2]);
    }
}();

// Remove duplicates from an array  
var duplcateArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 10, 10, 10, 10, 6, 7, 8, 9, 1, 1, 1, 2, 13, 9, 10];
var removeDuplicates = function () {
    var newArray = [];
    for (var i = 0; i < duplcateArray.length; i++) {
        if (newArray.indexOf(duplcateArray[i]) == -1) {
            newArray.push(duplcateArray[i]);
        }
    }
    console.log("Array with Duplicates: ", duplcateArray)
    console.log("Filtered Array: ", newArray);
}();

// Rotate an array by k times 
var rotateArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var rotate = function (arr) {
    var k = 2;
    var newArray = [];
    for (var i = 0; i < rotateArray.length; i++) {
        newArray.push(rotateArray[(i + k) % rotateArray.length]);
    }
    console.log("Original Array: ", rotateArray);
    console.log("Rotated Array",newArray);
}
rotate(rotateArray);


// IIFE 
console.log("IIFE Implementation");


// Print odd numbers in an array

(function () {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var oddNumbers = function () {
        arr.forEach(function (item) {
            if (item % 2 != 0) {
                console.log(item);
            }
        });
    }
    oddNumbers();
})();

// Convert all the strings to title caps in a string array
(function () {
    console.log(stringArray);
    var titleCaps = function () {
        for (var i = 0; i < stringArray.length; i++) {
            console.log(stringArray[i][0].toUpperCase()+stringArray[i].slice(1));
        }
    }
    titleCaps();
})();

// Sum of all numbers in an array
(function () {
    var sumArray = function () {
        var sum = 0;
        for (i in arr) {
            sum += arr[i];
        }
        console.log(sum);
    }
    sumArray();
})();

// Return all the prime numbers in an array
(function () {
    isPrime = function (num) {
        for (var i = 2; i < num; i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }
    for (var i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            console.log(arr[i]);
        }
    }
} )();

// Return all the palindromes in an array
(function () {
    var palindrome = function () {
        for (var i = 0; i < palindromeArray.length; i++) {
            if (palindromeArray[i] == palindromeArray[i].split("").reverse().join("")) {
                console.log(palindromeArray[i]);
            }
        }
    }
    palindrome();
} )();

// Return median of two sorted arrays of the same size
(function () {
    var median = function () {
        var arr3 = [];
        for (var i = 0; i < arr1.length; i++) {
            arr3.push(arr1[i]);
            arr3.push(arr2[i]);
        }
        arr3.sort(function (a, b) {
            return a - b
        });
        console.log(arr3);
        if (arr3.length % 2 == 0) {
            console.log((arr3[arr3.length / 2 - 1] + arr3[arr3.length / 2]) / 2);
        } else {
            console.log(arr3[(arr3.length - 1) / 2]);
        }
    }
    median();
} )();

// Remove duplicates from an array
(function () {
    var removeDuplicates = function () {
        var newArray = [];
        for (var i = 0; i < duplcateArray.length; i++) {
            if (newArray.indexOf(duplcateArray[i]) == -1) {
                newArray.push(duplcateArray[i]);
            }
        }
        console.log("Array with Duplicates: ", duplcateArray)
        console.log("Filtered Array: ", newArray);
    }
    removeDuplicates();
} )();

// Rotate an array by k times
(function () {
    var rotate = function () {
        var k = 2;
        var newArray = [];
        for (var i = 0; i < rotateArray.length; i++) {
            newArray.push(rotateArray[(i + k) % rotateArray.length]);
        }
        console.log("Original Array: ", rotateArray);
        console.log("Rotated Array", newArray);
    }
    rotate();
} )();