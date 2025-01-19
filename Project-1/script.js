gsap.to("#box-1", {
    x:1400,
    duration:2,
    delay:1,
    rotate:360,
    backgroundColor: "rgb(55, 255, 0)",
    borderRadius: "50%",
})

gsap.to("#box-2", {
    y:500,
    duration:2,
    delay:1,
    rotate:360,
    backgroundColor: "blue",
    borderRadius: "50%", 
})
gsap.to(".fuck", {
    duration:2,
    delay:1,
    visibility: "hidden"
})

gsap.to(".you", {
    duration:2,
    delay:1,
    visibility: "visible"
})