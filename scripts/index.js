/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/
let arr=JSON.parse(localStorage.getItem("user"))||[];
let form=document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
    let obj={
        userName:document.querySelector("#user_name").value,
        userPic:document.querySelector("#user_pic").value,
        userEmail:document.querySelector("#user_email").value,
        userCountry:document.querySelector("#user_country").value,
    }
if(checkemails(obj.userEmail)===true)
{
    arr.push(obj);
    localStorage.setItem("user",JSON.stringify(arr));
    
}
else
{
alert("Account already exists!!")
}
   document.querySelector("form").reset();
})
function checkemails(userEmail){
    let filter=arr.filter((elem)=>{
        return  userEmail==elem.userEmail;
    })
    if(filter.length>0)
    {
        return false;
    }
    else
    {
        return true;
    }
}






