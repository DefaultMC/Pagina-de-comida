let menu = document.querySelector(".menu-responsive");
let navbar = document.querySelector(".navbar");
let header = document.querySelector("header");


menu.addEventListener("click", ()=>{
    header.classList.toggle("active");
    navbar.classList.toggle("show");
    
} )

window.onscroll = () =>{
    header.classList.remove("active");
    navbar.classList.remove("show");

}

function loader(){
    document.querySelector(".loader-container").classList.add("fade-out");
}

function fadeOut(){
    setInterval(loader, 9000);
}

window.onload = fadeOut();


var swiper = new Swiper(".oferts-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },

    },
});
