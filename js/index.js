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


const slidWrapper = document.querySelector(`.slid-wrapper`);
const buttons = document.querySelector(`.arrow`);
const black = getElementsByClassName(`.black-container`).length;

const prevButton = buttons[0];
const nextButton = buttons[1];

let 이동거리 = 0;
const 슬라이드너비 = document.querySelector('.slider').clientWidth;

nextButton.addEventListener("click",()=>{
    if(이동거리 === 슬라이드너비 * (black-1)){
        이동거리 = 0;
    }else{
        이동거리 = 이동거리 + 슬라이드너비;
    }
    slidWrapper.style.transform = `translateX(-${이동거리}px)`;
});

prevButton.addEventListener("click",()=>{
    if(이동거리===0){
        이동거리 = 슬라이드너비*(black-1);
    }else{
        이동거리 = 이동거리 - 슬라이드너비;
    }
    slidWrapper.style.transform = `translateX(-${이동거리}px)`
});




// https://github.com/venty1993/test