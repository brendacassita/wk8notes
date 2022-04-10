// '1,2,3,4' => {low:1, high:4, average:2.25, evens:[2,4], odds:[1,3]}

const numbersInfo = (numbersString)=>{
  // convert to string to array
  let numbers = numbersString.split(',').map( numstr => parseInt(numstr) )
  
  // efficent!
  let x = numbers.reduce((accum, number)=> {
      // odds and evens
      console.log('number:', number)
      console.log('accum:', accum)
      if(number %2==0){
          accum.evens.push(number)
      } else{
          accum.odds.push(number)
      }
      // lowest
      // first thing
      if (!accum.low){
          // first thing
          accum.low = number
          accum.high = number
      }
      if(accum.low > number){
          accum.low = number
      }

      // highest
      if(accum.high < number){
          accum.high = number
      }

      accum.sum += number
      return accum
  },{odds:[], evens:[], sum:0})
  return {low:x.low, high:x.high, average: x.sum/numbers.length, odds:x.odds, evens:x.evens}
}

console.log(numbersInfo('1,2,3,4'))
console.log(numbersInfo('1,1,1,1'))
console.log(numbersInfo('123,123,11,-1'))