servos.P1.setRange(10, 170)
basic.forever(function () {
    servos.P1.setAngle(pins.analogReadPin(AnalogPin.P0))
})
