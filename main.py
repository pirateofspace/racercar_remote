def controlLeds():
    if power > 0 and power <= 10:
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            """)
    elif power > 10 and power < 25:
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . # . . .
            # # . . .
            """)
    elif power > 25 and power <= 50:
        basic.show_leds("""
            . . . . .
            . . . . .
            . . # . .
            . # # . .
            # # # . .
            """)
    elif power > 50 and power <= 75:
        basic.show_leds("""
            . . . . .
            . . . # .
            . . # # .
            . # # # .
            # # # # .
            """)
    elif power > 75 and power <= 100:
        basic.show_leds("""
            . . . . #
            . . . # #
            . . # # #
            . # # # #
            # # # # #
            """)
    elif power < 0 and power >= -10:
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            """)
    elif power < -10 and power >= -25:
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . # .
            . . . # #
            """)
    elif power < -25 and power >= -50:
        basic.show_leds("""
            . . . . .
            . . . . .
            . . # . .
            . . # # .
            . . # # #
            """)
    elif power < -50 and power >= -75:
        basic.show_leds("""
            . . . . .
            . # . . .
            . # # . .
            . # # # .
            . # # # #
            """)
    elif power < -75 and power >= -100:
        basic.show_leds("""
            # . . . .
            # # . . .
            # # # . .
            # # # # .
            # # # # #
            """)
    else:
        basic.show_leds("""
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            """)
def compute_power_value():
    global pitch, power
    pitch = input.rotation(Rotation.ROLL)
    power = pitch / 90
    power = power * 100
    power = power * -1
    if power > 100:
        power = 100
    elif power < -100:
        power = -100
pitch = 0
power = 0
radio.set_group(138)
msg_send = 0

def on_forever():
    global msg_send
    compute_power_value()
    controlLeds()
    radio.send_number(power)
    msg_send += 1
    basic.show_string("" + str((msg_send)))
    control.wait_micros(2500)
basic.forever(on_forever)
