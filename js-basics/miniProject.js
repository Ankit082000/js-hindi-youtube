// console.log("We are creating a mini project in js from shraddha khapa");

// let btn = document.querySelector("button");
// let ul  = document.querySelector("ul");
// let input  = document.querySelector("input");

// btn.addEventListener("click",function(){
//   //  console.log("Clicked!");
    
//     let item = document.createElement("li");
//     item.innerText=input.value;
    
//    //console.log(input.value);
   

// let delBtn = document.createElement("Button");
//     delBtn.innerText="delete";
//     delBtn.classList.add("delete");

//     item.appendChild(delBtn);
//     ul.appendChild(item);
//     input.value="";
    
// });

// ul.addEventListener("click", function(event) {
//     if (event.target.nodeName == "BUTTON") {
//         let listItem = event.target.parentElement;
//         listItem.remove();
//         console.log("deleted");
        
//     }
// });






let started = false;
let level = 0;
let GameSeq = [];
let UserSeq = [];


let btns = ["yellow", "red", "green","purple"];

let h2 = document.querySelector("h2");
document.addEventListener("keypress",function(){
    if (started==false) {
    console.log("Game Started");
    started=true;    

    levelUp();
    }
    
    
}) ;

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
    
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },300);
    
}

function levelUp() {
   
    level++;
    UserSeq=[];
    h2.innerText=`Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn =document.querySelector(`.${randColor}`);
   GameSeq.push(randColor);
   console.log(GameSeq);
   gameFlash(randBtn);
}

function checkAns(idx) {
    
    if (UserSeq[idx]===GameSeq[idx]) {
        if(UserSeq.length==GameSeq.length){
            setTimeout(levelUp, 1000);
        }
    } else{
        h2.innerHTML = `Game Over ! Your score was <b> ${level-1} </b> <br> Press Any Key To Start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor="white";
        },250);
        reset();
    }
             
   
}

function btnPress() {
    
    
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    UserSeq.push(userColor);
    checkAns(UserSeq.length-1);
    
    
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    GameSeq =[];
    UserSeq =[];
    level   =0;
    
}