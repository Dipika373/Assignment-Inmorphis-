1. 
let student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};

console.log(Object.keys(student));

Q2.
let student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};

console.log(student);
delete student.rollno;
console.log(student);


Q3. 
let student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};

console.log(Object.keys(student).length);


Q4.
let library = [ 
  {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
  },
  {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
  },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
  }
];

library.forEach(book => {
  console.log(`"${book.title}" by ${book.author} - ${book.readingStatus ? "Already read" : "Not read yet"}`);
});


Q5. 
function Cylinder(radius, height) {
  this.radius = radius;
  this.height = height;
}

Cylinder.prototype.volume = function () {
  return (Math.PI * this.radius * this.radius * this.height).toFixed(4);
};

let cyl = new Cylinder(7, 10);
console.log("Volume =", cyl.volume());

Q6. 
let library = [ 
  { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 },
  { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 },
  { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }
];

library.sort((a, b) => b.libraryID - a.libraryID);
console.log(library);


