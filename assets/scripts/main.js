// main.js

// TODO

// Wtf am i supposed to do?


// 1) input field for textual indicator of sound level

// 2) Slider that serves visual controlller

// 3) Volume icon that changes depending on sound level



// Implement connection between sound slider and input field.
document.getElementById("volume-number").onchange = function() {
    document.getElementById("volume-slider").value = this.value;
    noisePic("volume-number");
}
    
document.getElementById("volume-slider").onchange = function() {
    document.getElementById("volume-number").value = this.value;
    noisePic("volume-slider");
}

function noisePic(id) {
    var volPic = document.getElementById(id);
    var source = document.getElementById("volume-image");
    if (volPic.value == 0) {
        source.src = "./assets/media/icons/volume-level-0.svg";
    }
    else if (volPic.value >= 1 && volPic.value <= 33) {
        source.src = "./assets/media/icons/volume-level-1.svg";
    }
    else if (volPic.value >= 34 && volPic.value <= 66) {
        source.src = "./assets/media/icons/volume-level-2.svg";
    }
    else {
        source.src = "./assets/media/icons/volume-level-3.svg";
    }
}

// Change volume icon depending on sound level.

// level 3 = 67-100
// level 2 = 66-34
// level 1 = 33-0


// Use event-listener for pressing button at end
