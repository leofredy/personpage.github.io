const CardEvents = {
    elementWorks: document.querySelectorAll('section.my-recent-works ul li'),
    
    handleCardSize(){
        CardEvents.elementWorks.forEach(elementWork => {
            
            const triggersBoxPosition = elementWork.children.length - 1;

            elementWork.style.height = `${elementWork.offsetWidth}px`;
            if (`${document.createElement('img')}` !== `${elementWork.children[0]}`){
                elementWork.children[0].innerHTML = `${elementWork.offsetWidth} x ${elementWork.offsetHeight}`;
            }
            elementWork.children[triggersBoxPosition].children[1].style.width = `${elementWork.offsetWidth}px`;
        });
    },
}

export default CardEvents;