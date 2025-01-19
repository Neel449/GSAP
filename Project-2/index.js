let mkc = gsap.timeline();

mkc.from(".logo", {
    y:-20,
    opacity:0,
    delay: 0.5,
    duration:0.8,
})
mkc.from(".nav-link", {
    y:-20,
    opacity:0,
    duration:0.8,
    stagger:1,
})
