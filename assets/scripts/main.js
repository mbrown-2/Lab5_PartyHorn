// main.js

// TODO

// Wtf am i supposed to do?


// 1) input field for textual indicator of sound level

// 2) Slider that serves visual controlller

// 3) Volume icon that changes depending on sound level



// Implement connection between sound slider and input field.
var output = document.getElementById("volume-number");
var slider = document.getElementById("volume-slider");

output.innerHTML = slider.value;
slider.oninput = function() {
    output.innerHTML = this.value;
}

// Implement connection between sound level and image

// level 3 = 67-100
// level 2 = 66-34
// level 1 = 33-0