basic.forever(function () {
    if (input.temperature() > 22) {
        music.playTone(349, music.beat(BeatFraction.Whole))
        basic.pause(100)
        basic.showIcon(IconNames.Heart)
        basic.clearScreen()
    }
})
