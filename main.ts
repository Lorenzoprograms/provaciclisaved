input.onButtonPressed(Button.A, function () {
    for (let X = 0; X <= 5; X++) {
        z = 5
        for (let Y = 0; Y <= 5; Y++) {
            led.plot(X, z)
            z += -1
            basic.pause(100)
        }
    }
})
let z = 0
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.pause(1000)
basic.clearScreen()
