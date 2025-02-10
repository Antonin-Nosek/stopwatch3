radio.setGroup(158)

function connectionTest(){
    music.playTone(Note.C, 500)
    radio.sendNumber(input.runningTime())
}
input.onButtonPressed(Button.A, function() {
   connectionTest()
})

Sensors.SetLightLevel()

function runStart(){
    radio.sendValue("start", 1)
    music.playTone(Note.A, 500)
}

Sensors.OnLightDrop(function() {
    runStart()
})

radio.onReceivedNumber(function (receivedNumber: number){
    music.playTone(Note.D, 200)
    basic.showNumber(receivedNumber)
})