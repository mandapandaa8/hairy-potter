// Imports go first

import { makePottery } from './PotteryWheel.js'
import { firePottery } from './kiln.js'
import { toSellOrNotToSell, usePottery } from "./PotteryCatalog.js"


//& invoke makePottery function and provide required values as arguments
    //& store the object that gets returned into a variable
    //& use console.log() to view the object


// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 3, 4)
//console.log(mug)
let plate = makePottery("plate", 8, 6)
//console.log(plate)
let bowl = makePottery("bowl", 6, 5)
//console.log(bowl)
let cup = makePottery("cup", 3, 3)
//console.log(cup)
let tray = makePottery("tray", 9, 6)
//console.log(tray)

//& fire each piece by invoking the function, create new variables for fired pieces
//& use the objects made at the pottery wheen for potteryObject and add a temperature

// Fire each piece of pottery in the kiln
let fireMug = firePottery(mug, 1400)
//console.log(fireMug)
let firePlate = firePottery(plate, 2300)
//console.log(firePlate)
let fireBowl = firePottery(bowl, 2600)
//console.log(fireBowl)
let fireCup = firePottery(cup, 1800)
//console.log(fireCup)
let fireTray = firePottery(tray, 2900)
//console.log(fireTray)


//&invoke the toSellOrNotToSell function for each piece

// Determine which ones should be sold, and their price
let sellMug = toSellOrNotToSell(fireMug)
console.log(sellMug)
let sellPlate = toSellOrNotToSell(firePlate)
console.log(sellPlate)
let sellBowl = toSellOrNotToSell(fireBowl)
console.log(sellBowl)
let sellCup = toSellOrNotToSell(fireCup)
console.log(sellCup)
let sellTray = toSellOrNotToSell(fireTray)
console.log(sellTray)

let potteryToSell = usePottery()
console.log(potteryToSell)

// Invoke the component function that renders the HTML list



