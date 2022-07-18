import navbar from "../component/navbar.js";
// console.log(navbar());
document.querySelector("#navbar").innerHTML=navbar(); 

function userDetails(){
    let userDetails=JSON.parse(localStorage.getItem("user"));
let container=document.querySelector("#userDetails");
container.innerHTML="";
userDetails.forEach((elem)=>{

    let img=document.createElement("img")
    img.src=elem.userPic;

    let name=document.createElement("h3");
    name.innerText=elem.userName;

    let email=document.createElement("p");
    email.innerText=elem.userEmail;

    let country=document.createElement("p");
    country.innerText=elem.userCountry;

    container.append(img,name,email,country)
})

}
userDetails();

let newpic=[]
let arr=JSON.parse(localStorage.getItem("detailscom"));
newpic.push(arr)
function append(data){
    let container=document.querySelector("#newpage")
    container.innerHTML=null;
    data.forEach((elem)=>{

        let img=document.createElement("img");
        img.src=elem.urlToImage;

        let name=document.createElement("h3");
        name.innerText=elem.source.name;

let title=document.createElement("p");
title.innerText=elem.title;

let div=document.createElement("div");

div.append(img,name,title)
container.append(div);
    })
}
append(newpic);