window.onload = () => {

const title = document.querySelector("h1");
const member = document.querySelector(".member");
const status = document.querySelector(".status");
const quote = document.querySelector(".quote");
const footer = document.querySelector(".footer");

title.style.opacity="0";
member.style.opacity="0";
status.style.opacity="0";
quote.style.opacity="0";

setTimeout(()=>{
title.style.opacity="1";
title.classList.add("glitch");
},3000);

setTimeout(()=>{
member.style.opacity="1";
},3500);

setTimeout(()=>{
status.style.opacity="1";
},4000);

setTimeout(()=>{
quote.style.opacity="1";
},4500);

setTimeout(()=>{
footer.innerHTML="Next Member Loading...";
},5000);

}
