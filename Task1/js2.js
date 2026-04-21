let students = [
 {id:1, name:"Naveen", mark:85, course:"MERN"},
 {id:2, name:"John", mark:45, course:"Python"},
 {id:3, name:"Priya", mark:72, course:"Java"},
 {id:4, name:"Arun", mark:95, course:"React"}
]



console.log('Task-1----------');
// Task 1: Print All Students
// Use loop and print:
// 1 Naveen 85 MERN
// 2 John 45 Python

console.log(students);

for( let a = 0; a < students.length; a++){
    // console.log(a);
    console.log(students[a].id,
                students[a].name,
                students[a].mark,
               students[a].course
    );
    
}

// for (let a in students){
//     console.log(students[a].id,
//                 students[a].name,
//                 students[a].mark,
//                 students[a].course
//     );
    
// }



console.log('Task2-----------');

// Task 2: Pass / Fail
// Condition:
// mark >= 50 → Pass
// Below 50 → Fail
// Output:
// Naveen - Pass
// John - Fail




for (let b = 0; b<students.length; b++){
    if (students[b].mark >= 50){
        console.log(students[b].name +'-'+ 'Pass');
    
    }else{
        console.log(students[b].name +'-'+ 'Fail');
    
    }

}



console.log('Task3-----------');
// Task 3: Grade System
// 90+ = A Grade
// 75+ = B Grade
// 50+ = C Grade
// Below 50 = Fail


for (let c in students){
    if (students[c].mark >= 90 ){
        console.log(students[c].name + '- got A Grade');
        
    }else if (students[c].mark >= 75 ){
        console.log(students[c].name + '- got B Grade');
    }else if (students[c].mark >= 50 ){
        console.log(students[c].name + '- got C Grade');
    }else{
        console.log(students[c].name + '- got Fail');
    }
}


console.log('Task4-----------');
// Task 4: Topper Student
// Find highest mark student.
// Output:
// Topper is Arun - 95

let h=0;
let h1 = 0;
for (let d in students){
    if (students[d].mark > h){
        h = students[d].mark;
        h1 = d   
    }
}
console.log('Topper is '+students[h1].name +' - '+ h);



console.log('Task5-----------');
// Task 5: Course Search
// If course = React print student details.


for (let d in students){
    if (students[d].course == 'React'){
        console.log('React Student Details - '+
                students[d].name,
                students[d].mark,
                students[d].course
    );
}

}


console.log('Task-6----------');

// Add new student
// Task 6: Add New Student
// Add:
// {id:5,name:"Rahul",mark:88,course:"Node JS"}
// Then print all data.




students.push({
    id: 5,
    name: "Rahul",
    mark: 88,
    course: "Node JS"
});

// Print all students
for (let i = 0; i < students.length; i++) {
    console.log(
        students[i].id,
        students[i].name,
        students[i].mark,
        students[i].course
    );
}

console.log('Task-7----------');
// Task 7: Attendance System
// Use switch:
// status = "present"
// Output:
// present → Welcome
// absent → Mark Absent
// leave → Approved Leave

let status = prompt('are you present/abssent/leave ?');

switch (status){
    case 'present': console.log('Welcome');break;
    case 'absent': console.log('Mark Absent');break;
    case 'leave': console.log('Approved Leave');break;
    default: console.log('Invalid input');
    
}

console.log('Task-8----------');
// Task 8: Login System
// username = "admin"
// password = "1234"
// If correct:
// Login Success
// Else:
// Invalid User

let username = prompt('Enter Demo User Name ? (admin)');
let password = prompt('Enter Demo password Name ? (1234)');

if (username == 'admin'){
    if (password == 1234){
        console.log("Login Success");
        
    }else{
        console.log("Invalid User");
        
    }
}