function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
            reveals[i].classList.remove("de-active");
        } else {
            reveals[i].classList.remove("active");
            reveals[i].classList.add("de-active");
        }
    }
}

window.addEventListener("scroll", reveal);



const buttonRight = document.getElementById('slideRight');
const buttonLeft = document.getElementById('slideLeft');
const container = document.getElementById("container")
console.log(buttonLeft, buttonRight, container);
let last = container.scrollLeft
container.addEventListener('scroll',()=>{

if (container.scrollLeft == 0) {
    buttonLeft.style.visibility = "hidden";
} else 
    buttonLeft.style.visibility = "visible"

if (container.scrollLeft === 2019) {
    buttonRight.style.visibility = "hidden";
} else 
    buttonRight.style.visibility = "visible"
})

buttonRight.onclick = function () {
    console.log(this.scrollLeft)
    container.scrollBy({
        behavior: "smooth",
        left: 1010
    })
    console.log(container.scrollLeft,container.scrollWidth);
};
buttonLeft.onclick = function () {
    container.scrollBy({
        behavior: "smooth",
        left: -1010
    })
    
    console.log(container.scrollLeft);
};






var hid=document.getElementById('hidden');
var barbtn=document.getElementById('bar-btn');
var crossbtn=document.getElementById('cr-btn');
barbtn.onclick= function () {
    console.log('hgfg');
    hid.style.display="block";
    
    window.onclick= function(event) {
        console.log(event.target.classList);
        if (event.target.matches('.hidden-window','.fa-close')) {
            
            document.getElementById('hidden').style.display = "none";
        }

    
}
}

crossbtn.onclick=function(){
    hid.style.display='none';
}
