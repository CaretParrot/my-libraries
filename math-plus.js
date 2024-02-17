let mathPlusSettings = {
  rounding: 5
}

function xroot(value, power) {
  return Math.pow(value, 1 / power);
}

function mean(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }

  return total / array.length;
}

function median(array) {
  if (array.length % 2 === 0) {
    return mean([array[array.length / 2 - 1], array[array.length / 2]]);
  } else {
    return Math.floor(array[(array.length - 1) / 2]);
  }
}

function geoMean(array) {
  let total = 1;
  for (let i = 0; i < array.length; i++) {
    total *= array[i];
  }

  return Math.pow(total, 1 / array.length);
}

function isSquare(number) {
  if (number !== 0 && Math.sqrt(number) % 1 === 0) {
    return true;
  } else {
    return false;
  }
}

function isCube(number) {
  if (number !== 0 && Math.cbrt(number) % 1 === 0) {
    return true;
  } else {
    return false;
  }
}

function factors(number) {
  let array = [];
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      array.push(i);
    }
  }

  return array;
}

function convertToFraction(number) {
  for (let i = 1; i < 1000000; i++) {
    if ((parseFloat(number) * i) % 1 == 0) {
      return parseFloat(number) * i + "/" + i;
    } else {
      console.warn(
        "Fraction is too large to compute. The decimal was returned."
      );
      return number;
    }
  }
}

function simpRadic(radicalSquared) {
  if (radicalSquared == 1) {
    console.warn(
      "Given radical has only one square factor: 1. The radical is already simplified. The given number was returned."
    );
    return radicalSquared;
  }

  if (isSquare(radicalSquared)) {
    return Math.sqrt(radicalSquared);
  }

  let squareFactors = [];
  for (let i = 0; i < factors(radicalSquared).length; i++) {
    if (isSquare(factors(radicalSquared)[i])) {
      squareFactors.push(factors(radicalSquared)[i]);
    }
  }

  if (squareFactors.length == 1) {
    console.warn(
      "Given radical has only one square factor: 1. The radical is already simplified. The given number was returned."
    );
    return "√" + radicalSquared;
  }

  let factorToUse = Math.sqrt(Math.max.apply(null, squareFactors));
  return (
    factorToUse + "√" + radicalSquared / Math.max.apply(null, squareFactors)
  );
}

function hypotenuse(number1, number2) {
  return Math.sqrt(number1 ** 2 + number2 ** 2);
}

function factorial(number) {
  if (number > 170) {
    console.warn(
      'Factorial is too large to compute. Factorial of the given number returned "Infinity".'
    );
  }
  let total = 1;
  for (let i = 1; i <= number; i++) {
    total *= i;
  }
  return total;
}

let e = Math.E;
let pi = Math.PI;

function sin(x) {
  return Math.sin(x);
}

function sinh(x) {
  return Math.sinh(x);
}

function arcsin(x) {
  return Math.asin(x);
}

function cos(x) {
  return Math.cos(x);
}

function cosh(x) {
  return Math.cosh(x);
}

function arccos(x) {
  return Math.acos(x);
}

function tan(x) {
  return Math.tan(x);
}

function tanh(x) {
  return Math.tanh(x);
}

function arctan(x) {
  return Math.atan(x);
}

function csc(x) {
  return 1 / Math.sin(x);
}

function csch(x) {
  return 1 / Math.sinh(x);
}

function arccsc(x) {
  return Math.asin(1 / x);
}

function sec(x) {
  return 1 / Math.cos(x);
}

function sech(x) {
  return 1 / Math.cosh(x);
}

function arcsec(x) {
  return Math.acos(1 / x);
}

function cot(x) {
  return 1 / Math.tan(x);
}

function coth(x) {
  return 1 / Math.tanh(x);
}

function arccot(x) {
  return pi / 2 - Math.atan(x);
}

function log(x) {
  return Math.log10(x);
}

function logb(b, x) {
  return Math.log(x) / Math.log(b);
}

function ln(x) {
  return Math.log(x);
}

function abs(x) {
  return Math.abs(x);
}

function floor(x) {
  return Math.floor(x);
}

function ceil(x) {
  return Math.ceil(x);
}

function random(x) {
  return Math.random(x);
}

function radians(x) {
  return x * (pi / 180);
}

function degrees(x) {
  return x * (180 / pi);
}

function MathFunction(output, input, variable) {
  this.evaluate = function (inputVal) {
    let replaceMethod = new RegExp(variable, "g");
    let evaluatedOutput = Function(`return ${input.replace(replaceMethod, inputVal)};`)();
    return Math.round(evaluatedOutput * (10 ** mathPlus.rounding)) / (10 ** mathPlus.rounding);
  }
}
