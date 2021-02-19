function popUpCards({ path }){
    const elementBody = document.querySelector('body');

    document.querySelector('html').style.overflow = 'hidden';

    let listContent;

    if (path.length === 11){
        listContent = getContent(path[3]);
    } else if (path.length === 12){
        listContent = getContent(path[4]);
    } else {
        return null;
    } 

    const JobViewer = CreateJobViewer('PopupWorkImage', listContent);
    JobViewer.addEventListener('click', popCloseCards, false);
    
    elementBody.appendChild(JobViewer);
}

function getContent(parent){
    let content = [];

    for(let index = 0; index < parent.children.length - 1; index++){
        content.push(parent.children[index].cloneNode(true));
    }
    return content;
}

function popCloseCards(event){
    if (`${event.target}` === `${document.createElement('i')}`){
        event.target.parentElement.parentElement.style.display = 'none';
        document.querySelector('html').style.overflow = 'auto';
        document.querySelector('body').removeChild(event.target.parentElement.parentElement);
    }
}

function CreateJobViewer(classList, contents){
    const Viewer = document.createElement('div');
    Viewer.classList.add(classList);
    Viewer.innerHTML = `
        <div>
            <i class="lni lni-close"></i>
            <span>
                <h6>1 / ${contents.length}</h6>
            </span>
        </div>
        
        <ul>
        
        </ul>
    `;
    contents.forEach( content => {
        if (content.toString() !== document.createElement('img').toString()){
           Viewer.children[1]
                    .style 
                    .justifyContent = "center";
            Viewer.children[1]
                    .style
                    .alignItems = "center";
        } else {
            content.addEventListener('touchmove', handleTheItemsPosition);
        }
        Viewer.children[1].appendChild(content);
    });

    Viewer.children[1].style.height = `${window.innerHeight * 60 / 100}px`;

    return Viewer;
}

function handleTheItemsPosition( event ){
    const target = event.target;
    const listItems = target.parentElement;
    const horizontalPositionItem = target.offsetLeft;
    const viewerSize = listItems.offsetWidth;

    if (listItems.scrollLeft > horizontalPositionItem + (viewerSize / 2)){
        console.log('mudei')
    }
}

export default popUpCards;