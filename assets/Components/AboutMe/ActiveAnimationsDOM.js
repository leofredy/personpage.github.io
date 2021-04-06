import AnimationsInOut from "./AnimationsDOM.js";

const listElementZoom = [
  ...document.querySelectorAll(".short-presentation"),
  document.querySelector(".banner-hire"),
  ...document.querySelectorAll(".my-recent-works ul li"),
  ...document.querySelectorAll(".my-services ul li")
];
const listElementProgress = document.querySelectorAll(".bar-progress");
const listElementFadeLeft = [
  document.querySelector(".private .long-presentation p"),
  document.querySelector(".private ul"),
  document.querySelector(".my-recent-works p"),
];
const listElementFadeTop = [
  document.querySelector(".private .long-presentation h2"),
  document.querySelector(".my-services .apresentation h1"),
  document.querySelector(".my-recent-works h1")
]

const listElementRight = [
  document.querySelector(".my-services p")
]

let animationsProgress = new AnimationsInOut("fadeProgress", listElementProgress, 111, true, true);
let animationsZoom = new AnimationsInOut("fadeZoom", listElementZoom, 111);
let animationFadeLeft = new AnimationsInOut("fadeLeft", listElementFadeLeft, 111);
let animationFadeRight = new AnimationsInOut("fadeRight", listElementRight, 111);
let animationFadeTop = new AnimationsInOut("fadeTop", listElementFadeTop, 111);

animationsZoom = animationsZoom.init();
animationsProgress = animationsProgress.init();
animationFadeLeft = animationFadeLeft.init();
animationFadeRight = animationFadeRight.init();
animationFadeTop = animationFadeTop.init();

function startingAnimations() {
  animationsZoom();
  animationFadeLeft();
  animationFadeRight();
  animationsProgress();
  animationFadeTop();
}

startingAnimations();
window.onscroll = startingAnimations;
