dict = {
    "hole1": "red",
    "hole2": "orange",
    "hole3": "yellow",
    "hole4": "green",
    "hole5": "blue",
    "hole6": "dBlue",
    "hole7": "purple",
    "hole8": "pink"
}

function playSound(id) {
    document.getElementById("audio").setAttribute('src', "assets\\audios\\" + dict[id] + ".wav");
    document.getElementById("audio").play();
}