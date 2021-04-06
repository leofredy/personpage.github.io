gsap.registerPlugin(MotionPathPlugin);

function gsapAnimations() {
  const documentHTML = document.querySelector("html"),
        loadingPage = document.querySelector(".loading"),
        listCircle = document.querySelectorAll(".circle"),
        header = document.querySelector("header .container"),
        logo = document.querySelector(".logo"),
        navs = document.querySelectorAll(".menu li"),
        carousel = document.querySelector(".carousel")


  const t1 = gsap.timeline({duration: 0.7});
  const t2 = gsap.timeline({repeat: -1, yoyo: true});

  t1.add("start")
    .from(documentHTML, {delay: 3, overflow: "hidden"})
    .to(loadingPage, {delay: 3, width: 0}, "start")
    .from(header, {
      opacity: 0,
      x: -700
    })
    .from(carousel, {
      opacity: 0,
      y: -100
    })
    .from(logo, {
      opacity: 0,
      y: -100
    })
    .from(navs, {
      opacity: 0, 
      y: -100,
      stagger: "0.1"
    })

  t2.staggerFromTo(listCircle, 1, {
      opacity: 0,
      scale: .1,
    },
    {
      opacity: 1,
      scale: 1,
      stagger: "0.1",
      motionPath: {
        path: [
          { x:  -50, y: -50 }, // P1
          { x: -100, y:   0 }, // P2
          { x:  -50, y:  50 }, // P3
          { x:   50, y: -50 }, // P4
          { x:  100, y:   0 }, // P5
          { x:   50, y:  50 }, // P6
          { x:    0, y:   0 }  // P7
        ],
      }
    }); 
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
window.addEventListener("DOMContentLoaded", () => {
  gsapAnimations();
});