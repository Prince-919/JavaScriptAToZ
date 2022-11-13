

// Arrays

// index start for 0 To n-1
// starting index - 0, 1,2,3 ,4,5

// const language = ['Javascript', 'C++', 'Python'];  
// console.log(language);  // All Arrays List Print 

// get Length
// console.log("Length Of Arrays : ",language.length);
// console.log(language[0]);
// console.log(language[1]);
// console.log(language[2]);

// Add  Data and adding end arrays
// language.push('Dart');
// console.log(language);

// Adding starting arrays
// language.unshift('Java');
// console.log(language);

// Delete last item
// language.pop();
// console.log(language);

// Delete first item
// language.shift();
// console.log(language);


// Loop
// for Loop

// Overview loop
// for(let i=0; i<5; i++){
//     console.log('*');
// }


// const actors = [
//     {
//         name : 'actor 1',
//         payment : 100,
//     },
//     {
//         name : 'actor 2',
//         payment : 200,
//     },
//     {
//         name : 'actor 3',
//         payment : 300,
//     }
// ];

// console.log(actors);

// for(let i=0; i<actors.length; i++){
//     // console.log(actors[i]);
//     // console.log(i);
//     // payment = 10
//     actors[i].payment = actors[i].payment - 10;
//     console.log(actors[i]);
// }
// console.log(actors);


// forEach Loop
// using fatArrow Function   () = {} 

// actors.forEach((actor) => {
//     // console.log(actor);
//     actor.payment -= 10;
//     // console.log(actor);
// });
// console.log(actors);

// for Of loop

// for(let actor of actors){
//     actor.payment = actor.payment - 10;
// }
// console.log(actors);


// Arrays Filter

// const students = [
//     {
//         name : 'student 1',
//         marks : 45,
//     },
//     {
//         name : 'student 2',
//         marks : 60,
//     },
//     {
//         name : 'student 3',
//         marks : 28,
//     },
//     {
//         name : 'student 4',
//         marks : 20,
//     },
// ]

// Simple Method 1
// const Paper = students.filter((student) => student.marks < 45);
// console.log(Paper);

// Complex Method 2

// const Exam = students.filter((student) => {
//     if(student.marks < 30){
//         return true;
//     }
//     return false;
//     // console.log(student);

// });
// console.log(Exam);




// Map Function 

const users = [
    {
        fname : "Prince",
        lname : "Sharma",
    },
    {
        fname : "Rahul Kumar",
        lname : "Sharma",
    },
];

const finalUser = users.map((user) => {
    return{
        fullName : `${user.fname} ${user.lname}`
    };
});
console.log(finalUser);
