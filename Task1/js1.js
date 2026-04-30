// 🔹 Task 1: Variable Update
// Create a variable using var with value 50.
// Change it to 100 and print final value in console.

console.log('Task:1')
console.log('-----------------')
var a = 50;
var a = 100;
console.log(a);




// 🔹 Task 2: Let Variable Math
// Create let marks = 80
// Add 10 marks and print result.

console.log('Task:2')
console.log('-----------------')
let marks = 80;
result = marks + 10;
console.log(result);




// 🔹 Task 3: Const Value
// Create const price = 500
// Create another variable finalPrice = price + 100
// Print finalPrice

console.log('Task:3')
console.log('-----------------')
const price = 500;
const fp = price + 100;
console.log(fp);





// 🔹 Task 4: Printing Statements
// Print the following in console:
// "Welcome Team"
// 2026
// true

console.log('Task:4')
console.log('-----------------')
let i = "Welcome Team";
let j = 2026;
let k = true;

console.log(i);
// console.log(typeof(i));

console.log(j);
// console.log(typeof(j));

console.log(k);
// console.log(typeof(k));



// 🔹 Task 5: Datatype Check
// Check datatype of:
// "JavaScript"
// 250
// false
// Use typeof

console.log('Task:5')
console.log('-----------------')
let s = "JavaScript";
console.log('Datatype Check - JavaScript is ',typeof(s));

let n = 250;
console.log('Datatype Check - 250 is', typeof(n));

let b = false;
console.log('Datatype Check - false is',typeof(b));



// 🔹 Task 6: Array Task
// Create array with 5 fruits.
// Print:
// Full array
// First fruit
// Last fruit

console.log('Task:6')
console.log('-----------------')
const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits);
console.log('Lenght of fruits is ',fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);







// 🔹 Task 7: Object Task
// Create object:
// student = {
//  name: "Naveen",
//  age: 20,
//  course: "MERN"
// }
// Print:
// name
// age



console.log('Task:7')
console.log('-----------------')
student = {
 name: "Naveen",
 age: 20,
 course: "MERN"
}

console.log(student);
console.log(student.name);
console.log(student.age);







// 🔹 Task 8: Arithmetic Operators
// Print result:
// 20 + 10
// 50 - 25
// 5 * 5
// 100 / 4
// 20 % 3


console.log('Task:8')
console.log('-----------------')
console.log(20 + 10);
console.log(50 - 25);
console.log(5 * 5);
console.log(100 / 4);
console.log(20 % 3);






// 🔹 Task 9: Increment / Decrement
// let x = 5;
// x++;
// console.log(x);
// Then:
// let y = 10;
// y--;
// console.log(y);

console.log('Task:9')
console.log('-----------------')
let x = 5;
x++;
console.log('increment',x);

let y = 10;
y--;
console.log('decrement',y);



// 🔹 Task 10: Comparison Operators
// Print answers:
// 10 > 5
// 5 < 2
// 20 == "20"
// 15 === "15"
// 10 != 8

console.log('Task:10')
console.log('-----------------')
console.log(10 > 5);
console.log(5 < 2);
console.log(20 == "20");
console.log(15 === "15");
console.log(10 != 8);




// 🔹 Task 11: Logical Operators
// Print result:
// 5 > 2 && 10 > 3
// 7 < 5 || 8 > 2
// !(10 > 5)

console.log('Task:11')
console.log('-----------------')
console.log(5 > 2 && 10 > 3);
console.log(7 < 5 || 8 > 2);
console.log(!(10 > 5));





// 🔹 Task 12: Ternary Operator
// Check age:
// let age = 18;
// If age >= 18 print "Eligible" else "Not Eligible"

console.log('Task:12')
console.log('-----------------')
let age = 18;
console.log(age >= 18 ? "Eligible" : "Not Eligible");

