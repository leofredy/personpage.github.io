const viewport = window.innerHeight;
const barsProgress = document.querySelectorAll('.skills ul li main .bar-progress');    
const HEIGHT_HEADER = 111;

function observeVisibleElementScreen(){
    const scrollMouse = window.scrollY;
    
    barsProgress.forEach((barProgress) => {
        const skillItem = barProgress.parentElement.parentElement;
        if (
            skillItem.offsetTop <= scrollMouse + viewport
            && 
            viewport + scrollMouse < skillItem.offsetTop + viewport + skillItem.offsetHeight - HEIGHT_HEADER) {
            barProgress.classList.add('animated');
        }
    })
}

function HandleProgressCurrent(event){
    const barProgress = event.target
    const progressIndicator = barProgress.parentElement.parentElement.children[0].children[1];
    const barInner = document.querySelector('.bar-inner');

    const indicatorChanger = setInterval( () => {
        const progressCurrent = barProgress.offsetWidth * 100 / barInner.offsetWidth;
        progressIndicator.innerHTML = `${parseInt(progressCurrent)}%`;
    }, 200);

    setTimeout( () => {
        clearInterval(indicatorChanger);
    }, 2400);
}

barsProgress.forEach(barProgress => { 
    barProgress.addEventListener('animationstart', HandleProgressCurrent);
});

window.onscroll = observeVisibleElementScreen;
window.addEventListener('load', observeVisibleElementScreen);