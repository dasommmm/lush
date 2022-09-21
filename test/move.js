const rect = document.getElementsByClassName('move-rect')[0];

rect.addEventListener('mousedown', (e) =>{
    const rectLocation = rect.getBoundingClientRect();
    const startX = e.clientX
    document.addEventListener('mousemove',dragThings)
    document.addEventListener('mouseup', ()=>{
        document.removeEventListener('mousemove', dragThings)
    })

    function dragThings(event) {
        const nowX = event.pageX
        
        if(rectLocation.x+nowX-startX>0){
            rect.style.transform = `translateX(0px)`
        }else{
            rect.style.transform = `translateX(${rectLocation.x+nowX-startX}px)`
        }
    }
})