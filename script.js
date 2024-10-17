setTimeout(slide_2, 1000)
gsap.to(".about", {x: 250, duration: 2.2});
gsap.to(".slide-1", {y: -95, duration: 2.2});

function slide_2 () {
    gsap.to(".slide-2", {y: -25, duration: 1});
}
