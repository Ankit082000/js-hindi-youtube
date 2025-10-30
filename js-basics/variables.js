const accountId = 12345;                               // integer ke liye const ka use karenge
let accountEmail = "ankitrathore867@gmail.com";       // String keyword ke liye hum let ka use karenge 
var accountPassword = "12345";                       // var ka nahi kyuki var ka scope pure code pe hota hai
accountCity = "Noida";

accountEmail="ankit082000@gmail.com";
accountPassword="082000";
accountCity="Gurugram";

// console.table([accountId,accountEmail,accountPassword,accountCity]);

// console.log(3+3+"2");

let idx=4;
idx++;
// console.log(idx);

// console.log("5">4);             //isne apne aap hi ek string ko number mai convert kar diya hai
// console.log(5>"4");            // jabki aisa nhi hona chahiye tha

// console.log("2"===2);            // isme ye data type bhi check karega 
// console.log("2"==2);            // isme sirf value check hogi aur isne string ko number mai convert kar diya ha

// primitivie type mai (Stack memory use hoti hai)
//Non primitive type mai (Heap memory use hoti hai)

const age =24;
let namee = "Ankit Rathore";
let anotherName = "    Ankit     ";

// console.log(`Hello my name is ${namee} and my age is ${age}`);  // yaha pe string ko concatinate kiya hai 
                                                              // without Plus (+) ise backticks bolte hai 

// console.log(namee.charAt(2));   //kon se index pe kon sa variable hai 

// console.log(namee.indexOf('t'));  // ye variable kon se index pe hai
console.log(anotherName);
console.log(anotherName.trim());            // trim mein jitne bhi extra spaces hote hai yeh unhe hata deta hai only words


