var $=document;
let sliderMainPic=[
    slider="image/slider/shopping-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-smiling-looking-camera.jpg",
    slider="image/slider/young-man-holding-shopping-bags-showing-mobile-phone-screen-money-application-standing-yell.jpg",
    slider="image/slider/95076.jpg",
    slider="image/slider/shopping-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-smiling-looking-camera-smaller.jpg"
]
console.log(sliderMainPic)
let slider=document.getElementById('slider')
let index=0
function nextSlide(){
    index++
    slider.src=sliderMainPic[index]
}
