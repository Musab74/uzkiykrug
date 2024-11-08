document.querySelector(".w.drum").addEventListener("click",function () {
var audio = new Audio("sounds/snare.mp3");
audio.play();
})

document.querySelector(".a.drum").addEventListener("click",function () {

var audio = new Audio("sounds/crash.mp3");
audio.play();
})

document.querySelector(".s.drum").addEventListener("click",function () {
var audio = new Audio("sounds/kick-bass.mp3");
audio.play();
    
})
    
document.querySelector(".d.drum").addEventListener("click",function () {
var audio = new Audio("sounds/snare.mp3");
audio.play();
})

document.querySelector(".j.drum").addEventListener("click",function () {
var audio = new Audio("sounds/tom-1.mp3");
audio.play();
})
    
document.querySelector(".k.drum").addEventListener("click",function () {
var audio = new Audio("sounds/tom-2.mp3");
audio.play();
})

document.querySelector(".l.drum").addEventListener("click",function () {
var audio = new Audio("sounds/tom-3.mp3");
audio.play();
})
    
document.addEventListener("keypress", function(event){
playSound(event.key)
});

function playSound(key) {

    let audio;
    switch (key) {
        case 'a':
            audio = new Audio('sounds/crash.mp3');
            break;
        case 's':
            audio = new Audio('sounds/kick-bass.mp3');
            break;
        case 'w':
            audio = new Audio('sounds/snare.mp3');
            break;
        case 'd':
            audio = new Audio('sounds/snare.mp3');
            break;
        case 'j':
            audio = new Audio('sounds/tom-1.mp3');
            break;
        case 'k':
            audio = new Audio('sounds/tom-2.mp3');
            break;
        case 'l':
            audio = new Audio('sounds/tom-3.mp3');
            break;
        default:
            return; // If an unsupported key is pressed, do nothing
    }
    audio.play();
}    
    