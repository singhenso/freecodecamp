const surfaceAreaCalculator = (radius) => {
    return 4 * 3.14 * radius * radius;
}
console.log(surfaceAreaCalculator(4));


// factorial function

// recursion is when a functions calls on itself until it doesn't

const factorial = (n) => {
    if (n === 1 ) {
        return 1;
    }
    else {
        return n * factorial(n-1);
    }
} 

const answer = factorial(3);
console.log(answer)