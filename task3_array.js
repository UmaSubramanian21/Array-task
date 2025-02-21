// <!-- // week 5 - task 3 / 4

// // Create an array and assign string values
// // You should check whether the given string is available in the array or not before adding it
// // Print the array in alphabetical order
// // print the array length -->

// to initialize prompt 
var prompt = require("prompt-sync")()

console.log("Enter color : ")
var user_input = prompt()

console.log('-------------------------------------------------------------')
// array creation
var color = ["red", "blue", "violet","pink","maroon","yellow"]
console.log("Array : ", color)
console.log('-------------------------------------------------------------')



function colors_array(user_input) {
    if (color.includes(user_input)) {
        console.log("Already exists")
        console.log('-------------------------------------------------------------')

    }
    else {
        color.push(user_input)
    }
    color.sort() // for alphabetical order
    console.log("Array : ", color)
    console.log('-------------------------------------------------------------')
    console.log("Array length :", color.length)
    console.log('-------------------------------------------------------------')

}

colors_array(user_input)