const header = document.getElementsByTagName('header')[0];

window.addEventListener('mousewheel', (e)=> {
    if(e.deltaY>0){
        header.classList.add('hide-header')
    }else{
        header.classList.remove('hide-header')
    }
})



const eventText = document.getElementsByClassName('event-text');
const eventImg =document.getElementsByClassName('event-img');

for(let i=0; i< eventText.length; i++){

    window.addEventListener('scroll',()=>{
        console.log(eventText[1].getBoundingClientRect().top)
        //1000가까이 됐을때 사진 opacity1
        if(eventText[i].getBoundingClientRect().top - window.innerHeight < 0){
            eventImg[i].classList.remove('event-opacity')
        }else(
            eventImg[i].classList.add('event-opacity')
        )
    })
}

// - window.innerHeight