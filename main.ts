radio.setGroup(205)
function connectionTest(){
    music.playTone(Note.C, 500)
    radio.sendNumber(input.runningTime())
}
input.onButtonPressed(Button.A, function() {
   connectionTest()
})
Sensors.SetLightLevel()

function runStart(){
    music.playTone(Note.A, 500)
    radio.sendValue("time", input.runningTime())
}

Sensors.OnLightDrop(function() {
    runStart()
})