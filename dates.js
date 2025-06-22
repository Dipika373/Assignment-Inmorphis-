 Q1 function is_date(input) {
  return Object.prototype.toString.call(input) === "[object Date]";
}

// Test cases
console.log(is_date("October 13, 2014 11:13:00"));        // false
console.log(is_date(new Date(86400000)));                 // true
console.log(is_date(new Date(99,5,24,11,33,30,0)));       // true
console.log(is_date([1, 2, 4, 0]));                        // false




Q2  function curday(separator = '/') {
  const now = new Date();
  const mm = now.getMonth() + 1; // Months are 0-based
  const dd = now.getDate();
  const yyyy = now.getFullYear();
  
  return `${mm < 10 ? '0' + mm : mm}${separator}${dd < 10 ? '0' + dd : dd}${separator}${yyyy}`;
}

// Example Output
console.log(curday('/'));  // e.g., "06/22/2025"
console.log(curday('-'));  // e.g., "06-22-2025"










Q3  function getDaysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

// Test cases
console.log(getDaysInMonth(1, 2012));   // 31 → January
console.log(getDaysInMonth(2, 2012));   // 29 → February (leap year)
console.log(getDaysInMonth(9, 2012));   // 30 → September
console.log(getDaysInMonth(12, 2012));  // 31 → December




Q4  function month_name(date) {
  const months = ["January", "February", "March", "April", "May", "June",
                  "July", "August", "September", "October", "November", "December"];
  return months[date.getMonth()];
}

// Test cases
console.log(month_name(new Date("10/11/2009")));  // October
console.log(month_name(new Date("11/13/2014")));  // November





Q5    function compare_dates(date1, date2) {
  if (date1.getTime() === date2.getTime()) return "Date1 = Date2";
  return (date1 > date2) ? "Date1 > Date2" : "Date2 > Date1";
}

// Test cases
console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')));  // Date1 = Date2
console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')));  // Date1 > Date2
console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));  // Date2 > Date1







Q6   function add_minutes(date, minutes) {
  return new Date(date.getTime() + minutes * 60000);
}

// Test case
console.log(add_minutes(new Date(2014, 10, 2), 30).toString());
// Output: "Sun Nov 02 2014 00:30:00 GMT+0530 (India Standard Time)"





Q7 function is_weekend(dateStr) {
  const day = new Date(dateStr).getDay();
  return (day === 0 || day === 6) ? "weekend" : undefined;
}

// Test cases
console.log(is_weekend('Nov 15, 2014')); // "weekend" (Saturday)
console.log(is_weekend('Nov 16, 2014')); // "weekend" (Sunday)
console.log(is_weekend('Nov 17, 2014')); // undefined (Monday)






Q8  function date_diff_indays(date1, date2) {
  const dt1 = new Date(date1);
  const dt2 = new Date(date2);
  const diff = (dt2 - dt1) / (1000 * 60 * 60 * 24);
  return Math.floor(diff);
}

// Test cases
console.log(date_diff_indays('04/02/2014', '11/04/2014')); // 216
console.log(date_diff_indays('12/02/2014', '11/04/2014')); // -28










Q9  function lastday(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

// Test cases
console.log(lastday(2014, 0));   // 31 → Jan
console.log(lastday(2014, 1));   // 28 → Feb
console.log(lastday(2014, 11));  // 31 → Dec










Q10function yesterday(dateStr) {
  const date = new Date(dateStr);
  date.setDate(date.getDate() - 1);
  return date;
}

// Test cases
console.log(yesterday('Nov 15, 2014').toString());
// → "Fri Nov 14 2014 ..."
console.log(yesterday('Nov 16, 2015').toString());
// → "Sun Nov 15 2015 ..."
console.log(yesterday('Nov 17, 2016').toString());
// → "Wed Nov 16 2016 ..."





Q11function max_date(dates) {
  return new Date(Math.max.apply(null, dates.map(d => new Date(d))));
}

// Test
console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03']));
// Output: "2015/02/02"










Q12function min_date(dates) {
  return new Date(Math.min.apply(null, dates.map(d => new Date(d))));
}

// Test
console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03']));
// Output: "2015/01/03"







Q13
function timeConvert(mins) {
  const hours = Math.floor(mins / 60);
  const minutes = mins % 60;
  return `${mins} minutes = ${hours} hour(s) and ${minutes} minute(s).`;
}

// Test
console.log(timeConvert(200)); // "200 minutes = 3 hour(s) and 20 minute(s)."


Q14
function days_of_a_year(year) {
  return ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? 366 : 365;
}

// Test
console.log(days_of_a_year(2015)); // 365
console.log(days_of_a_year(2016)); // 366











Q15
function quarter_of_the_year(date) {
  return Math.floor(date.getMonth() / 3) + 1;
}

// Test
console.log(quarter_of_the_year(new Date(2015, 1, 21)));  // Q1 → Feb
console.log(quarter_of_the_year(new Date(2015, 10, 18))); // Q4 → Nov






Q16


function days_passed(date) {
  const start = new Date(date.getFullYear(), 0, 1); // Jan 1st of the same year
  const diff = date - start;
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

// Test
console.log(days_passed(new Date(2015, 0, 15)));  // 14
console.log(days_passed(new Date(2015, 11, 14))); // 347






Q17

function unixToTime(unix) {
  const date = new Date(unix * 1000); // Multiply by 1000 to convert seconds to ms
  return date.toLocaleTimeString();
}

// Example
console.log(unixToTime(1609459200)); // e.g., "5:30:00 AM" (depends on your timezone)






Q18

function calculate_age(birthDate) {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();

  // Check if birthday hasn’t happened yet this year
  const hasBirthdayPassed = today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

  if (!hasBirthdayPassed) {
    age--;
  }

  return age;
}

// Test
console.log(calculate_age(new Date(1982, 11, 4))); // e.g., 42
console.log(calculate_age(new Date(1962, 1, 1)));  // e.g., 62




Q19
function day_of_the_month(date) {
  const day = date.getDate();
  return day < 10 ? '0' + day : '' + day;
}

// Test
const d = new Date(2015, 10, 1);
console.log(day_of_the_month(d)); // "01"




Q20
function short_Days(date) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[date.getDay()];
}

// Test
const dt = new Date(2015, 10, 1); // Sunday
console.log(short_Days(dt)); // "Sun"




Q21

function long_Days(date) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[date.getDay()];
}

// Test
const dt = new Date(2015, 10, 1); // November 1, 2015
console.log(long_Days(dt)); // "Sunday"





Q22

function ISO_numeric_date(date) {
  const day = date.getDay();
  return day === 0 ? 7 : day;
}

// Test
console.log(ISO_numeric_date(new Date(2015, 10, 1))); // 7 (Sunday)




Q23
function english_ordinal_suffix(date) {
  const day = date.getDate();
  if (day > 3 && day < 21) return day + 'th';
  switch (day % 10) {
    case 1: return day + 'st';
    case 2: return day + 'nd';
    case 3: return day + 'rd';
    default: return day + 'th';
  }
}

// Test
console.log(english_ordinal_suffix(new Date(2015, 10, 1))); // "1st"




Q24

function ISO8601_week_no(date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
  return weekNo;
}

// Test
console.log(ISO8601_week_no(new Date(2015, 10, 1))); // 44



Q25
function full_month(date) {
  const months = ["January", "February", "March", "April", "May", "June",
                  "July", "August", "September", "October", "November", "December"];
  return months[date.getMonth()];
}

// Test
console.log(full_month(new Date(2015, 10, 1))); // "November




Q26
function numeric_month(date) {
  const month = date.getMonth() + 1;
  return month < 10 ? '0' + month : '' + month;
}

console.log(numeric_month(new Date(2015, 10, 1))); // "11"





Q27
function short_months(date) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return months[date.getMonth()];
}

console.log(short_months(new Date(2015, 10, 1))); // "Nov"





Q28
function full_year(date) {
  return date.getFullYear();
}

console.log(full_year(new Date(2015, 10, 1))); // 2015



Q29

function sort_year(date) {
  return ('' + date.getFullYear()).slice(-2);
}

console.log(sort_year(new Date(1989, 10, 1))); // "89"



Q30
function lowercase_ampm(date) {
  return date.getHours() < 12 ? 'am' : 'pm';
}

console.log(lowercase_ampm(new Date())); // "am" or "pm"






Q31

function uppercase_ampm(date) {
  return date.getHours() < 12 ? 'AM' : 'PM';
}

console.log(uppercase_ampm(new Date())); // "AM" or "PM"



Q32

function internet_time(date) {
  const utc = date.getUTCHours() * 3600 +









Q34
function hours_without_zeroes(date) {
  return date.getHours(); // 0 to 23
}

console.log(hours_without_zeroes(new Date()));






Q37

function get_timezone_name(date) {
  return date.toLocaleString('en-us', { timeZoneName: 'long' }).split(' ').slice(-2).join(' ');
}

console.log(get_timezone_name(new Date())); // e.g., "India Standard Time"





Q38
function daylights_savings(date) {
  const jan = new Date(date.getFullYear(), 0, 1).getTimezoneOffset();
  const jul = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
  return (Math.max(jan, jul) !== date.getTimezoneOffset()) ? 1 : 0;
}

console.log(daylights_savings(new Date())); // 0 or 1




Q39
function diff_to_GMT(date) {
  const offset = -date.getTimezoneOffset() / 60;
  return (offset >= 0 ? "+" : "") + offset.toFixed(3);
}

console.log(diff_to_GMT(new Date())); // "+5.500"







Q40
function timezone_offset_in_seconds(date) {
  return -date.getTimezoneOffset() * 60;
}

console.log(timezone_offset_in_seconds(new Date())); // 19800 for IST


