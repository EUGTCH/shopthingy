var $=document;
let colorChangerF=$.querySelector('#primery-color');
let colorChangerS=$.querySelector('#secondry-color');
colorChangerF.addEventListener('input',()=>{
    let colorPick=colorChangerF.value;
    console.log(colorPick)
    document.documentElement.style.setProperty('--primery-color',colorPick)
})
colorChangerS.addEventListener('input',()=>{
    let colorPick=colorChangerS.value;
    console.log(colorPick)
    document.documentElement.style.setProperty('--ourlight-color',colorPick)
})
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
let showItems=$.getElementById('show-item-shop');
let modalShop=$.querySelector('.container-modal')
let shopItems=[
    {name:"razer headphone",price:150,urlimage:"image/product/1.jpg"},
    {name:"razer headphone",price:150,urlimage:"image/product/2.jpg"},
    {name:"razer headphone",price:150,urlimage:"image/product/3.jpg"},
    {name:"razer headphone",price:150,urlimage:"image/product/4.jpg"},
    {name:"razer headphone",price:150,urlimage:"image/product/5.jpg"},
    {name:"razer headphone",price:150,urlimage:"image/product/6.jpg"},
    {name:"razer headphone",price:150,urlimage:"image/product/7.jpg"},
    {name:"razer headphone",price:150,urlimage:"image/product/8.jpg"},
    {name:"razer headphone",price:150,urlimage:"image/product/9.jpg"},
    {name:"razer headphone",price:150,urlimage:"image/product/10.jpg"}
]

function shopItemGenerator(items,show){
    let i=0;
    items.forEach(function(item){
        let mainDiv=$.createElement('div');
        mainDiv.className="main-box mx-3";
        let innerDiv=$.createElement('div');
        innerDiv.className="image-con text-center";
        let itemImage=$.createElement('img');
        itemImage.className="image-product";
        itemImage.setAttribute('src',shopItems[i].urlimage);
        let contentDiv=$.createElement('div');
        contentDiv.className="content-box flex flex-wrap";
        let spanName=$.createElement('span')
        spanName.className="py-1 product-content text-center";
        spanName.innerHTML=shopItems[i].name;
        let spanPrice=$.createElement('span')
        spanPrice.className="py-1 product-content text-center";
        spanPrice.innerHTML=shopItems[i].price+"€";
        let inputDiv=$.createElement('div');
        inputDiv.className="d-flex";
        let inptQty=$.createElement('input')
        inptQty.className="col-md-6 form-control qntNum"
        inptQty.setAttribute('type','number')
        let btnI=$.createElement('button');
        btnI.className="addTo-Card col-md-6  btn  fa-solid fa-cart-plus py-2"
        btnI.setAttribute('id','add-Card');
        

        show.append(mainDiv);
        mainDiv.append(innerDiv);
        innerDiv.append(itemImage,contentDiv)
        contentDiv.append(spanName,spanPrice,inputDiv);
        inputDiv.append(inptQty,btnI)
        i++
    })
    let inptQty=$.querySelectorAll(".qntNum");
    let btnToBuy=$.querySelectorAll(".addTo-Card");
    addtocartandModal(btnToBuy,modalShop)
}
/* add to cart modal*/

function addtocartandModal(btns,modal){
    btns.forEach(function(btn){
        btn.addEventListener('click',()=>{
            modal.style.display="block";
            modal.classList.add('modal-scroll')
        })
    })
}
/* add to cart modal*/
shopItemGenerator(shopItems,showItems);