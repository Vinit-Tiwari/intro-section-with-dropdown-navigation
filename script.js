let feature=document.querySelector(".list1")
let company=document.querySelector(".list2")
let a1=document.querySelector("#arrow1")
let a2=document.getElementById("arrow2")
let img=document.querySelector(".img")

let c1=0   
let c2=0

function myFunction(x) {
    if (x.matches) { // If media query matches
        img.src="images/image-hero-mobile.png"
    }
    else{
        img.src="images/image-hero-desktop.png"
    }
  }
  
var x = window.matchMedia("(max-width: 600px)")
myFunction(x) 
x.addListener(myFunction) 

function listDisplay(i){

    if(i==1){
        if(c1%2==0){
            feature.style.height="auto"
            feature.style.visibility="visible"
            a1.style.transform="rotate(180deg)"
        }
        else{
            feature.style.height="0"
            feature.style.visibility="hidden"
            a1.style.transform="rotate(0deg)"
        }
        c1++;
    }
    if(i==2){
        if(c2%2==0){
            company.style.height="auto"
            company.style.visibility="visible"
            a2.style.transform="rotate(180deg)"
        }
        else{
            company.style.height="0"
            company.style.visibility="hidden"
            a2.style.transform="rotate(0deg)"
        }
        c2++;
    }
}


let ham=document.querySelector(".hamburger")
let navBar=document.querySelector(".log")

ham.addEventListener("click",()=>{
    ham.classList.toggle("active");
    navBar.classList.toggle("active");

})

