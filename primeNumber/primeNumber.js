function isPrime(inputNumber) {
  if (typeof inputNumber === "number") {
    if (inputNumber < 2) return false;
    for (let i = 2; i < inputNumber; i++) {
      if (inputNumber % i === 0) {
        return false;
      }
    }
    return true;
  } else {
    return "You have typed invalid word";
  }
}
// checked result

// console.log(isPrime(-2));
// console.log(isPrime("test"));
// console.log(isPrime(4));
// console.log(isPrime(2));
// console.log(isPrime(7));
