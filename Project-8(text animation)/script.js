var head = document.querySelector("h1");

var text = head.textContent;


var splittedText = text.split("")
var length = splittedText.length
var half = Math.floor(length / 2)

var store = "";

splittedText.forEach(function (element, index) {
    if (index < half) {
        store += `<span class="left">${element}</span>`
    }
    else {
        store += `<span class="right">${element}</span>`
    }
});

head.innerHTML = store;

gsap.from(".left", {
    y:100,
    opacity:0,
    stagger:0.3,
    duration:1,
    delay:0.6,
})
gsap.from(".right", {
    y:100,
    opacity:0,
    stagger:-0.3,
    duration:1,
    delay:0.6,
})