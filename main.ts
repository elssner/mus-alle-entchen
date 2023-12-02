input.onButtonEvent(Button.A, input.buttonEventValue(ButtonEvent.LongClick), function () {
    basic.showString("Alle meine Entchen")
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    for (let Index = 0; Index <= 1; Index++) {
        basic.showNumber(Index)
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Double))
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(349, music.beat(BeatFraction.Half))
    }
    for (let index = 0; index < 2; index++) {
        music.playTone(330, music.beat(BeatFraction.Whole))
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(392, music.beat(BeatFraction.Half))
    }
    music.playTone(262, music.beat(BeatFraction.Double))
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.showNumber(music.tempo())
    music.changeTempoBy(-10)
})
