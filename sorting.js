


const listOfNames = [ 'Henk', 'harry', 'pien' , 'Diva' , "Max" , "Saartje", "Floortje" ]

listOfNames.sort( (itemOne, itemTwo) => {
    // console.log("what is One", itemOne)
    // console.log("what is Two", itemTwo)
    const result = itemOne.localeCompare(itemTwo)

    console.log("what is result", result ,itemOne, itemTwo)
    return result
} )

// listOfNames.sort()

console.log("list???", listOfNames)