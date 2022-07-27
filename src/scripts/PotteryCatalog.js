
import { firePottery } from "./kiln.js"

//& define a variable with value of empty array
    //& will store pottery that will be sold

let potteryInventory = []

//& define and export a function named toSellOrNotToSell
    //& responsible for determining if a piece should be sold
        //& must accept potteryObject as input
    //& if weight of potteryObject is >= 6
        //& function must add .price = 40
    //& if weight of potteryObject is less than < 6
        //& function adds .price = 20
            //& if cracked do not add .price
            //& if pottery is NOT cracked, .push object to module-level
                //& potteryInventory to be sold
//& return the potteryObject
//& define and export a function named usePottery
    //& returns a copy of [] potteryInventory
        //& recall which array method creates a copy of the []

export let toSellOrNotToSell = (potteryObject) => {
    console.log(potteryObject)
    //* need to create a for loop that checks if weight is >=6
        //* another loop that checks if cracked, if not then add .price property to potteryObject
            if (potteryObject.weight >= 6) {
                potteryObject.price = 40
            }
            else {
                potteryObject.price = 20
            }
            if (potteryObject.cracked === false) {
                potteryInventory.push(potteryObject)
            }
    return potteryObject
}

export const usePottery = () => {
    return potteryInventory.map(pottery => ({...pottery}))
}

    

