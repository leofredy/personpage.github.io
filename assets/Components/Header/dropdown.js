class AnimationDropdown {
    constructor(){
        this.firstAnimation = true;
        this.nav = document.querySelector('.unfold-header nav');
        this.navContent = document.querySelector('.unfold-header nav .container');
    }

    Animation(event){
        const element = event.target;
        const selector = element.classList[1];
        if (selector === 'lni-menu'){
            this.Open(element);
        } else {
            this.Close(element);
        }
    }

    Open(element){
        element.classList.remove('lni-menu');
        element.classList.add('lni-close');
        this.navContent.classList.remove('closed');
        this.nav.classList.add('toggle');

        clearTimeout(this.DisappearsNav); 
    }

    Close(element){

        element.classList.remove('lni-close');
        element.classList.add('lni-menu');
        this.navContent.classList.add('closed');

        this.DisappearsNav = setTimeout( () => {
            this.nav.classList.remove('toggle');
        }, 500)
    }
}

const Dropdown = new AnimationDropdown();

document.querySelector('.lni-menu')
    .addEventListener('click', function(event){
        Dropdown.Animation(event)
    })
