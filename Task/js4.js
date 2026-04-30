// LEVEL 1 (Basic Practice)
// Task 1: Array Basics
// let arr = [10, 20, 30, 40, 50];
// Print:
// First element
// Last element
// Total length



console.log('-------* Day4 *--------');

console.log('Task-1 ------------');
let arr =  [10, 20, 30, 40, 50];

console.log(arr[0]);
console.log(arr[arr.length-1]);
console.log(arr.length);




// Task 2: Push & Pop
// let arr = [1,2,3];
// Add 4,5 at end
// Remove last element
// Final output should be: [1,2,3,4]
console.log('Task-2 ------------');

let a1 = [1,2,3];
console.log('Before adding: ',a1);

a1.push(4,5);
console.log('After Adding: ',a1);

console.log('last element is: ',a1.pop());
console.log('Removed last element: ',a1);





// Task 3: Includes Check
// Check if "javascript" exists in:
// let arr = ["html","css","javascript","react"];
// LEVEL 2 (Intermediate)
console.log('Task-3 ------------');
let ar = ["html","css","javascript","react"];
console.log(ar);

console.log(ar.includes('javascript'));






// Task 4: Filter Salaries
// let emp = [
//   {name:"A", salary:10000},
//   {name:"B", salary:50000},
//   {name:"C", salary:30000}
// ];
// Get employees with salary greater than 20000


console.log('Task-4 ------------');
let empp = [
  {name:"A", salary:10000},
  {name:"B", salary:50000},
  {name:"C", salary:30000}
];

console.log('employees with salary greater than 20000: ');
empp.forEach((c,i,t)=>{
    
    if(c.salary > 20000){
        console.log(c.name);
    }
    
});


let checkSalary = empp.filter((c,i,t)=>{
    return c.salary > 20000;
});

console.log(checkSalary);


// Task 5: Map Names
// From above array, return only:
// ["A","B","C"]

console.log('Task-5 ------------');

let name1 = empp.map(e => e.name);
console.log('Names of Employees:',name1);


let names = checkSalary.map(e => e.name);
console.log('Names of Employees > 20000: ',names);


// Task 6: Reduce Sum
// Find total salary using reduce()

console.log('Task-6 ------------');

let totalSalary = empp.reduce((sum, e) => sum + e.salary, 0);

console.log(totalSalary);

// LEVEL 3 (Logic Building)
// Task 7: Remove Duplicates
// let arr = [1,2,2,3,4,4,5];
// Output: [1,2,3,4,5]

console.log('Task-7 ------------');
let a2 = [1,2,2,3,4,4,5];

let unique = a2.filter((v, i) => a2.indexOf(v) === i);
console.log(unique);


// Task 8: Find Largest Number
// let arr = [10, 200, 5, 90];
// Output: 200

console.log('Task-8 ------------');
let a3 = [10, 200, 5, 90];
let r1 = 0;
for(r of a3){
    // console.log(r);
    if (r > r1){
        r1 = r;
    };
    
};

console.log(r1);

// type 2

let max = a3.reduce((a, b) => a > b ? a : b);
console.log(max);

// Task 9: Reverse String WITHOUT reverse()
// let str = "hello";
// Output: "olleh"

console.log('Task-9 ------------');
let str = 'hello';
const reverseString = (str) => [...str].reverse().join('');
console.log(reverseString(str));


// LEVEL 4 (Advanced Thinking)
// Task 10: Group by Salary
// let emp = [
//   {name:"A", salary:10000},
//   {name:"B", salary:50000},
//   {name:"C", salary:10000}
// ];
// Output:
// {
//   10000: ["A","C"],
//   50000: ["B"]
// }
// Task 10: Group by Salary

console.log('Task-10 ------------');
let empp1 = [
  {name:"A", salary:10000},
  {name:"B", salary:50000},
  {name:"C", salary:10000}
];

let grouped = empp1.reduce((acc, e) => {
  if (!acc[e.salary]) {
    acc[e.salary] = [];
  }
  acc[e.salary].push(e.name);
  return acc;
}, {});
console.log(grouped);

// Task 11: Flatten Array (without flat)
// let arr = [1,[2,[3,[4]]]];
// Output: [1,2,3,4]

console.log('Task-11 ------------');
let a4 = [1,[2,[3,[4]]]];

function fn(a4) {
  let result = [];

  for (let item of a4) {
    if (Array.isArray(item)) {
      result = result.concat(fn(item)); // recursive call
    } else {
      result.push(item);
    }
  }

  return result;
}
console.log(fn(a4));
// Task 12: Custom Sort (Descending)
// let arr = [5,2,9,1];
// Output: [9,5,2,1]
// BONUS (Interview Level )


console.log('Task-12 ------------');
const numbers = [5,2,9,1];
console.log(numbers);

numbers.sort((a, b) => b - a);
console.log(numbers);


// Task 13: Find Second Largest
// let arr = [10, 50, 20, 40];
// Output: 40

console.log('Task-13 ------------');
let a5 = [10, 50, 20, 40];

a5.sort((a, b) => b - a);
console.log(a5);
console.log('second largest number: ',a5[1]);



// Task 14: Count Characters
// let str = "aabbccdde";
// Output:
// {a:2, b:2, c:2, d:2, e:1}


console.log('Task-14 ------------');
let str2 = "aabbccdde";
let count = {};

for (let char of str2) {
  count[char] = (count[char] || 0) + 1;
}

console.log(count); 

