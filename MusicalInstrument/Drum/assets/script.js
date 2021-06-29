dict={
    "Circle":"CenterDrum",
    "LRingPlay":"LeftDish",
    "Box":"LeftSubDrum",
    "RRingPlay":"RightDish",
    "BoxLow":"RightSubBottomCrum",
    "BoxHigh":"RightSubTopDrum",
}
function playSound(id)
{
    // console.log(id)
    document.getElementById("audio").setAttribute('src', "assets\\audios\\"+dict[id]+".mp3");
    
    document.getElementById("audio").play();
    // console.log("Playing")
}