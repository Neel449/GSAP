let menu = document.querySelector(".menu");
let closeBtn = document.querySelector(".cross");

var tl = gsap.timeline();
tl.to(".nav", {
    right: "0",
    duration: 0.5,
})
tl.from(".nav-link", {
    opacity: "0",
    x: 100,
    stagger: 0.3,
})
tl.pause();

menu.addEventListener("click", function () {
    tl.play();
})

closeBtn.addEventListener("click", function() {
    tl.reverse();
})



