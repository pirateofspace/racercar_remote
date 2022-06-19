pitch = 0

def on_forever():
    global pitch
    pitch = input.rotation(Rotation.ROLL)
    basic.show_string("" + str((pitch)))
basic.forever(on_forever)
