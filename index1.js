//add an event listener to every single button use same function as an output
//Using Javascript
let numberOfDrums = document.querySelectorAll(".drum").length;

for (let index = 0; index < numberOfDrums; index++) {

    document.querySelectorAll("button")[index].addEventListener("click", function(){

    let buttonInnerHTML = this.innerHTML;
    playsound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    });     
}

document.addEventListener("keydown", function(event) {

    playsound(event.key);
    buttonAnimation(event.key);
});

function playsound(key) {
   
    if(key ==  "w" || key == "W" ) {
        sound = "/sounds/tom-1.mp3";
    }else if (key == "a" || key == "A"){
        sound = "/sounds/tom-2.mp3";
    }else if (key == "s" || key == "S"){
        sound = "/sounds/tom-3.mp3";
    }else if (key == "d" || key == "D"){
        sound = "/sounds/tom-4.mp3";
    }else if (key == "j" || key == "J"){
        sound = "/sounds/snare.mp3";
    }else if (key == "k" || key == "K"){
        sound = "/sounds/crash.mp3";
    }else if (key == "l" || key == "L"){
        sound = "/sounds/kick-bass.mp3";
    }

    
    audioToBePlayed = new Audio(sound);
    audioToBePlayed.play();

}

function buttonAnimation(currentKey){
    let activebutton = document.querySelector("." + currentKey);
    activebutton.classList.add("pressed");

    setTimeout (function(){
        activebutton.classList.remove("pressed");
    }, 100)

}

//Using Jquery
