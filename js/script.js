$(document).ready(function(){
 $('.main_slider').slick({
    arrows:true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    easing: "easeInQuad",
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    draggable: false,
 }
 );


 $('.partners_slider').slick({
    arrows: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    initialSlide: 0,
    easing: "easeInQuad",
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    draggable: true,
 }
 );
});