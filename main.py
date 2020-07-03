def on_button_pressed_a():
    Kitronik_Robotics_Board.motor_on(Kitronik_Robotics_Board.Motors.MOTOR1,
        Kitronik_Robotics_Board.MotorDirection.FORWARD,
        35)
    Kitronik_Robotics_Board.motor_on(Kitronik_Robotics_Board.Motors.MOTOR2,
        Kitronik_Robotics_Board.MotorDirection.FORWARD,
        26)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    Kitronik_Robotics_Board.motor_off(Kitronik_Robotics_Board.Motors.MOTOR1)
    Kitronik_Robotics_Board.motor_off(Kitronik_Robotics_Board.Motors.MOTOR2)
    Kitronik_Robotics_Board.servo_write(Kitronik_Robotics_Board.Servos.SERVO1, 180)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    pass
basic.forever(on_forever)
