
dict={

    "btnBlack1":"A_3",
    "btnBlack2":"A_4",
    "btnBlack3":"A_5",
    "btnBlack4":"C_3",
    "btnBlack5":"C_4",
    "btnBlack6":"C_5",
    "btnBlack7":"D_3",
    "btnBlack8":"D_4",
    "btnBlack9":"D_5",
    "btnBlack10":"F_3",
    "btnBlack11":"F_4",
    "btnBlack12":"F_5",
    "btnBlack13":"G_3",
    "btnBlack14":"G_5",
    "btnBlack15":"G3",


    "btnWhite1":"A3",
    "btnWhite2":"A4",
    "btnWhite3":"A5",
    "btnWhite4":"B3",
    "btnWhite5":"B4",
    "btnWhite6":"B5",
    "btnWhite7":"C3",
    "btnWhite8":"C4",
    "btnWhite9":"C5",
    "btnWhite10":"C6",
    "btnWhite11":"D3",
    "btnWhite12":"D4",
    "btnWhite13":"D5",
    "btnWhite14":"E3",
    "btnWhite15":"E4",
    "btnWhite16":"E5",
    "btnWhite17":"F3",
    "btnWhite18":"F4",
    "btnWhite19":"F5",
    "btnWhite20":"G4",
    "btnWhite21":"G5"

}
function playSound(id)
{
    console.log(id)
    document.getElementById("audio").setAttribute('src', "assets\\audios\\"+dict[id]+".mp3");
    
    document.getElementById("audio").play();
    console.log("Playing")
}