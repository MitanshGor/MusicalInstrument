/*const strings = document.querySelector('.strings')
//Sounds
const everyString = [g, c, e, a]
const indexCorrection = [,1,,2,,3,,4]*/
const sounds = {"1":'g', "2":'c', "3":'e', "4":'a'}


/*strings.childNodes.forEach((node, index) => node.addEventListener('click', () => {
    stopSongs()
    const newIndex = index - indexCorrection[index]
    const sound = "assets/audio/"+sounds[newIndex]+".mp3"
    document.getElementById(sound).play()
}))*/

function play(id) {
       // console.log(id)
       try {
       document.getElementById("audio").setAttribute('src', "assets\\audio\\"+sounds[id]+".mp3");
    
       document.getElementById("audio").play();
       }
       catch (err) {
           console.log(err);
       }
       // console.log("Playing")
}
/*function stopSongs() {
    sounds.forEach(sound => {
        const audio = document.getElementById(sound)

        audio.pause()
        audio.currentTime = 0
    })
}*/