var Path = "M 0 200 Q 700 200 1520 200";

var finalPath = "M 0 200 Q 700 200 1520 200";

var string = document.querySelector(".string");

string.addEventListener("mouseenter", function(dets) {
    console.log(dets)
})

string.addEventListener("mouseleave", function() {
    console.log("Mouse Left")
})

string.addEventListener("mousemove", function(dets) {
    Path = `M 0 200 Q ${dets.x} ${dets.y} 1520 200`;
    gsap.to("svg path", {
        attr: {
            d:Path
        },
        duration:0.1,
        ease: "power3.out"
    })
    console.log(Path)
})

string.addEventListener("mouseleave", function(dets){
    gsap.to("svg path", {
        attr: {d:finalPath},
        duration:0.5,
        ease: "elastic.out(1, 0.2)"
    })
})