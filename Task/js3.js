
// Level 1 – Functions Basics

// Task 1: Student Form Function

// Create a function studentForm(name, age, course) and print:

// Name: Naveen
// Age: 22
// Course: MERN



console.log('Task-1----------');
function details(name, age, course){
    console.log('Name: ',name);
    console.log('Age: ',age);
    console.log('Course: ',course);
}

details('Siddique',22,'JavaScript')






console.log('Task-2----------');
// Task 2: Calculator Function

// Create function calc(a,b):

// print addition
// print subtraction
// print multiplication


function calc(a,b){
    console.log('addition:',a+b);
    console.log('subtraction:',a-b);
    console.log('multiplication:',a*b);
    
}

calc(20,10)






console.log('Task-3----------');
// Task 3: Reusable Greeting

// Call same function for 3 users:

// Hello Kamal
// Hello Praveen
// Hello Sai


function greet(a){
    console.log('Hello',a);
}

greet('kamal');
greet('Jamal');
greet('mrunal');






// 🟡 Level 2 – Return & Scope
console.log('Task-4----------');
// Task 4: Return Value

// Create function square(num)
// Return square value.

// Example:

// square(5) // 25


function square(num){
    return num*num;
}

console.log('Square of Number is ',square(6));






console.log('Task-5----------');
// Task 5: Scope Check

// Inside function:

// let secret = "javascript"
// Try printing outside function.
// Observe what happens.


function test() {
    let secret = "javascript";
    console.log(secret); // works here
}

test();

// console.log(secret);




// Explain why.
console.log('ReferenceError: secret is not defined');
console.log('Variables declared inside a function are LOCAL (function scope) \n They cannot be accessed outside the function');






// 🟠 Level 3 – Spread / Rest
console.log('Task-6----------');
// Task 6: Merge Arrays

// let boys = ["car","bike"]
// let girls = ["doll","teddy"]
// Use spread operator and make:

// ["car","bike","doll","teddy"]


let boys = ["car","bike"]
let girls = ["doll","teddy"]

let result = [...boys,...girls];
console.log(result);




console.log('Task-7----------');
// Task 7: Unlimited Numbers

// Create function:

// sumAll(...nums)
// Pass:

// sumAll(10,20,30,40)
// Output:
// 100





function sums(...nus){
    let tot = 0;
    for (let ns of nus){
        tot += ns;
    }

    return tot;
}

console.log('sum of numbers are: ',sums(10,20,30,40,50))


// 🔵 Level 4 – Destructuring
console.log('Task-8----------');
// Task 8: Array Destructuring

// let colors = ["red","green","blue"]
// Store into:

// c1 c2 c3
// Print all.


let colors = ['red','green','blue']
let [c1,c2,c3] = colors;

console.log(c1);
console.log(c2);
console.log(c3);







console.log('Task-9----------');
// Task 9: Object Destructuring

// let emp = {
//  name:"Naveen",
//  role:"Developer",
//  salary:"5LPA"
// }
// Destructure and print:

// Naveen Developer




let emp = {
  name: "Siddique",
  role: "Developer",
  salary: "5LPA"
};

let { name, role } = emp;

console.log(name, role); 




// 🔴 Level 5 – Real-Time Logic
console.log('Task-10----------');
// Task 10: Offer Generator

// Use generator function.

// Each next() should give:

// 10% cashback
// 20% cashback
// 50% cashback
// Try again
// After completed:

// No more offers



function* offerGenerator() {
    yield "10% cashback";
    yield "20% cashback";
    yield "50% cashback";
    yield "Try again";
    return "No more offers";
}

let offers = offerGenerator();

console.log(offers.next().value); // 10%
console.log(offers.next().value); // 20%
console.log(offers.next().value); // 50%
console.log(offers.next().value); // Try again
console.log(offers.next().value); // No more offers
console.log(offers.next().value); // undef




// 🟣 Level 6 – Advanced
console.log('Task-11----------');
// Task 11: Curry Function

// Make:

// add(10)(20)(30)
// Output:

// 60

function add(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

console.log(add(10)(20)(30)); // 60


console.log('Task-12----------');
// Task 12: Student Marks Analyzer

// Create function:

// marks(...nums)
// Input:

// marks(80,90,70,60)
// Output:

// Total = 300
// Average = 75


function mar(...nums) {
    let total = 0;

    for (let n of nums) {
        total += n;
    }

    let avg = total / nums.length;

    console.log("Total =", total);
    console.log("Average =", avg);
}

mar(80, 90, 70, 60);
// 🏆 Challenge Task (Real Company Level)
console.log('-----Challenge Task-----');
// Create employee registration system:

// register(name, role, ...skills)
// Example:

// register("Naveen","Frontend","HTML","CSS","JS","React")
// Output:

// Name: Naveen
// Role: Frontend
// Skills: HTML CSS JS React


function register(name, role, ...skills) {

    if (!name || !role) {
        console.log("Invalid input");
        return;
    }

    const employee = {
        name,
        role,
        skills
    };


    console.log("Name:", employee.name);
    console.log("Role:", employee.role);
    console.log("Skills:", employee.skills.join(" "));
}

register("Siddique","FullStack DevP","HTML","CSS","JS","React");
 