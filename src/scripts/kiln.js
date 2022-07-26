//& define and export a function named firePottery
    //& responsible for acting as a kiln
    //& must accept parameter inputs of:
        //& i. an object representing a piece of pottery
            //& that was made at the wheel in the makePottery function
        //& ii. a number specifying the firing temp of kiln
    //& function must add a new property of .fired
        //& with the value of true to the object
    //& function must add new property of .cracked
        //& i. if temp of kil is >(greater) 2200 degrees cracked = true
        //& ii. if temp of kiln is <=(less and equal) 2200 cracked = false
    //& after broth new properties are added, return the augmented object

import { makePottery } from "./PotteryWheel.js"

 export let firePottery = (potteryObject, temp) => {
            potteryObject.fired = true
                if (temp > 2200) {
                    potteryObject.cracked = true
                }
                else {
                    potteryObject.cracked = false
                }
        return potteryObject
    }


