/**

- isArrayLengthOdd(numbers):
- receives array `numbers`
- returns true if array has an odd number of elements
- returns false otherwise
- 
- e.g.
- isArrayLengthOdd([1, 2, 3]) -> true
- isArrayLengthOdd([1, 2, 3, 4]) -> flase
*/

console.log("Question 1")
 function isArrayLengthOdd(numbers) 
    {
    // Your code here
    let l = numbers.length

    if (l%2 == 0)
     return false;
    else 
     return true;
    }
console.log(isArrayLengthOdd([1,2,3,4]))
console.log("\n")
    
    /**
    - isArrayLengthEven(numbers):
    - receives array `numbers`
    - returns true if array has an even number of elements
    - returns false otherwise
    - 
    - e.g.
    - isArrayLengthEven([1, 2, 3]) -> false
    - isArrayLengthEven([1, 2, 3, 4]) -> true
    */
console.log("Question 2")
 function isArrayLengthEven(numbers) 
    {
    // Your code here
    let l = numbers.length

    if (l%2 == 0)
     return true;
    else 
     return false;
    }
console.log(isArrayLengthEven([1,2,3,4]))
console.log("\n")
    

    /**
    - addLailaToArray(instructors):
    - receives array `instructors`
    - returns a new array that's a copy of array `instructors` with additional string "Laila"
    - 
    - e.g.
    - addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
    */
console.log("Question 3")
 function addLailaToArray(instructors) 
    {
    // Your code here
     let x = instructors
      x.push("Laila")
      return x;
    }
console.log(addLailaToArray(["Ghaalia", "Fatma"]))
console.log("\n")

    
    /**
    - eliminateTeam(teams):
    - receives array `teams`
    - removes the last element from the array and return it
    - 
    - e.g.
    - eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
    */
console.log("Question 4")
 function eliminateTeam(teams) 
    {
    // Your code here
      teams.pop()
      return teams;
    }
console.log(eliminateTeam(["Brazil", "Germany", "Italy"]))
console.log("\n")
    
    /**
    - secondHalfOfArrayIfItIsEven(fruits):
    - receives array `fruits`
    - returns a new array that's the second half of the original array if it has an even number of elements
    - returns an empty array if it has an odd number of elements
    - 
    - e.g.
    - secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
    - secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
    🌶️🌶️🌶️
    */
console.log("Question 5")
 function secondHalfOfArrayIfItIsEven(fruits) 
    {
    // Your code here
    let x = fruits.length
    let y = []

    if(x%2 == 0)
    {
        let y = fruits.slice(Math.floor(x/2))
        return y;
    }
    else return y;

    }
console.log(secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]))
console.log(secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]))
console.log("\n")

    /**
    - youGottaCalmDown(shout):
    - receives a string `shout`
    - returns the string `shout` with at most one exclamation mark (!) at the end.
    - 
    - e.g.
    - youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
    - youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!") -> "Taylor Shwifting!"
    - youGottaCalmDown("Hellooooo") -> "Hellooooo"
    - 
    - Hint:
    - Use number method .indexOf()
    - Use string method .slice()
    🌶️🌶️🌶️
    */
console.log("Question 6")
 function youGottaCalmDown(shout) 
    {
    // Your code here
    let x = shout.replace(/!+$/, "!")
    return x;
    }
console.log(youGottaCalmDown("Hello!!!!!!!!!!"))
console.log(youGottaCalmDown("Hellooooo"))
console.log("\n")