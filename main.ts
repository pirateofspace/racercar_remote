let pitch = 0
let power = 0
basic.forever(function () {
    pitch = input.rotation(Rotation.Roll)
    power = pitch / 90
    power = power * 100
    if (power > 100) {
        power = 100
    } else if (power < -100) {
        power = -100
    }
    basic.showString("" + (power))
})
