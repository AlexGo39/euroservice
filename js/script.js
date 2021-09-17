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
    draggable: true,
 }
 );


 $('.reviews_slider').slick({
    arrows: true,
    speed: 1000,
    slidesToShow: 2,
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

///Modal
$('[data-modal="call_modal"]').on('click', function(){
   $('.overlay, #call_modal').fadeIn('slow');
});

$('.modal_close').on('click', function(){
   $('.overlay, #call_modal, #thanks_modal').fadeOut('slow');
});


});