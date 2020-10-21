window.addEventListener('load', handleWidthWork);
window.addEventListener('resize', handleWidthWork);

function handleWidthWork(){
    const elementWorks = document.querySelectorAll('section.my-recent-works ul li');

    elementWorks.forEach(elementWork => {
        elementWork.style.height = `${elementWork.offsetWidth}px`;
        elementWork.children[0].innerHTML = `${elementWork.offsetWidth} x ${elementWork.offsetHeight}`;
    });
}