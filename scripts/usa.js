import navbar from "../component/navbar.js";
console.log(navbar());
document.querySelector("#navbar").innerHTML=navbar(); 


async function getData(){
    let url="https://masai-mock-api.herokuapp.com/news/top-headlines?country=us";
    let res= await fetch(url);
    let data=await res.json();
    console.log(data.articles)
 append(data.articles);
 }
 getData();
 
 function append(data)
 {
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
 