import navbar from "../component/navbar.js";
// console.log(navbar());
document.querySelector("#navbar").innerHTML=navbar(); 

// <!-- <input type="text" id="search_box" placeholder="search"/>
document.querySelector("#search_box").addEventListener("keydown",getData);

 async function getData(){
    
let query=document.querySelector("#search_box").value;
let url=`https://masai-mock-api.herokuapp.com/news?q=${query}`
let res= await fetch(url);
let data=await res.json();
console.log(data.articles);
append(data.articles);
}
function append(data){
    let container=document.querySelector("#news_result");
    container.innerHTML="";
    data.forEach((elem)=>{

        let img=document.createElement("img");
        img.src=elem.urlToImage;

        let name=document.createElement("h3");
        name.innerText=elem.source.name;

let title=document.createElement("p");
title.innerText=elem.title;


let div=document.createElement("div");
div.onclick=function(){
    newsCome(elem);
 }


div.append(img,name,title)
container.append(div);
    })
}




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

function newsCome(data){
    localStorage.setItem("detailscom",JSON.stringify(data));
    window.location.href="news.html";
    }



// async function getdata(country){
//     let userDetails=JSON.parse(localStorage.getItem("user"));
//     let cont=document.querySelector("#app");

//     let url2=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${country.innerText}`;
//     let res2= await fetch(url2);
//     let data2=await res2.json();
//     console.log(data2.articles)
// //  append2(data2.articles);
//  }
//  getdata(country);
 



//  function append2(data2)
//  {
//      let container2=document.querySelector("#news_result");
//      container2.innerHTML="";
//      data2.forEach((elem)=>{
 
//          let img=document.createElement("img");
//          img.src=elem.urlToImage;
 
//          let name=document.createElement("h3");
//          name.innerText=elem.source.name;
 
//  let title=document.createElement("p");
//  title.innerText=elem.title;
//  let div=document.createElement("div");
 
//  div.append(img,name,title)
//  container2.append(div);

//      })
 
//  }



