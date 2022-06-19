function controlLeds () {
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
function compute_power_value () {
    pitch = input.rotation(Rotation.Roll)
    power = pitch / 90
    power = power * 100
    if (power > 100) {
        power = 100
    } else if (power < -100) {
        power = -100
    }
    basic.showString("" + (power))
}
let pitch = 0
let power = 0
radio.setGroup(138)
basic.forever(function () {
    compute_power_value()
    radio.sendNumber(power)
})
