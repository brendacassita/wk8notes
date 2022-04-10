// Brainteaser... This morning for the first 15 minutes of class 
// I want you to work on this brain teaser.
// write a function that takes a string that will be numbers separated by commas. 
//  have this function return the largest number, 
//  the smallest number, the average of all numbers, all odds and all eves.
// something like this:


// '1,2,3,4' => {low:1, high:4, average:2.25, evens:[2,4], odds:[1,3]}




let stringOfNums = '123456789'

let numArray = stringOfNums.split('').filter(num => num !=='')
console.log(numArray)

let smallestNum = Math.min(...stringOfNums)
console.log(smallestNum)

let highestNum = Math.max(...stringOfNums)
console.log(highestNum)

// let average = numArray.reduce((accum, numArray)=>{
//   console.log("accum:", accum)

