let width = 0
input.onButtonPressed(Button.A, () => {
    width = width + 100
})
input.onButtonPressed(Button.B, () => {
    width = width - 100
})
basic.forever(() => {
    pins.analogWritePin(AnalogPin.P0, width)
})
