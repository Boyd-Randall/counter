input.onPinPressed(TouchPin.P0, function () {
    total += 1
    basic.showNumber(total)
})
function transition () {
    basic.pause(1000)
    basic.clearScreen()
}
input.onButtonPressed(Button.A, function () {
    total += 1
    basic.showNumber(total)
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.AB, function () {
    total = 0
    basic.showNumber(total)
})
input.onButtonPressed(Button.B, function () {
    total += -1
    basic.showNumber(total)
})
input.onPinPressed(TouchPin.P1, function () {
    total += -1
    basic.showNumber(total)
    transition()
})
let total = 0
pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
total = 0
basic.showNumber(total)
