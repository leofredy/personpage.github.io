const elementWorks = document.querySelectorAll('section.my-recent-works ul li');

elementWorks.forEach(elementWork => {
    elementWork.addEventListener('mouseenter', watchOverWork);
    elementWork.addEventListener('mouseleave', watchLeaveWork);
});

window.addEventListener('load', handleWidthWork);
window.addEventListener('resize', handleWidthWork);

function handleWidthWork(){

    elementWorks.forEach(elementWork => {
        elementWork.style.height = `${elementWork.offsetWidth}px`;
        elementWork.children[0].innerHTML = `${elementWork.offsetWidth} x ${elementWork.offsetHeight}`;
        elementWork.children[1].children[1].style.width = `${elementWork.offsetWidth}px`;
    });
}

function watchOverWork(event){
    event.target.children[1].classList.add('modal');
}
function watchLeaveWork(event){
    event.target.children[1].classList.remove('modal');
}
