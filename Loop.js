// Question 1: Write a for loop in JavaScript that prints the numbers from 1 to 10.
console.log("Question 1")

for ( i = 1; i <= 10; i++)
{
    console.log(i)
}

console.log("\n")


// Question 2: Write a for loop in JavaScript that prints the even numbers from 2 to 20.
console.log("Question 2")

for ( i = 1; i <= 20; i++)
{
    if(i%2 == 0)
     console.log(i)
}

console.log("\n")


// Question 3: Write a while loop in JavaScript that calculates the sum of all integers from 1 to 100.
console.log("Question 3")

let x = 0
let sum = 0
while ( x <= 100)
{
    sum += x;
    x++
}
 console.log(`The sum is ${sum}`)
console.log("\n")


// Question 4 🌶️🌶️🌶️: Write a for loop in JavaScript that iterates through an array of numbers and calculates their sum.
console.log("Question 4")
let y = [1,4,5,5,15] //sum is 30
let total = 0 

for (i = 0; i <= y.length-1 ; i++)
{
     total += y[i];
}

console.log(`The sum is ${total}`)

console.log("\n")