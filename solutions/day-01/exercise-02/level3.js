// Write a program which tells the number of days in a month.
let month = prompt('Enter a month:');
let days = 0;
month = month.toLowerCase();
switch (month) {
  case 'january':
  case 'march':
  case 'may':
  case 'july':
  case 'august':
  case 'october':
  case 'december':
    days = 31;
    break;
  case 'april':
  case 'june':
  case 'september':
  case 'november':
    days = 30;
    break;
  case 'february':
    /**
     * Consider leap year:
     * These extra days occur in each year which is an integer multiple of 4
     * (except for years evenly divisible by 100, which are not leap years unless evenly divisible by 400).
     * https://en.wikipedia.org/wiki/Leap_year
     */
    let year = new Date().getFullYear();
    let isLeapYear = (year % 100 === 0)
      ? year % 400 === 0
      : year % 4 === 0;
    days = isLeapYear ? 29 : 28;
    break;
  default:
}
month = month.split('');
month[0] = month[0].toUpperCase();
month = month.join('');
console.log(month, 'has', days, 'days.');