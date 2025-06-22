que1
const today = new Date();

// Step 1: Get the day
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayName = days[today.getDay()];

// Step 2: Get hours, minutes, seconds
let hours = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();

// Step 3: Convert to 12-hour format and AM/PM
const ampm = hours >= 12 ? "PM" : "AM";
hours = hours % 12;
hours = hours ? hours : 12; // if hour is 0, set it to 12

// Step 4: Display result
console.log("Today is:", dayName);
console.log(`Current time is: ${hours} ${ampm} : ${minutes} : ${seconds}`); 





que2//
function printWindow() {
  window.print();
}




que3//
const Today = new Date();
const dd = today.getDate();
const mm = today.getMonth() + 1; // January = 0
const yyyy = today.getFullYear();

console.log(`${mm}-${dd}-${yyyy}`);
console.log(`${mm}/${dd}/${yyyy}`);
console.log(`${dd}-${mm}-${yyyy}`);
console.log(`${dd}/${mm}/${yyyy}`);








que4//
const a = 5, b = 6, c = 7;
const s = (a + b + c) / 2;

const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
console.log("Area of triangle:", area.toFixed(2)); 




  



que5//
 let str= "w3resource";
function RotateRight(string){
    let current=string;
    let lastcharacter=current.slice(-1);
    let rest=current.slice(0,-1);
    current=lastcharacter+rest;
      console.log(current);
}
RotateRight(str);






que6//
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log(isLeapYear(2024)); // true
console.log(isLeapYear(2100)); // false






que7//





















que9//
function daysUntilChristmas() {
  const today = new Date();
  const currentYear = today.getFullYear();

  // Set Christmas date for this year
  let christmas = new Date(currentYear, 11, 25); // Month is 0-based, so 11 = December

  // If Christmas has already passed this year, set to next year's Christmas
  if (today > christmas) {
    christmas = new Date(currentYear + 1, 11, 25);
  }

  // Calculate difference in milliseconds
  const diffTime = christmas - today;

  // Convert milliseconds to days
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  console.log(`🎄 ${diffDays} days left until Christmas!`);
}

daysUntilChristmas




















que8//
let gameNum =25;
let userNum= promt("guess a game number:");
while(userNum!= gameNum){
 userNum= promt("you gave a wrong number , guess again:");
}
console.log("good work, you entered a right number");
































que11//
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

// Example
let c = 60;
let f = 45;

console.log(`${c}°C is ${celsiusToFahrenheit(c)}°F`);
console.log(`${f}°F is ${fahrenheitToCelsius(f)}°C`);









que12//
console.log(window.location.href);



















