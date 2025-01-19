let mkc = gsap.timeline();

mkc.from(".logo", {
    y:-20,
    opacity:0,
    delay: 0,
    duration:0.5,
})
mkc.from(".nav-link", {
    y:-20,
    opacity:0,
    duration:0.5,
    stagger:0.3,
})
