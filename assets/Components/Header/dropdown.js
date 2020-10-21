class AnimationDropdown {
    constructor(){
        this.navElement = document.querySelector('.unfold-header nav');
        this.navContent = document.querySelector('.unfold-header nav .container');
    }
    
    Animation(event){
        const switchAnimation = event.target;
        const switchStyleClass = switchAnimation.classList[1];
        if (switchStyleClass === 'lni-menu'){
            this.Open(switchAnimation);
        } else {
            this.Close(switchAnimation);
        }
    }
    
    Open(switchAnimation){
        switchAnimation.classList.remove('lni-menu');
        switchAnimation.classList.add('lni-close');
        this.navContent.classList.remove('closed');
        this.navElement.classList.add('toggle');
        
        clearTimeout(this.disappearsNavElement); 
    }
    
    Close(switchAnimation){
        
        switchAnimation.classList.remove('lni-close');
        switchAnimation.classList.add('lni-menu');
        this.navContent.classList.add('closed');
        
        this.disappearsNavElement = setTimeout( () => {
            this.navElement.classList.remove('toggle');
        }, 500)
    }
}

const Dropdown = new AnimationDropdown();

document.querySelector('.lni-menu')
    .addEventListener('click', function(event){
        Dropdown.Animation(event)
    });
