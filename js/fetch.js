"use strict"
let result=document.getElementById("results");
let filter=document.getElementById("filter");
let listItems= [];

getData();

async function getData(){
    let res=await fetch ("https://randomuser.me/api/?results=10")
    let {results}=await res.json()

   result.innerHTML=" "

   results.forEach(members => {
    let li=document.createElement("li")
    listItems.push(li)
    li.innerHTML=`
    <img src="${members.picture.large}" alt=${members.name.first}"
    <div class="members-info">
    <h4>${members.name.first} ${members.name.last}</h4>
    </div>
    `
    result.appendChild(li)
   });
}

function filterData(searchItem){
    listItems.forEach(item =>{
        if(item.innerText.toLowerCase().includes(searchItem.toLowerCase())){
            item.classList.remove("hide")
        }else{
            item.classList.add("hide")
        }
    })
}


filter.addEventListener("keyup",(element) =>filterData(element.target.value));