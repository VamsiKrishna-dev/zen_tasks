//Function to add five to a given number
var num = 10;
function addFive(num) {
  return num + 5;
}
var result = addFive(num);
console.log("Given Number: ",num + " \n Added 5 : ",result);

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
