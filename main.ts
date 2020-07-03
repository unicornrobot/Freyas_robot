input.onButtonPressed(Button.A, function () {
    Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, 35)
    Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Forward, 26)
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo2, 90)
})
input.onButtonPressed(Button.B, function () {
    Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor1)
    Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor2)
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo3, 120)
})
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 65)
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo2, 100)
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo3, 0)
