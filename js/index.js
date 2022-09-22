const header = document.getElementsByTagName('header')[0];

window.addEventListener('mousewheel', (e)=> {
    if(e.deltaY>0){
        header.classList.add('hide-header')
    }else{
        header.classList.remove('hide-header')
    }
})


const eventText = document.getElementsByClassName('event-text');
const eventImg = document.getElementsByClassName('event-img');

for(let i=0; i< eventText.length; i++){

    window.addEventListener('scroll',()=>{
        // console.log(eventText[1].getBoundingClientRect().top)
        //1000가까이 됐을때 사진 opacity1
        if(eventText[i].getBoundingClientRect().top - window.innerHeight < 0){
            eventImg[i].classList.remove('event-opacity');
        }else{
            if(i!==0){
                eventImg[i].classList.add('event-opacity');
            }

        }
        
    })
}

// ====









// ====

const slidWrapper = document.querySelector(`.slid-wrapper`);
const black = document.getElementsByClassName(`black-container`).length;
const prevButton = document.querySelector(`.arrow-left`);
const nextButton = document.querySelector(`.arrow-right`);

let index = 0;
// const 슬라이드너비 = window.innerWidth;
// const 슬라이드너비 = document.black.clientWidth;
const sliderContainer = document.querySelector(`.slider`);
const 슬라이드너비 = sliderContainer.clientWidth;

window.addEventListener('resize',()=>{
    슬라이드너비 = sliderContainer.clientWidth;
});


nextButton.addEventListener("click",()=>{
    if(index === (black-1)){
        index = 0;
    }else{
        index++;
    }
    slidWrapper.style.transform = `translateX(-${슬라이드너비*index}px)`;
});

prevButton.addEventListener("click",()=>{
    if(index===0){
        index = (black-1);
    }else{
        index--;
    }
    slidWrapper.style.transform = `translateX(-${슬라이드너비*index}px)`
});




// https://github.com/venty1993/test