function controlLeds() {
    if (power > 0 && power <= 10) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
    } else if (power > 10 && power < 25) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # . . .
            # # . . .
            `)
    } else if (power > 25 && power <= 50) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # . .
            # # # . .
            `)
    } else if (power > 50 && power <= 75) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . # # .
            . # # # .
            # # # # .
            `)
    } else if (power > 75 && power <= 100) {
        basic.showLeds(`
            . . . . #
            . . . # #
            . . # # #
            . # # # #
            # # # # #
            `)
    } else if (power < 0 && power >= -10) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `)
    } else if (power < -10 && power >= -25) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . # .
            . . . # #
            `)
    } else if (power < -25 && power >= -50) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . # # .
            . . # # #
            `)
    } else if (power < -50 && power >= -75) {
        basic.showLeds(`
            . . . . .
            . # . . .
            . # # . .
            . # # # .
            . # # # #
            `)
    } else if (power < -75 && power >= -100) {
        basic.showLeds(`
            # . . . .
            # # . . .
            # # # . .
            # # # # .
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
    
}

function compute_power_value() {
    
    pitch = input.rotation(Rotation.Roll)
    power = pitch / 90
    power = power * 100
    power = power * -1
    if (power > 100) {
        power = 100
    } else if (power < -100) {
        power = -100
    }
    
}

let pitch = 0
let power = 0
radio.setGroup(138)
let msg_send = 0
basic.forever(function on_forever() {
    
    compute_power_value()
    controlLeds()
    radio.sendNumber(power)
    msg_send += 1
    basic.showString("" + ("" + msg_send))
    control.waitMicros(2500)
})
