/**
 * 1. Create a separate countries.js file and store the countries array into this file,
 * create a separate file web_techs.js and store the webTechs array into this file.
 * Access both file in main.js file
 */
const { countries } = require('./countries.js');
const { webTechs } = require('./web_techs.js');
console.log(countries, webTechs);

// 2. First remove all the punctuations and change the string to array and count the number of words in the array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let words = text.replace(/[,.]/g, '').split(' ');
console.log(words);
console.log(words.length);

// 3. In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift('Meat');
// add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push('Sugar');
// remove 'Honey' if you are allergic to honey
let allergic = false;
if (allergic) {
  let honeyIndex = shoppingCart.indexOf('Honey');
  shoppingCart.splice(honeyIndex, 1);
}
// modify Tea to 'Green Tea'
let teaIndex = shoppingCart.indexOf('Tea');
shoppingCart[teaIndex] = 'Green Tea';

/**
 * 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'.
 * If it does not exist add to the countries list.
 */
if (countries.includes('Ethiopia')) {
  console.log('ETHIOPIA');
} else {
  countries.push('Ethiopia');
}

/**
 * 5. In the webTechs array check if Sass exists in the array and
 * if it exists print 'Sass is a CSS preprocess'.
 * If it does not exist add Sass to the array and print the array.
 */
if (webTechs.includes('Sass')) {
  console.log('Sass is a CSS preprocess');
} else {
  webTechs.push('Sass');
  console.log(webTechs);
}

// 6. Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);