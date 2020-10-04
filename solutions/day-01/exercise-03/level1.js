// 1. Declare a function fullName and it takes firstName, lastName as a parameter and it returns your full - name.
const fullName = (firstName, lastName) => {
  return firstName + ' ' + lastName;
}
console.log(fullName('David', 'Khuu'));

// 2. Declare a function addNumbers and it takes two two parameters and it returns sum.
const addNumbers = (a, b) => a + b;
console.log(addNumbers(10, 11));

// 3. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates _areaOfCircle
const areaOfCircle = (radius) => Math.PI * radius * radius;
console.log(areaOfCircle(5));

/**
 * 4. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32.
 * Write a function which convert oC to oF convertCelciusToFahrenheit.
 */
const convertCelciusToFahrenheit = (temp) => (temp * (9/5)) + 32;
console.log(convertCelciusToFahrenheit(0));

/**
 * 5. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2.
 *  Write a function which calculates bmi. BMI is used to broadly define
 *  different weight groups in adults 20 years old or older.
 *  Check if a person is underweight, normal, overweight or obese based the information given below.
 *  - The same groups apply to both men and women.
 *  - Underweight: BMI is less than 18.5
 *  - Normal weight: BMI is 18.5 to 24.9
 *  - Overweight: BMI is 25 to 29.9
 *  - Obese: BMI is 30 or more
 */
const calculateBmi = (weight, height) => {
  let bmi = weight / (height * height);
  console.log('BMI:', bmi);
  switch (true) {
    case bmi < 18.5:
      console.log('Underweight');
      break;
    case bmi >= 18.5 && bmi <= 24.9:
      console.log('Normal weight');
      break;
    case bmi >= 25 && bmi <= 29.9:
      console.log('Overweight');
      break;
    case bmi >= 30:
      console.log('Obese');
      break;
    default:
      console.log('Invalid weight and/or height');
  }
};
calculateBmi(90, 1.8);

// 6. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
const checkSeason = (month) => {
  let season = '';
  month = month.toLowerCase();
  switch (month) {
    case 'september':
    case 'october':
    case 'november':
      season = 'Autumn';
      break;
    case 'december':
    case 'january':
    case 'february':
      season = 'Winter';
      break;
    case 'march':
    case 'april':
    case 'may':
      season = 'Spring';
      break;
    case 'june':
    case 'july':
    case 'august':
      season = 'Summer';
      break;
    default:
      season = 'Entered value is not a month.';
  }
  return season;
}
console.log(checkSeason('March'));