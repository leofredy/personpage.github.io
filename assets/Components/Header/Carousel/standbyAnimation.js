window
    .addEventListener('load', carouselAnimation);

function carouselAnimation(){

    let timeAnimation = 3000;
    let currentAnimation = 0;
    const images = document.querySelectorAll('.carousel .items img');
    const maximumImage = images.length;

    const controllerSpheres = document.querySelectorAll('.carousel .sphere-controller .sphere-item');
    const controllerNext = document.querySelector('.carousel .next');
    const controllerGoBack = document.querySelector('.carousel .go-back');

    controllerNext.addEventListener('click', controllers);
    controllerGoBack.addEventListener('click', controllers);

    const animations = {}
    
    animations.startAnimation = function(){
        this.standbyAnimation = setInterval(() => {
            animations.nextAnimation();
        }, timeAnimation);
    };
    animations.startAnimation();

    animations.nextAnimation = function(){
        images[currentAnimation]
            .classList
            .remove('selected');
        
        controllerSpheres[currentAnimation]
            .classList
            .remove('selected');
    
        currentAnimation < maximumImage - 1 ? currentAnimation++ : currentAnimation = 0;
    
        images[currentAnimation]
            .classList
            .add('selected');
    
        controllerSpheres[currentAnimation]
            .classList
            .add('selected'); 
    }

    animations.goBackAnimation = function(){
        images[currentAnimation]
            .classList
            .remove('selected');
        
        controllerSpheres[currentAnimation]
            .classList
            .remove('selected');

            currentAnimation === 0 ? currentAnimation = maximumImage - 1 : currentAnimation--;
        console.log(currentAnimation)
        images[currentAnimation]
            .classList
            .add('selected');
    
        controllerSpheres[currentAnimation]
            .classList
            .add('selected');
            
    }

    function controllers (event){

        if (event.target.classList[0] === 'go-back' || event.target.classList[1] === 'lni-chevron-left'){
            animations.goBackAnimation();
            animations.stopAnimation();
        } else {
            animations.nextAnimation();
            animations.stopAnimation();
        }

    } 

    animations.stopAnimation = function(){
        clearInterval(animations.standbyAnimation);
        animations.startAnimation();
    }
}