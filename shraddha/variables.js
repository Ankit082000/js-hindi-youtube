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
// console.log(anotherName);
// console.log(anotherName.trim());            // trim mein jitne bhi extra spaces hote hai yeh unhe hata deta hai only words

// let url = "https://ankitrathore082000@gmail.com"
// console.log(url.replace('#','@'));           // # ko replace kiya hai @ se
// console.log(url.includes('ankit'));         // url mai ankit hai ya nhi

// console.log(url.split('@'));               // split jaha se @ aa raha hai waha se split kardo




//          *************************    Numbers & maths      ********************************

const x = 43.784;
// console.log(x.toPrecision(3));
// console.log(Math.round(x));

// console.log(Math.round(Math.random()*10)+1);       //random just random value show karta hai 0.0 aur 0.1 ke
                                                  // beech mai humne isme 10 se isliye multiply kiya hai kyuki 
                                                 // taaki hame 0 se 1 tak value mil sake
                                                 // aur humne isme round kiya taaki jitne bhi point ke baad wale
                                                 // number hai wo hat jaye


// let date = new Date();
// console.log(date.toLocaleString());



// **************************************** Arrays *****************************************

const marvel_hero = ["Thor", "IronMan", "CaptainAmerica", "Hulk "];
const dc_hero     = ["SpiderMan", "BatMan", "Flash", "BlueBeetle"];

// marvel_hero.push(dc_hero);
// const all_heros = marvel_hero.concat(dc_hero);      concatination kiya hai inn dono ka
// console.log(all_heros);

// const all_heros = [...marvel_hero, ...dc_hero];
// console.log(all_heros);                                 // ye spread operator hai ...spread kitne bhi 
//                                                        // variables ho un sbko ek hi array mai kar deta hai


const Arrays = [6,8,7,0,3,9,[12,14,15,[22,25,28]]];   // jab array ke ander array ke ander array aa jaye tab
//  const real_array = Arrays.flat(Infinity);          // .flat(infinity)ka use karte hai
//console.log(Arrays.flat(Infinity));



//***********************          Objects           ***************************/

// jbb constructor se banate hai to SINGLETON  banta hai



const mySym = Symbol("Key1")               // ye symbol hai ek unique data type jise square braces se acces karte hai

const JSUser = {
    name : "Ankit " ,                    // name isse as string consider karta hai
    age : 18,
    [mySym] : "MyKey1",
    location : "Noida",
    email : "ankitrathore@gmail.com",
    isLogged : false,
    lastLoginDays :["Monday", "Saturday"]
}

console.log(JSUser.email);
console.log(JSUser["email"]);        // agr "e-mail" ko string mai likhte hai to usse .se access nahi kar
                                    // skte  square brackets ka use karte hai 
console.log(JSUser[mySym]);

JSUser.email= "ankitrathore082000@gmail.com";   // agar object mai change karna hai to equal to ka use karenge

Object.freeze(JSUser)                        // agar chahe ki koi bhi change na kar sake to freeze ka use karenge
 JSUser.email = "ankitrathore867@gmail.com";

 console.log(JSUser);
 


