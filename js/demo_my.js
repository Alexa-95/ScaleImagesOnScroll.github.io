const images = document.querySelectorAll('.content__item-img');
const title = document.querySelectorAll('.content__item-title');
let windowHeight = window.innerHeight;


window.addEventListener('scroll', function(e) {
    for(let i = 0; i < images.length; i++){
        let imagesTop = images[i].getBoundingClientRect().top;
        let imagesBottom = images[i].getBoundingClientRect().bottom;
        let imagesHeight = images[i].clientHeight;
        // console.log(imagesBottom)
        if(imagesBottom <= 0){
            images[i].classList.remove('scale');
            images[i].style.transform = "scale(2)";
        }
        else if(imagesBottom > 0 && imagesBottom < windowHeight + imagesHeight){
            let scalePercent = Math.floor((window.innerHeight - imagesTop) * .5 / 100);
            images[i].classList.add('scale');

            title[i].style.transform = "translate3d(0px, " + (scalePercent * (-80)) + "px, 0px)";
            if(scalePercent >=10){
                images[i].style.transform = "scale(1.9"+ scalePercent +")";
            }
            else{                
                images[i].style.transform = "scale(1."+ scalePercent +")";
            }
        }
        else{
            images[i].classList.remove('scale');
            images[i].style.transform = "scale(1)";
        }
    }
});


