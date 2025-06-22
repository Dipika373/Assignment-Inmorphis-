Q1
const favoriteMovie = {
  title: "Puff the Magic Dragon",
  duration: 30,
  stars: ["Puff", "Jackie", "Living Sneezes"]
};

function printMovie(movie) {
  console.log(`${movie.title} lasts for ${movie.duration} minutes. Stars: ${movie.stars.join(", ")}.`);
}

printMovie(favoriteMovie);






Q2

const books = [
  { title: "The Hobbit", author: "J.R.R. Tolkien", alreadyRead: true },
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", alreadyRead: false }
];

books.forEach(book => {
  const description = `"${book.title}" by ${book.author}`;
  if (book.alreadyRead) {
    console.log(`You already read ${description}`);
  } else {
    console.log(`You still need to read ${description}`);
  }
});



Q3
const recipe = {
  title: "Mole",
  servings: 2,
  ingredients: ["cinnamon", "cumin", "cocoa"]
};

console.log(recipe.title);
console.log(`Serves: ${recipe.servings}`);
console.log("Ingredients:");
recipe.ingredients.forEach(ing => console.log(ing));



Q4
function tellFortune(kids, partner, location, job) {
  console.log(`You will be a ${job} in ${location}, and married to ${partner} with ${kids} kids.`);
}

tellFortune(2, "Riya", "Delhi", "Developer");
tellFortune(0, "Sam", "Goa", "Artist");
tellFortune(3, "Anya", "New York", "Chef");




Q5
function calculateAge(birthYear, currentYear = new Date().getFullYear()) {
  const age1 = currentYear - birthYear;
  const age2 = age1 - 1;
  console.log(`You are either ${age2} or ${age1}`);
}

calculateAge(2000, 2025);
calculateAge(1999);
calculateAge(1985);



Q6
function calculateSupply(age, perDay) {
  const maxAge = 90;
  const totalNeeded = Math.round((maxAge - age) * 365 * perDay);
  console.log(`You will need ${totalNeeded} to last you until the ripe old age of ${maxAge}`);
}

calculateSupply(22, 2.5);
calculateSupply(30, 1);
calculateSupply(15, 4.2);



Q7
function calcCircumference(radius) {
  const circumference = 2 * Math.PI * radius;
  console.log(`The circumference is ${circumference.toFixed(2)}`);
}

function calcArea(radius) {
  const area = Math.PI * radius * radius;
  console.log(`The area is ${area.toFixed(2)}`);
}

calcCircumference(5);
calcArea(5);



Q8
function celsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9/5) + 32;
  console.log(`${celsius}°C is ${fahrenheit.toFixed(1)}°F`);
}

function fahrenheitToCelsius(fahrenheit) {
  const celsius = (fahrenheit - 32) * 5/9;
  console.log(`${fahrenheit}°F is ${celsius.toFixed(1)}°C`);
}

celsiusToFahrenheit(30);   // "30°C is 86.0°F"
fahrenheitToCelsius(86);   // "86°F is 30.0°C"
