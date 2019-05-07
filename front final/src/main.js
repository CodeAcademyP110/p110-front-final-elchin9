"use strict";

// Start Header

$(document).on("click", ".mobile-menu", function(){
    $("#mobile-nav").slideToggle();
});
$(document).on("click", ".mob-li i", function(){
    $(this).parent().next().slideToggle();
});

// End Header

// Start Slider

let index = 0;
const slides = document.querySelectorAll('.photos li');
let slider = $("slider");
let list = slider.find("ul.photos");
let length = $(".photos li").length;
let height = $(".slider").height();
let totalHeight = height * length;

$(".photos li").height(height).end().height(totalHeight);


$(document).on("click", ".arrow-left", function()
{
    SlideLeft();
});

$(document).on("click", ".arrow-right", function()
{
    SlideRight();
});

function Slide()
{
    $("ul.photos").css("top", -index * height);
    
}

function SlideRight(){
   index++
   if(index === slides.length)
    {
   	    index = 0;
   	}
   	Slide();
}

function SlideLeft()
{
    index--;
    if(index < 0)
    {
        index = slides.length - 1; 
    }    
    Slide();
}
let SliderInterval = setInterval(() => {
    SlideRight();
}, 4000); 

// End Slider

// Start Tab

$(document).on("click", ".tabs li", function(){

    $('.tabs li.active').removeClass("active");
        $(this).addClass("active");   

        TabContentChanger();
});
      

function TabContentChanger()
{
    $('.tab_content.active').removeClass("active");

    const index = $('.tabs li.active').attr("data-index");
    const connectedTab = document.querySelector(`.tab_content[data-index="${index}"]`);
    connectedTab.classList.add("active");
}

function MobileTabChanger()
{
    $('.tab_content.active').removeClass("active");

    const index = $('.small-tabs li.active').attr("data-index");
    const connectedTab = document.querySelector(`.tab_content[data-index="${index}"]`);
    connectedTab.classList.add("active");
}

$(document).on("click", ".left-menu-arrow",function(){

    const activeLi = document.querySelector('.small-tabs li.active');
    activeLi.classList.remove("active");

    if(activeLi.previousElementSibling)
    {
        activeLi.previousElementSibling.classList.add('active');
    }
    else
    {
        document.querySelector('.small-tabs li:last-of-type').classList.add('active');
    }

    MobileTabChanger();
    
});

$(document).on("click", ".right-menu-arrow",function(){

    const activeLi = document.querySelector('.small-tabs li.active');
    activeLi.classList.remove("active");

    if(activeLi.nextElementSibling)
    {
        activeLi.nextElementSibling.classList.add('active');
    }
    else
    {
        document.querySelector('.small-tabs').firstElementChild.classList.add('active');
    }

    MobileTabChanger();
});

// End Tabs


// Recommended Hotels


$(document).on("click", ".hotel-left-arrow",function(){

    let width = $(".slider-carousel ul li").width();

    $(".slider-carousel ul").css("transform","translate3d(0px, 0px, 0px)");
    
});

$(document).on("click", ".hotel-right-arrow",function(){

    $(".slider-carousel ul").css("transform","translate3d(-289px, 0px, 0px)");

});


// End Recommended Hotels


// Start Tab Hotels


$(document).on("click", ".tabs-hotel li", function(){

    $('.tabs-hotel li.active').removeClass("active");
        $(this).addClass("active");   

        TabHotelChanger();
});

function TabHotelChanger()
{
    $('.tab-content-hotel.active').removeClass("active");

    const index = $('.tabs-hotel li.active').attr("data-index");
    const connectedTab = document.querySelector(`.tab-content-hotel[data-index="${index}"]`);
    connectedTab.classList.add("active");
}

$(document).on("click", ".small-hotels-tab li", function(){

    $('.small-hotels-tab li.active').removeClass("active");
        $(this).addClass("active");   

        MobileHotelChanger();
});

function MobileHotelChanger()
{
    $('.tab-content-hotel.active').removeClass("active");

    const index = $('.small-hotels-tab li.active').attr("data-index");
    const connectedTab = document.querySelector(`.tab-content-hotel[data-index="${index}"]`);
    connectedTab.classList.add("active");
}

// Slider Testimonals

const testSlides = document.querySelectorAll('.slider-list li');

$(document).on("click", ".test-first-button",function()
{
    $('.test-slider-button li.testimonials-active').removeClass("testimonials-active");
    $(this).addClass("testimonials-active");
    document.querySelector('.slider-list').style.left = "0";
});

$(document).on("click", ".test-middle-button", function()
{
    $('.test-slider-button li.testimonials-active').removeClass("testimonials-active");
    $(this).addClass("testimonials-active");
    document.querySelector('.slider-list').style.left = "-100%";
});

$(document).on("click", ".test-last-button", function()
{
    $('.test-slider-button li.testimonials-active').removeClass("testimonials-active");
    $(this).addClass("testimonials-active");
    document.querySelector('.slider-list').style.left = "-200%";
});

// End Tab Hotels

// Start Accordion 

$(document).on("click", ".acc_head", function(){

   const accImage = $(this).prev().attr("src");

    if($(this).next().hasClass("active-accordion"))
    {
        $(this).next().removeClass("active-accordion");
    }
    else
    {
        $(".acc_body.active-accordion").removeClass("active-accordion");
        $(this).next().addClass("active-accordion");
        $(".image-toggle img").attr("src", accImage);
    }
});

// End Accordion

// Start Holiday Tabs

$(document).on("click", ".tabs-holiday li", function(){

    $('.tabs-holiday li.active-holiday').removeClass("active-holiday");
        $(this).addClass("active-holiday");   

        TabHolidayChanger();
});

function TabHolidayChanger()
{
    $('.tab-holiday-content.active-holiday').removeClass("active-holiday");

    const index = $('.tabs-holiday li.active-holiday').attr("data-index");
    const connectedTab = document.querySelector(`.tab-holiday-content[data-index="${index}"]`);
    connectedTab.classList.add("active-holiday");
}

$(document).on("click", ".small-tabs-holiday li", function(){

    $('.small-tabs-holiday li.active-holiday').removeClass("active-holiday");
        $(this).addClass("active-holiday");   

        MobileHolidayChanger();
});

function MobileHolidayChanger()
{
    $('.tab-holiday-content.active-holiday').removeClass("active-holiday");

    const index = $('.small-tabs-holiday li.active-holiday').attr("data-index");
    const connectedTab = document.querySelector(`.tab-holiday-content[data-index="${index}"]`);
    connectedTab.classList.add("active-holiday");
}

// End Holiday Tabs

// Start Page Design Skins

$(document).on("click", ".style-changer-header", function(e){

    e.preventDefault();
    
    let leftChanger = $(".style-changer").css("left");
    
    if(leftChanger === "-275px")
    {
        $(".style-changer").css("left", 0)
        $(".overlay-icon-changer").css("opacity", 0.6);
    }
    else if($(".style-changer").css("left", 0))
    {
        $(".style-changer").css("left", -275)
        $(".overlay-icon-changer").css("opacity", 0);
    }
});

$(document).on("click", ".design-skins li a", function(e){

    e.preventDefault();

    $(".design-skins i.active-skins").removeClass("active-skins");
    $(this).find("i").addClass("active-skins");

});

$(document).on("click", ".button-setting", function(){

    const colorHeader = $(".active-skins").parent().css("background-color");

    $(".top-header").css("background", colorHeader);
    $(".style-changer-header").css("background", colorHeader);
    $(".style-changer-main").css("background-color", colorHeader);
    $(".style-changer-main label").css("color", "#fff");
    $(".tab-body i").css("background", colorHeader);
    $(".tab-holiday-content h2").css("color", colorHeader);
    $(".overlay-icon-changer").css("background", colorHeader);
    $(".menuUl").css("background", colorHeader);
    $(".menuUl li a").css("border-top", "none");
    $(".mega-menu").css("background", colorHeader);
    $(".mega-menu li a").css("border-top", "none");
    $(".style-toggle-icon i").css("color", colorHeader);
    $(".overlay-box").css("background", colorHeader);
    $(".overlay-box").css("opacity", 0.6)
  
});

$(document).on("click", ".scroll-top", function(e){

    e.preventDefault();
   
    $("html").animate({scrollTop:0}, '500');

});

$(document).scroll(function(){

    if($(document).width() > 991.98 && $("html").scrollTop() >= 366)
    {
        $("header").addClass("sticky-top");
    }
    else if($("html").scrollTop() <= 366)
    {
        $("header").removeClass("sticky-top");
    }

});

//  Inner Slider

let innerSliderIndex = 0;
const innerSlides = $('.inner-photos li');


$(document).on("click", ".box-image", function(){

    $(".inner-slider").css("display", "block");

});

$(document).on("click", ".inner-arrow-left", function()
{
    innerSlideLeft();
});

$(document).on("click", ".inner-arrow-right", function()
{
    innerSlideRight();
});

function innerSlide()
{
    $('.inner-photos').css("left", -innerSliderIndex * 60 + "vw");
}

function innerSlideRight(){
    innerSliderIndex++
   if(innerSliderIndex === innerSlides.length)
    {
        innerSliderIndex = 0;
   	}
   	innerSlide();
}

function innerSlideLeft()
{
    innerSliderIndex--;
    if(innerSliderIndex < 0)
    {
        innerSliderIndex = innerSlides.length - 1; 
    }    
    innerSlide();
}
let innerSliderInterval = setInterval(() => {
    innerSlideRight();
}, 2000); 

$(document).on("click", ".close", function(){

    $(".inner-slider").css("display", "none");

});


// Site Map

$(document).on("click", ".map-action", function(){

    $(".inner-maps").css("display", "flex");
    $(".inner-maps").addClass("justify-content-center align-items-center");

});

$(document).on("click", ".close-map", function(){

    $(".inner-maps").css("display", "none");

});