
function multiples (a,b,n) {
  let sum = 0;
  let max = 0;
  for (let i = 0; i <= Math.floor(n/a) && i*a < n; i++) {
    sum += a * i;
  }
  console.log(max);
  max = 0;
  for (let j = 0; j <= Math.floor(n/b) && j*b < n; j++) {
    if (b*j % 3 !== 0) sum += b * j;
  }
  return sum;
}

//console.log(multiples(3,5,1000));

function fibonacciEven (max) {
  let minusOne = 1;
  let temp = 0;
  let term = 2;
  let sum = 0;

  while (term < max) {
    if (term % 2 === 0) sum += term;
    temp = term;
    term += minusOne;
    minusOne = temp;
    console.log('term: ',term,' minus: ',minusOne, ' sum: ',sum);
  }
  return sum;
}

//console.log(fibonacciEven(4000000));

function largestPrime (num) {
  let max = 0;
  for (let i = Math.floor(Math.sqrt(num)); i > 0; i = i - 1) {
    if (num % i === 0) {
      if (isPrime(i)) {
        return i;
      }
    }
  }
}

function isPrime (num) {
  for (let i = 2; i*i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

//console.log(largestPrime(600851475143 ));

function isPalin (num) {
  let str = num.toString();

  for (let i = 0; i <= Math.floor(str.length); i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
}

function largestPalin (a) {
  let max = 0;
  for (let i = a; i > 2; i--) {
    for (let j = a; j > 0; j--) {
      if (isPalin(i*j)) {
        if (i*j > max) {
          max = i*j;
        break;
        }
      }
    }
  }
  return max;
}
console.log(largestPalin(999));
console.log(isPalin(909));
console.log(isPalin(1001));
console.log(isPalin(9090));
module.exports = multiples;
