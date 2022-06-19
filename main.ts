let pitch = 0
let power = 0
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
basic.forever(function () {
    compute_power_value()
    radio.setGroup(138)
    radio.sendNumber(power)
})
