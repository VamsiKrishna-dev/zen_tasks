var obj1 = { name: "Person 1", age:5 };  
var obj2 = { age:5, name: "Person 1" }; 

console.log(obj1 == obj2); // false

console.log(obj1.age == obj2.age); // true
console.log(obj1.name == obj2.name); // true

console.log(obj1["name"] == obj2["name"]); // true
console.log(obj1.name == obj2["name"]); // true

console.log(obj1["age"] == obj2["age"]); // true
console.log(obj1.age == obj2["age"]); // true

console.log(obj1[0] == obj2[0]); // false
console.log(obj1[1] == obj2[0]); // true
console.log(obj1[0] == obj2[1]); // true
console.log(obj1[1] == obj2[1]); // false