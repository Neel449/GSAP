gsap.from(".top-page h1", {
    x:500,
    opacity:0,
    delay:0.5,
})

gsap.from(".top-page h2", {
    x:-500,
    opacity:0,
    delay:0.5,
})

gsap.from(".page1 .box", {
    scale:0,
    rotate:-360,
    duration:1,
    delay:1,
    scrollTrigger: {
        trigger: ".page1 .box",
        scroller: "body",
        markers: true,
        scrub: true,
        end: "top 20%",
        start: "top 80%"
    }
})

gsap.from(".page2 .box", {
    scale:0,
    rotate:-360,
    duration:1,
    delay:0,
    scrollTrigger: {
        trigger: ".page2 .box",
        scroller: "body",
        start: "top 60%"
    }
})
gsap.from(".page3 .box", {
    scale:0,
    rotate:-360,
    duration:1,
    delay:0,
    scrollTrigger: {
        trigger: ".page3 .box",
        scroller: "body",
        start: "top 60%"
    }
})