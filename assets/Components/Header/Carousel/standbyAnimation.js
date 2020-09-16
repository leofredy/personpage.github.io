
let timeAnimation = 3000;
let currentAnimation = 0;
const images = document.querySelectorAll('.carousel .items img');
const maximumImage = images.length;

const controllerSpheres = document.querySelectorAll('.carousel .sphere-controller .sphere-item')


function nextAnimation(){
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

window
    .addEventListener('load', function carouselAnimation(){
        setInterval(() => {
            nextAnimation();
        }, timeAnimation);
    });
