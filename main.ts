//start
radio.setGroup(158)
let lock: boolean = false

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
    if (!lock){
        lock = true
        runStart()
    }
})

input.onButtonPressed(Button.B, function () {
    if (lock){
        lock = false
        radio.sendString("unlock")
        music.playTone(Note.D, 300)
    }
})

radio.onReceivedNumber(function (receivedNumber: number){
    music.playTone(Note.D, 200)
    basic.showNumber(receivedNumber/1000)
})

