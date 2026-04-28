input.onButtonPressed(Button.A, function () {
    basic.showString("Nasser Al-Harbi")
})
input.onGesture(Gesture.Shake, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("N")
})
