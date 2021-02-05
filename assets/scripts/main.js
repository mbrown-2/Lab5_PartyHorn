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

document.getElementById("radio-air-horn-container").check = function() {
    mainPic("radio-air-horn-container");
}
document.getElementById("radio-car-horn-container").check = function() {
    mainPic("radio-car-horn-container");
}
document.getElementById("radio-party-horn-container").check = function() {
    mainPic("radio-party-horn-container");
}

function mainPic(id) {
    if (id == "radio-air-horn-container") {
        document.getElementById("sound-image").src = "./assets/media/images/air-horn.svg";
    }
    if (id == "radio-car-horn-container") {
        document.getElementById("sound-image").src = "./assets/media/images/car.svg";
    }
    if (id == "radio-party-horn-container") {
        document.getElementById("sound-image").src = "./assets/media/images/party-horn.svg";
    }
}


// Use event-listener for pressing button at end
