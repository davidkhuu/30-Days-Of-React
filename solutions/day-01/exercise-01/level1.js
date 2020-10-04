// 1. Declare an empty array
const emptyArray = [];

// 2. Declare an array with more than 5 number of elements
const arr = [1, 2, 3, 4, 5, 6, 7];

// 3. Find the length of your array
console.log(arr.length);

// 4. Get the first item, the middle item and the last item of the array
console.log(
  arr[0], // first item
  arr[Math.round(arr.length / 2)], // middle item
  arr[arr.length - 1] // last item
);

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [1, 'hello', 3.14, { foo: 'bar'}, 5, 'world'];

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// 7. Print the array using console.log()
console.log(itCompanies);

// 8. Print the number of companies in the array
console.log(itCompanies.length);

// 9. Print the first company, middle and last company
console.log(itCompanies[0], itCompanies[Math.round(arr.length / 2)], itCompanies[itCompanies.length - 1]);

// 10. Print out each company
for (let company of itCompanies) {
  console.log(company);
}

// 11. Change each company name to uppercase one by one and print them out
for (let company of itCompanies) {
  company = company.toUpperCase();
  console.log(company);
}

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let itCompaniesSentence = '';
for (let i = 0; i < itCompanies.length; i++) {
  itCompaniesSentence += itCompanies[i];
  if (i !== itCompanies.length - 1) {
    itCompaniesSentence += ', ';
  }
  if (i === itCompanies.length - 2) {
    itCompaniesSentence += 'and ';
  }
}
itCompaniesSentence += ' are big IT companies.';
console.log(itCompaniesSentence);

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
const certainCompany = 'Netflix';
if (itCompanies.includes(certainCompany)) {
  console.log(certainCompany);
} else {
  console.log('a company is not found');
}

// 14. Filter out companies which have more than one 'o' without the filter method
const filteredITCompanies = [];
for (let company of itCompanies) {
  let oCount = 0;
  let chars = company.split('');
  for (let char of chars) {
    if (char === 'o') {
      oCount++;
    }
  }

  if (oCount <= 1) {
    filteredITCompanies.push(company);
  }
}
console.log(filteredITCompanies);

// 15. Sort the array using sort() method
console.log(filteredITCompanies.sort());

// 16. Reverse the array using reverse() method
console.log(filteredITCompanies.reverse());

// 17. Slice out the first 3 companies from the array
console.log(filteredITCompanies.slice(0, 3));

// 18. Slice out the last 3 companies from the array
console.log(filteredITCompanies.slice(filteredITCompanies.length - 3, 4));

// 19. Slice out the middle IT company or companies from the array
console.log(filteredITCompanies.slice(1, 3));

// 20. Remove the first IT company from the array
console.log(filteredITCompanies.shift());

// 21. Remove the middle IT company or companies from the array
console.log(filteredITCompanies.splice(1, 2));

// 22. Remove the last IT company from the array
console.log(filteredITCompanies.pop());

// 23. Remove all IT companies
console.log(filteredITCompanies.splice());
