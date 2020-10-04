/**
 * 1. Write a code which can give grades to students according to theirs scores:
 *  - 90-100, A
 *  - 70-89, B
 *  - 60-69, C
 *  - 50-59, D
 *  - 0-49, F
 */
let score = prompt('Enter your score:');
switch (true) {
  case score <= 100 && score >= 90:
    console.log('A');
    break;
  case score < 90 && score >= 70:
    console.log('B');
    break;
  case score < 70 && score >= 60:
    console.log('C');
    break;
  case score < 60 && score >= 50:
    console.log('D');
    break;
  case score < 50:
    console.log('F');
    break;
  default:
    console.log('Entered value was not a number.');
}

/**
 * 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
 *  - September, October or November, the season is Autumn.
 *  - December, January or February, the season is Winter.
 *  - March, April or May, the season is Spring
 *  - June, July or August, the season is Summer
 */
let month = prompt('Enter a month:');
month = month.toLowerCase();
switch (month) {
  case 'september':
  case 'october':
  case 'november':
    console.log('The season is Autumn.');
    break;
  case 'december':
  case 'january':
  case 'february':
    console.log('The season is Winter.');
    break;
  case 'march':
  case 'april':
  case 'may':
    console.log('The season is Spring.');
    break;
  case 'june':
  case 'july':
  case 'august':
    console.log('The searon is Summer.');
    break;
  default:
    console.log('Entered value is not a month.');
}

// 3. Check if a day is weekend day or a working day. Your script will take day as an input.
let day = prompt('What is the day today?');
day = day.toLowerCase();
day = day.split('');
day[0] = day[0].toUpperCase();
day = day.join('');
switch (day) {
  case 'Sunday':
  case 'Saturday':
    console.log(day, 'is a weekend.');
    break;
  case 'Monday':
  case 'Tuesday':
  case 'Wednesday':
  case 'Thursday':
  case 'Friday':
    console.log(day, 'is a working day.');
    break;
  default:
    console.log(day, 'is not a proper day.');
}