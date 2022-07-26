// Imports go first

import { makePottery } from './PotteryWheel.js'
import { firePottery } from './kiln.js'

//& invoke makePottery function and provide required values as arguments
    //& store the object that gets returned into a variable
    //& use console.log() to view the object


// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 3, 4)
console.log(mug)
let plate = makePottery("plate", 4, 6)
console.log(plate)
let bowl = makePottery("bowl", 4, 5)
console.log(bowl)
let cup = makePottery("cup", 3, 3)
console.log(cup)
let tray = makePottery("tray", 6, 6)
console.log(tray)



// Fire each piece of pottery in the kiln
let fireMug = firePottery(mug, 1400)
console.log(fireMug)
let firePlate = firePottery(plate, 2300)
console.log(firePlate)
let fireBowl = firePottery(bowl, 2600)
console.log(fireBowl)
let fireCup = firePottery(cup, 1800)
console.log(fireCup)
let fireTray = firePottery(tray, 2900)
console.log(fireTray)



// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list



