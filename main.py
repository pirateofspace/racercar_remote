pitch = 0
power = 0
def compute_power_value():
    global pitch, power
    pitch = input.rotation(Rotation.ROLL)
    power = pitch / 90
    power = power * 100
    if power > 100:
        power = 100
    elif power < -100:
        power = -100
    basic.show_string("" + str((power)))

def on_forever():
    compute_power_value()
basic.forever(on_forever)
