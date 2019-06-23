function findOddOrEven() {
  for (var i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log("Brojot " + i + " e paren");
    } else {
      console.log("Brojot " + i + " e neparen");
    }
  }
}

// findOddOrEven();

function findFizzBuzz() {
  for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    }
  }
}

// findFizzBuzz();

function findArmstrongNumber() {
  for (var i = 153; i < 1000; i++) {
    var suma = 0;
    var tempNumber = i;
    while (tempNumber > 0) {
      var lastDigit = tempNumber % 10;
      suma += Math.pow(lastDigit, 3);
      tempNumber = Math.floor(tempNumber / 10);
    }

    if (i === suma) {
      console.log(i);
    }
  }
}

// findArmstrongNumber();

function numberToString(x, y) {
  for (var i = x; i < y; i++) {
    console.log(i.toString());
  }
}

// numberToString(1, 10);

function isPrimeNumber(x) {
  for (var i = 2; i < x; i++) {
    if (x % i === 0) {
      return false;
    }
  }

  return true;
}

function sumOfNotPrimerNumber(x, y) {
  var suma = 0;
  for (var i = x; i < y; i++) {
    if (!isPrimeNumber(i)) { // isPrimerNumber(i) === false
      suma += i; // suma = suma + i;
    }
  }
  return suma;
}

var a = sumOfNotPrimerNumber(1, 10);
console.log(a);