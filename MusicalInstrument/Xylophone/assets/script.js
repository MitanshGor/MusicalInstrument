dict={
    "bar1":"red",
    "bar2":"orange",
    "bar3":"yellow",
    "bar4":"green",
    "bar5":"blue",
    "bar6":"dBlue",
    "bar7":"purple",
    "bar8":"pink"
}
function playSound(id)
{
    // console.log(id)
    document.getElementById("audio").setAttribute('src', "assets\\audios\\"+dict[id]+".wav");
    
    document.getElementById("audio").play();
    // console.log("Playing")
}