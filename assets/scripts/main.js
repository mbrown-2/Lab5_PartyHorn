// Implement connection between sound slider and input field.
document.getElementById("volume-number").onchange = function() {
    document.getElementById("volume-slider").value = this.value;
    noisePic("volume-number");
}
    
document.getElementById("volume-slider").onchange = function() {
    document.getElementById("volume-number").value = this.value;
    noisePic("volume-slider");
}

// Function to change noise level picture.
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

// Change center picture.
document.getElementById("radio-air-horn-container").onclick = function() {
    mainPic("radio-air-horn-container");
}
document.getElementById("radio-car-horn-container").onclick = function() {
    mainPic("radio-car-horn-container");

}
document.getElementById("radio-party-horn-container").onclick = function() {
    mainPic("radio-party-horn-container");
}

function mainPic(id) {
    var picture = document.getElementById("sound-image");
    if (id == "radio-air-horn-container") {
        picture.src = "./assets/media/images/air-horn.svg";
    }
    else if (id == "radio-car-horn-container") {
        picture.src = "./assets/media/images/car.svg";
    }
    else {
        picture.src = "./assets/media/images/party-horn.svg";
    }
}

// Play the sounds.

