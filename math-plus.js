let mathPlus = {
    settings: {
        rounding: 5,
        degrees: false,
        dx: 10 ** -3
    },
    xroot: function (value, power) {
        return Math.pow(value, 1 / power);
    },
    mean: function (array) {
        let total = 0;
        for (let i = 0; i < array.length; i++) {
            total += array[i];
        }

        return total / array.length;
    },
    median: function (array) {
        if (array.length % 2 === 0) {
            return mean([array[array.length / 2 - 1], array[array.length / 2]]);
        } else {
            return Math.floor(array[(array.length - 1) / 2]);
        }
    },
    geoMean: function (array) {
        let total = 1;
        for (let i = 0; i < array.length; i++) {
            total *= array[i];
        }

        return Math.pow(total, 1 / array.length);
    },
    isSquare: function (number) {
        if (number !== 0 && Math.sqrt(number) % 1 === 0) {
            return true;
        } else {
            return false;
        }
    },
    isCube: function (number) {
        if (number !== 0 && Math.cbrt(number) % 1 === 0) {
            return true;
        } else {
            return false;
        }
    },
    factors: function (number) {
        let array = [];
        for (let i = 1; i < number; i++) {
            if (number % i === 0) {
                array.push(i);
            }
        }

        return array;
    },
    convertToFraction: function (number) {
        for (let i = 1; i < 1000000; i++) {
            if ((parseFloat(number) * i) % 1 === 0) {
                return parseFloat(number) * i + "/" + i;
            } else {
                console.warn(
                    "Fraction is too large to compute. The decimal was returned."
                );
                return number;
            }
        }
    },
    simpRadic: function (radicalSquared) {
        if (radicalSquared === 1) {
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

        if (squareFactors.length === 1) {
            console.warn(
                "Given radical has only one square factor: 1. The radical is already simplified. The given number was returned."
            );
            return "√" + radicalSquared;
        }

        let factorToUse = Math.sqrt(Math.max.apply(null, squareFactors));
        return (
            factorToUse + "√" + radicalSquared / Math.max.apply(null, squareFactors)
        );
    },
    hypotenuse: function (number1, number2) {
        return Math.sqrt(number1 ** 2 + number2 ** 2);
    },
    factorial: function (number) {
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
    },
    roundToPlaces: function (number) {
        if (Math.abs(number) > 0) {
            return Math.round(number * (10 ** mathPlus.settings.rounding)) / (10 ** mathPlus.settings.rounding);
        } else {
            return number;
        }
    },
    toDegrees: function (number) {
        return number * 180 / Math.PI;
    },
    toRadians: function (number) {
        return number * Math.PI / 180;
    },
    MathFunction: function (expression, variable) {
        this.expression = expression;
        this.variable = variable;
        this.evaluate = function (inputVal, rounded = true) {
            if (rounded) {
                return mathPlus.roundToPlaces(Function(`return ${expression.replace(new RegExp(variable, "g"), inputVal)};`)());
            } else {
                return Function(`return ${expression.replace(new RegExp(variable, "g"), inputVal)};`)();
            }
        }
        this.derivative = function (inputVal) {
            return mathPlus.roundToPlaces((this.evaluate(inputVal + mathPlus.settings.dx, false) - this.evaluate(inputVal, false)) / mathPlus.settings.dx);
        }
        this.integral = function (lowerBound, upperBound) {
            let sum = 0;
            if (lowerBound < upperBound) {
                for (i = lowerBound; i <= upperBound - mathPlus.settings.dx; i += mathPlus.settings.dx) {
                    sum += (1 / 2) * (this.evaluate(i) + this.evaluate(i + mathPlus.settings.dx)) * (mathPlus.settings.dx);
                }

                return mathPlus.roundToPlaces(sum);
            } else if (lowerBound > upperBound) {
                for (i = upperBound; i <= lowerBound - mathPlus.settings.dx; i += mathPlus.settings.dx) {
                    sum += (1 / 2) * (this.evaluate(i) + this.evaluate(i + mathPlus.settings.dx)) * (mathPlus.settings.dx);
                }

                return -mathPlus.roundToPlaces(sum);
            } else {
                return 0;
            }
        }
        this.summation = function (lowerBound, upperBound) {
            let sum = 0;
            if (lowerBound >= upperBound) {
                console.error("Upper bound must be greater than lower bound.");
                return 0;
            } else if (lowerBound % 1 !== 0 || upperBound % 1 !== 0) {
                console.error("Summation bounds must be integers.");
                return 0;
            } else {
                for (let i = lowerBound; i <= upperBound; i++) {
                    sum += Function(`return ${expression.replace(new RegExp(variable, "g"), i)};`)();
                }
                return mathPlus.roundToPlaces(sum);
            }
        }
        this.product = function (lowerBound, upperBound) {
            let product = 1;
            if (lowerBound >= upperBound) {
                console.error("Upper bound must be greater than lower bound.");
                return 0;
            } else if (lowerBound % 1 !== 0 || upperBound % 1 !== 0) {
                console.error("Summation bounds must be integers.");
                return 0;
            } else {
                for (let i = lowerBound; i <= upperBound; i++) {
                    product *= Function(`return ${expression.replace(new RegExp(variable, "g"), i)};`)();
                }
                return mathPlus.roundToPlaces(product);
            }
        }
    }
}

class Vector {
    constructor(tail = [0, 0, 0], tip = [0, 0, 0]) {
        this.coords = [tail, tip];
        this.update();
    }

    update() {
        if (this.coords[0].length < 3) {
            for (let i = this.coords[0].length; i < 3; i++) {
                this.coords[0][i] = 0;
            }
        }

        if (this.coords[1].length < 3) {
            for (let i = this.coords[1].length; i < 3; i++) {
                this.coords[1][i] = 0;
            }
        }
    }

    setCoords(tail = [0, 0, 0], tip = [0, 0, 0]) {
        this.coords = [tail, tip];
        this.update();
    }

    getCoords() {
        return this.coords;
    }

    setCoords(tail, tip) {
        this.coords = [tail, tip];
        this.update();
    }

    getMagnitude() {
        return Math.pow((this.coords[1][0] - this.coords[0][0]) ** 2 + (this.coords[1][1] - this.coords[0][1]) ** 2 + (this.coords[1][2] - this.coords[0][2]) ** 2, 1 / 2);
    }

    getPosVector() {
        return new PosVector([this.coords[1][0] - this.coords[0][0], this.coords[1][1] - this.coords[0][1], this.coords[1][2] - this.coords[0][2]]);
    }

    getUnitVector() {
        let tempVector = this.getPosVector();
        let magnitude = tempVector.getMagnitude();

        for (let i = 0; i < tempVector.getCoords()[1].length; i++) {
            tempVector.coords[1][i] /= magnitude;
        }

        return tempVector;
    }

    slope() {
        return (this.coords[1][1] - this.coords[0][1]) / (this.coords[1][0] - this.coords[0][0]);
    }
}

class PosVector extends Vector {
    constructor(tip = [0, 0, 0]) {
        super();
        this.coords = tip;
        this.update();
    }

    getPosVector() {
        return this;
    }

    isPosVector() {
        return true;
    }

    update() {
        if (this.coords.length < 3) {
            for (let i = this.coords.length; i < 3; i++) {
                this.coords[i] = 0;
            }
        }
    }

    dotProduct(v) {
        return (this.coords[0] * v.coords[0]) + (this.coords[1] * v.coords[1]) + (this.coords[2] * v.coords[2]);
    }

    crossProduct(v) {
        return new PosVector([this.coords[1] * v.coords[2] - this.coords[2] * v.coords[1], -this.coords[0] * v.coords[2] + this.coords[2] * v.coords[0], this.coords[0] * v.coords[1] - this.coords[1] * v.coords[0]]);
    }

    getVector() {
        return new Vector([0, 0, 0], this.coords);
    }
}