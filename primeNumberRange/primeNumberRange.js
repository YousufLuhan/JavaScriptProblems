function isPrime(inputNumber) {
  if (typeof inputNumber === "number") {
    if (inputNumber < 2) return false;
    for (let i = 2; i < inputNumber; i++) {
      if (inputNumber % 2 === 0) {
        return false;
      }
    }
    return true;
  } else {
    return "You have typed invalid word";
  }
}

function primeNumberRangae(inputNumber) {
  let result = "";
  for (let i = 0; i <= inputNumber; i++) {
    if (isPrime(i)) {
      result += i + " ";
    }
  }
  return result;
}

console.log(primeNumberRangae("Dhaka"));
console.log(primeNumberRangae(20));
console.log(primeNumberRangae(-10));
