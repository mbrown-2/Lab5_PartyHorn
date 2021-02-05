// main.js

// TODO

// Wtf am i supposed to do?


// 1) input field for textual indicator of sound level

// 2) Slider that serves visual controlller

// 3) Volume icon that changes depending on sound level



// Implement connection between sound slider and input field.
document.getElementById("volume-number").onchange = function() {
    document.getElementById("volume-slider").value = this.value;
    noisePic();
}
    
document.getElementById("volume-slider").onchange = function() {
    document.getElementById("volume-number").value = this.value;
    noisePic();
}

noisePic() {
    var volPic = document.getElementById("volume-image");
    if (this.value == 0) {
        volPic.src = "./assets/media/icons/volume-level-0.svg";
    }
    else if (this.value >= 1 && this.value <= 33) {
        volPic.src = "./assets/media/icons/volume-level-1.svg";
    }
    else if (this.value >= 34 && this.value <= 66) {
        volPic.src = "./assets/media/icons/volume-level-2.svg";
    }
    else {
        volPic.src = "./assets/media/icons/volume-level-3.svg";
    }
}

// Change volume icon depending on sound level.

// level 3 = 67-100
// level 2 = 66-34
// level 1 = 33-0


// Use event-listener for pressing button at end
