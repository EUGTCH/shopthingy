var $=document;
let sliderMainPic=[
    sliderPic="image/slider/shopping-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-smiling-looking-camera.jpg",
    sliderPic="image/slider/young-man-holding-shopping-bags-showing-mobile-phone-screen-money-application-standing-yell.jpg",
    sliderPic="image/slider/95076.jpg"
]
let slider=document.getElementById('slider')
let index=0
slider.src=sliderMainPic[index];
slider.classList.add('slider-animation');
slider.addEventListener('animationend',()=>{
slider.classList.remove('slider-animation');
})
function nextSlide(){
    console.log(index)
    index++
        slider.classList.add('slider-animation');
        slider.addEventListener('animationend',()=>{
        slider.classList.remove('slider-animation');
        })
    slider.src=sliderMainPic[index];
    if(index>=sliderMainPic.length-1){
       return index=0;
    }
}
setInterval(nextSlide,5000)
