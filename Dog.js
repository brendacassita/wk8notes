let willard = {
  name: "Willard",
  age: 1,
  tricks: [
    { name: "sit", skillLevel: 1 },
    { name: "backflip", skillLevel: 10 },
  ],
  owner: { name: "James", address: { state: "James", city: "SLC" } },
};
let skadi = {
  name: "Skadi",
  age: 2,
  tricks: [
    { name: "sit", skillLevel: 9 },
    { name: "bring back", skillLevel: 7 },
  ],
  owner: { name: "Austin", address: { state: "Utah", city: "Clearfield" } },
};
let gilfoyle = {
  name: "gilfoyle",
  age: 12,
  tricks: [
    { name: "barrel roll", skillLevel: 5 },
    { name: "swan dive", skillLevel: 8 },
  ],
  owner: { name: "Joe", address: { state: "UT", city: "Provo" } },
};
let beans = {
  name: "Beans",
  age: 14,
  tricks: [
    { name: "yoga", skillLevel: 2 },
    { name: "bang", skillLevel: 5 },
    { name: "speak", skillLevel: 1 },
  ],
  owner: { name: "Brenda", address: { state: "Nevada", city: "Las Vegas" } },
};
let onyx = {
  name: "Onyx",
  age: 5,
  tricks: [
    { name: "Say please", skillLevel: 10 },
    { name: "Whos your queen?", skillLevel: 6 },
    { name: "find keys", level: 20 },
    { name: "bang bang", skillLevel: 8 },
  ],
  owner: { name: "Sharayah", address: { state: "Denver", city: "CO" } },
};
let baxter = {
  name: "Baxter",
  age: 6,
  tricks: [
    { name: "sit", skillLevel: 1 },
    { name: "dance", skillLevel: 5 },
  ],
  owner: { name: "Steve", address: { state: "Utah", city: "Bountiful" } },
};
let rowdy = {
  name: "Rowdy",
  age: 15,
  tricks: [
    { name: "play dead", skillLevel: 5 },
    { name: "sit", skillLevel: 2 },
  ],
  owner: { name: "Jess", address: { state: "Utah", city: "SLC" } },
};

let remy = {
  name: "Remy",
  age: 8,
  tricks: [
    { name: "play dead", skillLevel: 4 },
    { name: "beg", skillLevel: 5 },
    { name: "sit", skillLevel: 4 },
  ],
  owner: { name: "Jess", address: { state: "Utah", city: "SLC" } },
};

let harley = {
  name: "Harley",
  age: 5,
  tricks: [
    { name: "play dead", skillLevel: 11 },
    { name: "sit", skillLevel: 4 },
    { name: "speak", skillLevel: 5 },
  ],
  owner: { name: "Jess", address: { state: "Utah", city: "SLC" } },
};
let midas = {
  name: "Midas",
  age: 13,
  tricks: [
    { name: "Sit", skillLevel: 10 },
    { name: "Stay.", skillLevel: 9000 },
    { name: "Shake", level: 10 },
    { name: "Speak", skillLevel: 8 },
  ],
  owner: { name: "Trina", address: { state: "Utah", city: "Ogden" } },
};
let pet = {
  name: "Kendo",
  age: 13,
  tricks: [
    { name: "change form to cat", skillLevel: 20 },
    { name: "be an alarm clock at the same time every day", skillLevel: 8 },
  ],
  owner: {
    name: "Katherine",
    address: { state: "Utah", city: "South Jordan" },
  },
};

let dogs = [
  willard,
  skadi,
  gilfoyle,
  beans,
  onyx,
  baxter,
  rowdy,
  remy,
  harley,
  midas,
  pet,
];



// let names = dogs.map((dog)=>{
//   return {name: dog.name}
// })
// console.log('return of all dog names')
// console.log(names)

// let y = dogs.reduce((x, dog)=>{
//   console.log(dog.name)
//   // what this functions return will become the next 'x' in the
//   // next function call
//   x.push(dog.name)
//   return x
// },[])

// let dogNames = []
//  dogs.forEach( dog => {
//     dogNames.push(dog.name)
//  })
//  console.log(dogNames)

// let dogNames1 = dogs.map((x) => x)  // [x,y,z]
// let dogNames2 = dogs.forEach((x) => x) // undefined
// console.log('dogNames1:', dogNames1)
// console.log('dogNames2:',dogNames2)

// // go through all dogs and logging the name
// dogs.map((x) => console.log(x.name)) 
// console.log('-------')
// dogs.forEach((x) => console.log(x.name)) 

// let y = dogs.reduce((accum, dog)=>{
//   console.log("accum:", accum)
//   // what this functions return will become the next 'x' in the
//   // next function call
//   accum.sumAges += dog.age
//   accum.dogCount += 1
//   accum.averageAge = accum.sumAges/  accum.dogCount
//   accum.names.push(dog.name)
//  return accum
// }, {sumAges:0, dogCount:0, averageAge:0, names:[]})