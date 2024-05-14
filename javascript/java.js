var $=document;
/* slider */
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
if(index===0){
    document.getElementById('content3').style.display="none";
    document.getElementById('content1').style.display="block";
}
function nextSlide(){
    console.log(index)
    index++
    switch(true){
        case index===1:
            document.getElementById('content1').style.display="none";
            document.getElementById('content2').style.display="block";
            break;
            case index===2:
                document.getElementById('content2').style.display="none";
                document.getElementById('content3').style.display="block";
                break;
            }
            slider.classList.add('slider-animation');
            slider.addEventListener('animationend',()=>{
                slider.classList.remove('slider-animation');
            })
            slider.src=sliderMainPic[index];
    if(index>=sliderMainPic.length){
    document.getElementById('content3').style.display="none";
    document.getElementById('content1').style.display="block";
    slider.src=sliderMainPic[0]
    return index=0;
    }
}
setInterval(nextSlide,3000)
/* slider */

