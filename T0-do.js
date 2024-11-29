const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector(".listcontainer")
// console.log(listContainer)

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something")
    }
    else{
        let li = document.createElement('li')
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        // span.className = "cross";
        li.appendChild(span)
    }
    inputBox.value = '';
    save();
}
let button = document.querySelector(".bu")
button.addEventListener("click",addTask);

listContainer.addEventListener("click",(event)=>{
    if(event.target.nodeName === "LI"){
        event.target.classList.toggle("checked");
        save();
    }
    else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
        save();
    }
},false)

function save(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask();