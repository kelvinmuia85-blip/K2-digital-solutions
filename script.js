// Mobile Menu
const menu=document.querySelector(".menu-btn");

const nav=document.querySelector(".nav-links");

menu.onclick=()=>{

nav.classList.toggle("active");

};

// Navbar

window.addEventListener("scroll",()=>{

document.getElementById("navbar")

.classList.toggle("scrolled",window.scrollY>50);

});

// Typing Effect

const words=[

"K2 DIGITAL SOLUTIONS",

"FAST INTERNET",

"PRINTING SERVICES",

"YOUR DIGITAL PARTNER"

];

let i=0;

let j=0;

let current="";

let isDeleting=false;

function type(){

current=words[i];

if(isDeleting){

j--;

}else{

j++;

}

document.querySelector(".typing").textContent=current.substring(0,j);

if(!isDeleting && j===current.length){

isDeleting=true;

setTimeout(type,1500);

return;

}

if(isDeleting && j===0){

isDeleting=false;

i++;

if(i===words.length)i=0;

}

setTimeout(type,isDeleting?70:120);

}

type();

// Counters

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.dataset.target;

const c=+counter.innerText;

const increment=target/150;

if(c<target){

counter.innerText=Math.ceil(c+increment);

setTimeout(update,10);

}else{

counter.innerText=target;

}

}

update();

});

// Back To Top

const topBtn=document.getElementById("topBtn");

window.onscroll=()=>{

topBtn.style.display=window.scrollY>400?"block":"none";

}

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

}

particlesJS("particles-js",{

particles:{

number:{value:70},

color:{value:"#00bfff"},

shape:{type:"circle"},

opacity:{value:0.4},

size:{value:3},

move:{speed:2}

}

});

const theme=document.getElementById("theme");

theme.onclick=()=>{

document.body.classList.toggle("light");

}

AOS.init({

duration:1000,

once:true

});