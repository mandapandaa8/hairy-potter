//& define a variable (let____) to have the value of primary
    //& key for each piece of pottery(primary id value)
        //& should have an ****initial value of 1

let pieceOfPottery = 1

//& define and export a function named (const) makePottery
    //& must accept the following values as input - aka parameters
        //& SHAPE, WEIGHT, HEIGHT

export const makePottery = (shapeValue, weightValue, heightValue) => {
    let piece = {

//& return an object with the properties of SHAPE, WEIGHT, HEIGHT, ID

shape: shapeValue,
weight: weightValue,
height: heightValue,
id: pieceOfPottery,

}

//& ID +1 with each invoke

    pieceOfPottery = pieceOfPottery + 1
    return piece

}

