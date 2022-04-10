///TESTS
// create a big random array
getNumString = (size) => {
  let bigArray = [];
  for (let i = 0; i < size; i++) {
    bigArray.push(i);
  }
  return bigString = bigArray.join(",");
};

testNonReduceWay = (stringSize, numLoops) => {
  console.log("starting bigString testNonReduceWay");
  let bigString = getNumString(stringSize);
  // get starting time
  const start = new Date();
  let startingTime = start.getTime();
  // run test
  for (let i = 0; i < numLoops; i++) {
    numberInfo(bigString);
  }
  // get end time
  const end = new Date();
  let endingTime = end.getTime();
  console.log("Done bigString testNonReduceWay");
  console.log("testNonReduceWay time:", endingTime - startingTime);
};

testReduceWay = (stringSize, numLoops) => {
  console.log("starting bigString testReduceWay");
  let bigString = getNumString(stringSize);
  const start = new Date();
  let startingTime = start.getTime();
  for (let i = 0; i < numLoops; i++) {
    numbersInfoReduce(bigString);
  }
  const end = new Date();
  let endingTime = end.getTime();
  console.log("Done bigString testReduceWay");
  console.log("testReduceWay time:", endingTime - startingTime);
};


// n complexity
testNonReduceWay(1000000,1);
// n complexity
testReduceWay(10000000,1);