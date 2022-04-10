// '1,2,3,4' => {low:1, high:4, average:2.25, evens:[2,4], odds:[1,3]}

// '1,2,3,4' -> [1,2,3,4]
const convertNumStringToNums = (numberStr) => {
  //1. convert str to an array of numbers
  let numbersStringArray = numberStr.split(",");
  // [ '1', '2', '3', '4' ] => [1,2,3,4]
  let numbers = numbersStringArray.map((numberString) => {
    return parseInt(numberString);
  });
  return numbers;
};

// write a function that takes an array of numbers and finds the lowest
const findLowest = (numbers) => {
  // reduce
  return numbers.reduce((lowest, number) => {
    return number < lowest ? number : lowest;
  });
};

// write a function that takes an array of numbers and finds the lowest
const findHighest = (numbers) => {
  // forEach
  let highest = numbers[0];
  numbers.forEach((number) => {
    //compare
    if (number > highest) {
      highest = number;
    }
  });
  return highest;
};

const findAverage = (numbers) => {
//   // forEach
//   let sum = 0;
//   numbers.forEach((number) => {
//     sum += number;
//   });
//   return sum / numbers.length;

  // reduce
  let sum = numbers.reduce((sumAcumm, number) => {
    return sumAcumm + number
  },0);
  return sum / numbers.length;
};

const findEvens = (numbers)=>{
   return numbers.filter((num)=> num%2 ==0)
}

const findOdds = (numbers)=>{
    // should use filter, but example with reduce
    return numbers.reduce((oddsAcumm,num)=> {
        if(num %2 !== 0){
            oddsAcumm.push(num)
        }
        return oddsAcumm
    },[])
 }

 console.log(findOdds([1,2,3,4]))


const numberInfo = (numberStr) => {
  //1. convert str to an array of numbers
  let numbers = convertNumStringToNums(numberStr);
  //2. find lowest
  let low = findLowest(numbers);
  //3. find highest1
  let high = findHighest(numbers);
  //4. find average
  let average = findAverage(numbers);
  //5. find evens
  let evens = findEvens(numbers)
  //6. find odds
  let odds = findOdds(numbers)
  //7. combining results into object {low high average evens:[2,4], odds:[1,3]}
  console.log(numbers);
  return { low, high, average, evens, odds };
};

let info = numberInfo("1,2,3,4"); // => {low:1, high:4, average:2.5, evens:[2,4], odds:[1,3]}
console.log(info);