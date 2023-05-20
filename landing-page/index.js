// ====================CHANGE BACKGROUND HEADER=====
    
function scrollHeader(){
        const header = document.getElementById('header')
        // when the scroll is greater than 50 view port height, add the
        // scroll-header class to header tag
        if(this.scrollY >=50) header.classList.add('scroll-header'); 
        else header.classList.remove('scroll-header') 
    }


window.addEventListener('scroll', scrollHeader)

// ===============SWIPER POPULAR =================
var swiperPopular = new Swiper(".popular__container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides:true,
    slidesPerView:'auto',
    loop:true,

    navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
    
    },
});




