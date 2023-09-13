
// Question 1: Write JavaScript code to declare an empty array named myArray.

let myArray = []

/* Question 2: In JavaScript, how do you add 
the elements "apple," "banana," and "cherry" 
to the end of the array **`myArray`**?
 */

console.log("Question 2")
myArray.push("Apple", "Banana", "Cherry")
console.log(myArray)
console.log("\n")

// Question 3: Write JavaScript code to print the first element of the array myArray.
console.log("Question 3")
console.log(`The first element is: ${myArray[0]}`)
console.log("\n")

// Question 4: Write JavaScript code to print the last element of the array myArray.
console.log("Question 4")
console.log(`The last element is: ${myArray[myArray.length -1]}`)
console.log("\n")

// Question 5: In JavaScript, how do you add "mango" to the beginning of the array myArray?
console.log("Question 5")
myArray.unshift("Mango")
console.log(myArray)
console.log("\n")

// Question 6: Write JavaScript code to remove the last element from the array myArray.
console.log("Question 6")
myArray.pop()
console.log(myArray)
console.log("\n")


/* Question 7: Given an array const numbers = [5, 10, 15, 20, 25],
 Write JavaScript code to delete the element at index 2 
 and update the array accordingly.
*/
console.log("Question 7")
let Numbers = [5, 10, 15, 20, 25]
Numbers.splice(2,1)
console.log(Numbers)
console.log("\n")


/* Question 8: Write a JavaScript function that takes an array 
as a parameter and returns its length.
*/

console.log("Question 8")
function length(x)
{
    return x.length;
}

console.log(`The length of the array is ${length(Numbers)}`)
console.log("\n")

/* Question 9 🌶️: Given the array const temperatures = [72, 68, 74, 80, 76]
, write JavaScript code to find the highest temperature (the maximum value) in the array.
*/
console.log("Question 9")
let Temp = [72, 68, 74, 80, 76, 90]
let max = Math.max.apply(0, Temp)
console.log(`The highest temperature is: ${max}`)
console.log("\n")

/*
Question 10 🌶️🌶️: Write JavaScript code to check if the element "banana" exists in the array 
myArray and return true if it does, otherwise, return false.
*/
console.log("Question 10")
let x = myArray.indexOf("Banana")

if(x != -1)
{
  console.log(`Element exist
  And its index is ${x}`)
}
else console.log("Element not exist")