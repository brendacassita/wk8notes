// 'asdfasdfasdf' => {a:4, s:2 d:3}
// converting string to array of characters
// setup my reduce function
// now do the work in the reduce function
// ['a','b','d','d'] => {a:1, b:1 d:2}

// ForEach: 
// [x,x,x] => undefined

// Filter: filters
// [x,x,x] => [x,x]

// Map: transforms
// [x,x,x] => [y,y,y]

// Find: finds 1 thing returns on first match
// [x,x,x] => x || null

// Reduce: 
// [x,x,x] => whateveryouwant

// Every: 
// [x,x,x] =>  true||false


// reduce, forEach(* extra), map(* work)

// 'the world is is is flat' => {the:1, is:3 flat:1}

// let str = 'abcd'

// for(let i = 0; i<str.length; i++){
//     console.log(str[i])
// } 



let random = 'aabasdfasdjfalksdjf;laksjdf;lakjsdlkfjasdfausdyfiuyasdfhaklsdhfklajshdfkljahsdkjlfhaskldjfhaklcc'
let random1 = 'hello yo yo yo this is is message'
let charArray = random.split('').filter(c => c !=='')

// let charArray = random.split('').map(c => c ===' ' ? 'empty': c )
console.log(charArray)
console.log('===reducing===')
let finalValue = charArray.reduce((charCounter, char)=>{
    // console.log('charCounter:', charCounter)
    // console.log('char:', char)
    // What to do here?? count 1 char, handle one char
    // check is char in my charCounter
    if(charCounter[char]){
        // I have char in charCounter
        charCounter[char]++
    } else {
         // I dont have char in charCounter
         charCounter[char] = 1
    }
    return charCounter
}, {})

console.log(finalValue)