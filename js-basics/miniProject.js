console.log("We are creating a mini project in js from shraddha khapa");

let btn = document.querySelector("button");
let ul  = document.querySelector("ul");
let input  = document.querySelector("input");

btn.addEventListener("click",function(){
  //  console.log("Clicked!");
    
    let item = document.createElement("li");
    item.innerText=input.value;
    
   //console.log(input.value);
   

let delBtn = document.createElement("Button");
    delBtn.innerText="delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    input.value="";
    
});

ul.addEventListener("click", function(event) {
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
        
    }
});