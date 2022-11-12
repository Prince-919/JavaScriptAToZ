// Variable 
// Let, Var, Const

// console.log("====== Let ======");
// let language;
// language = 'JavaScript';
// console.log(language);

// console.log("======= Const ========");
// const secondInMinute = 60;
// secondInMinute = 300; //error -- TypeError: Assignment to constant variable.
// console.log(secondInMinute);

// function scope
// var language = "JavaScript";

// block scope
// if(true){
//     let age = 20;
//     console.log(age);
// }

// console.log(age); // Error - ReferenceError: age is not defined

// Hoisting
// Var 
// console.log(greeting);    // undefined
// var greeting = "Hello";

// Let ans Const
// console.log(greeting);   //ReferenceError: Cannot access 'greeting' before initialization 
// let greeting = "Hello";


// Var, let , const ???????

// const num = 20;
// num = 500; //TypeError: Assignment to constant variable.

let num = 20;
num = 500;
console.log(num);