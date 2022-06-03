//Function to add five to a given number
var num = 10;
function addFive(num) {
  return num + 5;
}
var result = addFive(num);
console.log("Given Number: ", num + " \n Added 5 : ", result);

//Write a function called “getOpposite”.
//Given a number, return its opposite
var num = 5;
function getOpposite(num) {
  if (isNaN(num) || num % 1 !== 0) return -1;
  else return num * -1;
}

var result = getOpposite(5.5);
console.log(result);

// Fill in your code that takes an number minutes and converts it to seconds.
var min = 5;
function toSeconds(min) {
  return min * 60;
}
var secs = toSeconds(min);
console.log(secs);

// Create a function that takes a string and returns it as an integer.
var str = "5";
function toInt(str) {
  return parseInt(str);
}
var myInt = toInt(str);

// Create a function that takes a number as an argument, increments the number by +1 and returns the result.
var myint = 0;
function nextNumber(myint) {
  return myint + 1;
}
var myNextint = nextNumber(myint);
console.log(myNextint);

// Create a function that takes an array and returns the first element.
var arr = [1, 2, 3];
function firstElement(arr) {
  return arr[0];
}
var first = firstElement(arr);
console.log(first);

// Write a function that converts hours into seconds.
var hours = 5;
function hoursToSeconds(hours) {
  return hours * 3600;
}
var data = hoursToSeconds(hours);
console.log(data);

// Create a function that takes height and width and finds the perimeter of a rectangle.
var height = 5;
var width = 10;
function findPerimeter(height, width) {
  return (height + width) * 2;
}
var result = findPerimeter(height, width);
console.log(result);

// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
var num1 = 82;
var num2 = 18;
function lessThan100(num1, num2) {
  if (num1 + num2 < 100) {
    return true;
  } else {
    return false;
  }
}
var result = lessThan100(num1, num2);
console.log(result);

/*There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.*/

var num1 = 10;
var num2 = 3;
function remainder(num1, num2) {
  return num1 % num2;
}
var result = remainder(num1, num2);
console.log(result);

// MacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

//turkey = 2 legs
//horse = 4 legs
//pigs = 4 legs

//The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

var turkey = 2;
var horse = 4;
var pigs = 4;

function CountAnimals(turkey, horse, pigs) {
  return turkey * 2 + horse * 4 + pigs * 4;
}
var legs = CountAnimals(2, 3, 5);

// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

function frames(fps, min) {
  return fps * min;
}
var fps = frames(30, 2);
console.log(fps);

// Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
function divisibleByFive(num1) {
  if (num1 % 5 === 0) {
    return true;
  } else {
    return false;
  }
}
var divisible = divisibleByFive(5);
console.log(divisible);

// Given a number, “isEven” returns whether it is even.
var num = 5;
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
var even = isEven(5);
console.log(even);

// Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.
var num1 = 5;
var num2 = 7;
function areBothOdd(num1, num2) {
  if (num1 % 2 === 1 && num2 % 2 === 1) {
    return true;
  } else {
    return false;
  }
}
var odd = areBothOdd(num1, num2);
console.log(odd);

// Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.
var firstName = "John";
var lastName = "Doe";
function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}
var fullName = getFullName(firstName, lastName);
console.log(fullName);

//Given a word, “getLengthOfWord” returns the length of the given word.
var word = "Hello";
function getLengthOfWord(word) {
  return word.length;
}
var length = getLengthOfWord(word);
console.log(length);

// Given two words, “isSameLength” returns whether the given words have the same length.
var word1 = "Hello";
var word2 = "World";
function isSameLength(word1, word2) {
  if (word1.length === word2.length) {
    return true;
  } else {
    return false;
  }
}
var same = isSameLength(word1, word2);
console.log(same);

//Create a function to calculate the distance between two points defined by their x, y coordinates
var x1 = 100;
var y1 = 100;
var x2 = 400;
var y2 = 300;
function getDistance(x1, y1, x2, y2) {
  var x = x2 - x1;
  var y = y2 - y1;
  var distance = (x ** 2 + y ** 2) ** 1 / 2;
  return distance;
}
console.log(getDistance(x1, y1, x2, y2));

// Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array. If the array has a length of 0, it should return ‘undefined’.
var arr = [1, 2, 3, 4, 5];
function getNthElement(arr, n) {
  if (arr.length === 0) {
    return undefined;
  } else {
    var res = arr[n];
    if (res === undefined) {
      return "Element does not exist";
    }
    return res;
  }
}
var element = getNthElement(arr, 12);
console.log(element);

//Given an array, “getLastElement” returns the last element of the given array. If the given array has a length of 0, it should return ‘-1’.

var arr = [1, 2, 3, 4, 5];
function getLastElement(arr) {
  if (arr.length === 0) {
    return -1;
  } else {
    var res = arr[arr.length - 1];
    return res;
  }
}
var element = getLastElement(arr);
console.log(element);

// Given an object and a key, “getProperty” returns the value of the property at the given key. If there is no property at the given key, it should return undefined.
var obj = {
  mykey: "value",
};
function getProperty(obj, key) {
  if (obj[key] === undefined) {
    return undefined;
  } else {
    return obj[key];
  }
}
var property = getProperty(obj, "mykey");
console.log(property);

// Given an object and a key, “addProperty” adds a new property on the given object with a value of true.
var obj = {};
function addProperty(obj, key) {
  obj[key] = true;
}
addProperty(obj, "mykey");
console.log(obj);

//Given an object and a key, “removeProperty” removes the given key from the given object.
var obj = {
  mykey: "value",
};
function removeProperty(obj, key) {
  if (obj[key] === undefined) {
    return undefined;
  } else {
    delete obj[key];
  }
}
var result = removeProperty(obj, "myakey");
console.log(result);

//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = function countPositivesSumNegatives(arr) {
  var count = 0;
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      count++;
    } else {
      sum += arr[i];
    }
  }
  return [count, sum];
};
console.log(ar2(arr));

//Create a function that receives an array of numbers and returns an array containing only the positive numbers

function getPositives(ar) {
  var newAr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      newAr.push(arr[i]);
    }
  }
  return newAr;
}
var ar3 = getPositives(arr);
console.log(ar3);

// Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).
function powersOfTwo(n) {
  var res = [];
  for (var i = 0; i <= n; i++) {
    res.push(2 ** i);
  }

  return res;
}
console.log(powersOfTwo(2));

//Find the maximum number in an array of numbers
function findMax(arr) {
  var max = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
var max = findMax(arr);
console.log("Max: ", max);

//Print the first 100 prime numbers
function printPrimes(nPrimes) {
  var n = 0;
  var i = 2;

  while (n < nPrimes) {
    if (isPrime(i)) {
      console.log(n, " → ", i);
      n++;
    }

    i++;
  }
}
// Returns true if a number is prime
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}
printPrimes(100);

// Create a function that will return in an array the first “nPrimes” prime numbers greater than a particular number “startAt”
function getPrimes(nPrimes, startAt) {
  var primes = [];
  var i = startAt;
  while (primes.length < nPrimes) {
    if (isPrime(i)) {
      primes.push(i);
    }
    i++;
  }
  return primes;
}
var primes = getPrimes(10, 10);
console.log(primes);

//Reverse a string
function reverseString(str) {
  var res = "";
  for (var i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  return res;
}
var str = "hello";
var reversed = reverseString(str);
console.log(reversed);

//Create a function that will merge two arrays and return the result as a new array
function mergeArrays(arr1, arr2) {
  var res = [];
  for (var i = 0; i < arr1.length; i++) {
    res.push(arr1[i]);
  }
  for (var i = 0; i < arr2.length; i++) {
    res.push(arr2[i]);
  }
  return res;
}
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var merged = mergeArrays(arr1, arr2);
console.log(merged);

//Calculate the sum of numbers received in a comma delimited string
function sumCSV(str) {
  var arr = str.split(",");
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += parseInt(arr[i]);
  }
  return sum;
}
var sum = sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9");
console.log("Sums of CSVs",sum);