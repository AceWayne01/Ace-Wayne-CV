console.log("Ace Wayne Enterprise");
const links = document.querySelectorAll("nav a");
links.forEach(link => {link.addEventListener("click", e =>{e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({behavior:"smooth"});
});});

let slideIndex = 0;
function showSlides(){
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    for (let i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }
    for (let i=0;i<dots.length;i++){
        dots[i].classList.remove("active");
    }
    slides[slideIndex].style.display="block";
    dots[slideIndex].classList.add="active";
    slideIndex++;
    if(slideIndex>=slides.length){
        slideIndex=0;
    }
}
showSlides();
setInterval(showSlides,3000);
