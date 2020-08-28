function set_robot_arm () {
    robotbit.GeekServo(robotbit.Servos.S1, 60 + (klo_pos - arm_pos))
    robotbit.GeekServo(robotbit.Servos.S2, arm_pos - 30)
}
let arm_pos = 0
let klo_pos = 0
let delaytime = 5
let arm_max = 90
let klo_max = 90
klo_pos = 0
set_robot_arm()
basic.forever(function () {
    for (let index = 0; index <= arm_max; index++) {
        arm_pos = index
        basic.pause(delaytime)
        set_robot_arm()
    }
    for (let index = 0; index <= klo_max; index++) {
        klo_pos = klo_max - index
        basic.pause(delaytime)
        set_robot_arm()
    }
    for (let index = 0; index <= arm_max; index++) {
        arm_pos = arm_max - index
        basic.pause(delaytime)
        set_robot_arm()
    }
    for (let index = 0; index <= klo_max; index++) {
        klo_pos = index
        basic.pause(delaytime)
        set_robot_arm()
    }
})
