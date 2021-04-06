export default class AnimationsInOut {
  constructor(animation, listElements, HEIGHT_HEADER, position, typeSkill) {
    this.viewport = window.innerHeight;
    this.animation = animation;
    this.listElements = listElements;
    this.HEIGHT_HEADER = HEIGHT_HEADER;
    this.position = position || false;
    this.typeSkill = typeSkill || false;
  }

  observeElementVisible() {
    this.visisbleElements = [];
    this.invisibleElements = [];
    const scrollMouse = window.scrollY;
    
    this.listElements.forEach((element) => {
      /*
        se o elemento estiver com position diferente de static
        sera usado um container que tenha, para calcular a distância do
        elemento na tela
      */
      const startingPoint = this.position ? element.parentElement.parentElement : element;
      const positionTop = startingPoint.offsetTop;
      const heightElement = startingPoint.offsetHeight;
      const MAX_RANGE = positionTop + this.viewport + heightElement - this.HEIGHT_HEADER;
      const MIN_RANGE = positionTop;
      const CURRENT_VISIBLE_AREA = this.viewport + scrollMouse;

      if (MIN_RANGE <= CURRENT_VISIBLE_AREA && CURRENT_VISIBLE_AREA < MAX_RANGE) {
        this.visisbleElements.push(element);
      } else {
        this.invisibleElements.push(element);
      }
    });
  }

  handleProgressAnimation(event){
    const barProgress = event.target
    const progressIndicator = barProgress.parentElement.parentElement.children[0].children[1];
    const barInner = document.querySelector('.bar-inner');

    const indicatorChanger = setInterval( () => {
        const progressCurrent = barProgress.offsetWidth * 100 / barInner.offsetWidth;
        progressIndicator.innerHTML = `${parseInt(progressCurrent)}%`;
    }, 200);

    setTimeout( () => {
        clearInterval(indicatorChanger);
    }, 5000);
  }

  animationSkillProgress() {
    this.listElements.forEach(barProgress => { 
      barProgress.addEventListener('animationstart', this.handleProgressAnimation);
    });
  }

  inputAnimation(listElements) {
    listElements.forEach(element => {
      element.classList.add(`animated-enter-${this.animation}`);
      element.classList.remove(`animated-leave-${this.animation}`);
    });
  }

  exitAnimation(listElements) {
    listElements.forEach(element => {
      element.classList.remove(`animated-enter-${this.animation}`);
      element.classList.add(`animated-leave-${this.animation}`);
    });
  }

  addTransition() {
    this.listElements.forEach(element => {
      element.style.transition = "all 1s ease";
    });
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.executora = this.executora.bind(this);
  }

  onStart() {
    if (this.typeSkill) {
      this.animationSkillProgress();
    }
    this.addTransition();
    this.observeElementVisible();
    this.inputAnimation(this.visisbleElements);
    this.exitAnimation(this.invisibleElements);
  }

  executora() {
    this.bindEvents();
    this.onStart();
  }

  init() {
    this.bindEvents();
    this.exitAnimation(this.listElements);
    return this.executora;
  }
}