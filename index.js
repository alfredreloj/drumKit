//add an event listener to every single button use same function as an output
//Using Javascript and jquery

$("button").click(function (event) { 
    playsound(this.innerHTML);
    buttonAnimation(this.innerHTML);
});

$(document).keydown(function (event) {
    console.log(event.key.toLowerCase());
    playsound(event.key.toLowerCase());
    buttonAnimation(event.key.toLowerCase());
});

function playsound(key) {
   
    if(key ==  "w" ) {
        sound = "/sounds/tom-1.mp3";
        playNow();
    }else if (key == "a" ){
        sound = "/sounds/tom-2.mp3";
        playNow();
    }else if (key == "s" ){
        sound = "/sounds/tom-3.mp3";
        playNow();
    }else if (key == "d" ){
        sound = "/sounds/tom-4.mp3";
        playNow();
    }else if (key == "j" ){
        sound = "/sounds/snare.mp3";
        playNow();
    }else if (key == "k" ){
        sound = "/sounds/crash.mp3";
        playNow();
    }else if (key == "l" ){
        sound = "/sounds/kick-bass.mp3";
        playNow();
    }
  
    function playNow() {
        audioToBePlayed = new Audio(sound);
        audioToBePlayed.play(); 
    }
}

function buttonAnimation(currentKey){
    let activebutton = $("." + currentKey);
    activebutton.addClass("pressed");

    setTimeout (function(){
        activebutton.removeClass("pressed");
    }, 100)
}