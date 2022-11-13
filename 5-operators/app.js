// Assignment Operator

// let x = 10;
// let y;
// y = x;
// console.log(y);

// compound operator

// let a = 10;
// let b = 20;
// a = a + b;   // x += y; // x -= y; // x *= y; // x /= y;
// console.log(a);

// Arithmetic operator

// + (add)
// - (sub)
// * (mul)
// / (div)

// let x = 10;
// x++;
// x--;
// console.log(x);

// let x = 10;
// let square = x ** 2;
// console.log("Square of 10 : ",square);

// logical operator

// 1. Logical AND &&
// let a = true && true;
// let b = false && true;
// let c = true && false;
// let d = false && false;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// Example - 1
// let isLoggedIn = true;
// let hasPermissions = true;

// if(isLoggedIn && hasPermissions){
//     console.log("Item deleted successfully");
// }else{
//     console.log("Item Not deleted");
// }

// 1. Logical OR ||
// let a = true || true;
// let b = false || true;
// let c = true || false;
// let d = false || false;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// Example - 2
// let isLoggedIn = true;
// let hasPermissions = false;

// if(isLoggedIn || hasPermissions){
//     console.log("Item deleted successfully");
// }else{
//     console.log("Item Not deleted");
// }

// 1. Logical NOT !

// let happy = false;
// const animal = "Cat";
// console.log(!happy);
// console.log(!animal);

// Example - 3
// let isLoggedIn = false;
// if(!isLoggedIn){
//     console.log("Redirect to login page");
// }

// Conditional Operator (Ternary Operator)

// const userRole = 'admin';
// if(userRole === 'admin'){
//     console.log("You are an admin");
// }else{
//     console.log("You are not an admin");
// }

// Ternary Operator

// const userRole = 'admin';
// userRole === 'admin' ? console.log("You are an admin") : console.log("You are not an admin");

// Comparison operator

console.log(4 == 5);
console.log(4 != 5);
console.log(4 === "4"); // data convert use to ( coercion )
console.log(4 === 4);
console.log(4 < 6);
console.log(5 > 4);
console.log(5 <= 4);
console.log(4 >= 4);

// precedence

// grouping - precedence 21
console.log(3 + 10 * 2);
console.log((3 + 10) * 2);   // grouping precedence (--)

// let to right precedence 

console.log(3 > 2 && 2 > 1); 
// steps
    // console.log(true && 2 > 1);
    // console.log(true && true);
    // return true 

console.log(3>2>1);
// step
    // first - (true > 1)
    //          (1 > 1)
    // second - return - false
