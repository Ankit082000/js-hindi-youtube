// console.log("hello World");
// for (let i = 0; i <5; i++) {
//     console.log(`hello ${i}`);
    
    
// }

// let args = process.argv;
// for (let i = 2; i < args.length; i++) {
//     console.log(`hello ${args[i]}`);  
// }
// // console.log(process.argv);
// const math = require('./math');
// console.log(math.sum(5,6));
// console.log(math.multiplication(5,6));
// console.log(math.division(30,6));
// console.log(math.subtraction(30,6));
// console.log(math.gravity);
// console.log(math.PI);
// console.log(math);




// function SaveToDB(data, success, failure) {
 
//     let InternetSpeed = Math.floor(Math.random() *10) +1;
//     if (InternetSpeed > 5) {
//         success();
//     } else {
//         failure();
//     }
// }

// SaveToDB(
//     "Learning Callbacks hell and promises",
//     () => {
//         console.log("Success : Data was saved");

//         SaveToDB(
//             "Hello World",
//             () =>{
//             console.log("Success : Data was saved again");

//             SaveToDB(
//                 "Another Data",
//                 () =>{
//                 console.log("Success : Data was saved third time");
//                 },
//                 () =>{
//                     console.log("Failure : Data was not saved third time");
//                 }
//             )

//         },
//         () =>{
//             console.log("Failure : Data was not saved again");
//         }
//     );
//     },
//     () => {
//         console.log("Failure : Data was not saved");
//     }
// )


// function SaveToDB (data){
//     return new Promise((resolve, reject) => {
//         console.log("Promise started");
        
//         let InternetSpeed = Math.floor(Math.random() *10) +1;
//         if (InternetSpeed > 5) {
//             resolve("Success : Data was saved");
//         } else {
//             reject("Failure : Data was not saved");
//         }
//     });
// }
// SaveToDB("Ankit data")
//     .then((result) => {
//         console.log(result);
//     })

    
//     .catch((error) => {
//         console.log(error);
//     });



// Promise.all([
//     SaveToDB("Data 1"),
//     SaveToDB("Data 2"),
//     SaveToDB("Data 3")
// ])
// .then((messages) => {
//     console.log("All promises resolved");
//     console.log(messages);
// })
// .catch((message) => {
//     console.log("At least one promise rejected");
//     console.log(message);
// });

h1=document.querySelector("h1");

 function changeColor(color, delay){ 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           h1.style.color = color;
            resolve("color changed to " + color);
        }, delay);

    });
}
changeColor("red", 1000)
.then(()=>{
    console.log("red color was changed");
    return changeColor("orange", 1000);
    
})
.then(()=>{
    console.log("Orange color was changed");
    return changeColor("Green", 1000);
    
})
.then(()=>{
    console.log("Green color was changed");
    return changeColor("Pink", 1000);
    
})
.then(()=>{
    console.log("Pink color was changed");
    return changeColor("Blue", 1000);
    
})
.then(()=>{
    console.log("Blue color was changed");
    
    
});