/**
 * 1. Get user input using prompt(“Enter your age:”).
 * If user is 18 or older , give feedback:'You are old enough to drive'
 * but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
 */
let age = prompt('Enter your age:');
if (age >= 18) {
  console.log('You are old enough to drive.');
} else {
  console.log('You are left with', 18 - age, 'years to drive.');
}

/**
 * 2. Compare the values of myAge and yourAge using if … else.
 * Based on the comparison and log the result to console stating who is older (me or you).
 * Use prompt(“Enter your age:”) to get the age as input.
 */
let yourAge = prompt('Enter your age:');
let yourAge = 26;
let ageDifference = myAge - yourAge;
if (ageDifference === 0) {
  console.log('We are the same age.');
} else {
  console.log('You are', Math.abs(ageDifference), 'years', ageDifference > 0 ? 'younger' : 'older', 'than me.');
}

/**
 * 3. If a is greater than b return 'a is greater than b' else 'a is less than b'.
 * Try to implement it in two ways
 */
let a = 4;
let b = 3;
if (a > b) {
  console.log(a, 'is greater than', b);
} else {
  console.log(a, 'is less than', b);
}
a > b
  ? console.log(a, 'is greater than', b)
  : console.log(a, 'is less than', b);

/**
 * 4. Even numbers are divisible by 2 and the remainder is zero.
 * How do you check, if a number is even or not using JavaScript?
 */
let num = prompt('Enter a number:');
console.log(num, 'is an', num % 2 === 0 ? 'even' : 'odd', 'number');