Q1 
function is_array(input) {
  return Array.isArray(input);
}

console.log(is_array('w3resource')); // false
console.log(is_array([1, 2, 4, 0])); // true




Q2 function array_Clone(arr) {
  return arr.slice(0);
}

console.log(array_Clone([1, 2, 4, 0]));         // [1, 2, 4, 0]
console.log(array_Clone([1, 2, [4, 0]]));       // [1, 2, [4, 0]]
Q3
function first(arr, n) {
  if (n == null) return arr[0];
  if (n < 0) return [];
  return arr.slice(0, n);
}

console.log(first([7, 9, 0, -2]));       // 7
console.log(first([], 3));              // []
console.log(first([7, 9, 0, -2], 3));    // [7, 9, 0]
console.log(first([7, 9, 0, -2], 6));    // [7, 9, 0, -2]
console.log(first([7, 9, 0, -2], -3));   // []




Q4
function last(arr, n) {
  if (n == null) return arr[arr.length - 1];
  if (n < 0) return [];
  return arr.slice(-n);
}

console.log(last([7, 9, 0, -2]));       // -2
console.log(last([7, 9, 0, -2], 3));    // [9, 0, -2]
console.log(last([7, 9, 0, -2], 6));    // [7, 9, 0, -2]



Q5
const myColor = ["Red", "Green", "White", "Black"];

console.log(myColor.join(","));  // "Red,Green,White,Black"
console.log(myColor.join("+"));  // "Red+Green+White+Black"



Q6

function insertDash(num) {
  let str = num.toString();
  let result = [str[0]];
  for (let i = 1; i < str.length; i++) {
    if (parseInt(str[i - 1]) % 2 === 0 && parseInt(str[i]) % 2 === 0) {
      result.push("-", str[i]);
    } else {
      result.push(str[i]);
    }
  }
  return result.join("");
}

console.log(insertDash(025468));  // "0-254-6-8"



Q7
let arr1 = [3, 8, 7, 6, 5, -4, 3, 2, 1];
arr1.sort((a, b) => a - b);
console.log(arr1);  // [-4, 1, 2, 3, 3, 5, 6, 7, 8]



Q8

function mostFrequent(arr) {
  let freq = {};
  let maxCount = 0, maxItem;
  for (let item of arr) {
    freq[item] = (freq[item] || 0) + 1;
    if (freq[item] > maxCount) {
      maxCount = freq[item];
      maxItem = item;
    }
  }
  return `${maxItem} (${maxCount} times)`;
}

console.log(mostFrequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));
// "a (5 times)"






Q9

function swapCase(str) {
  return str.split('').map(c =>
    c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()
  ).join('');
}

console.log(swapCase('The Quick Brown Fox'));
// "tHE qUICK bROWN fOX"




Q10

let a = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7]
];

for (let i = 0; i < a.length; i++) {
  console.log(`row ${i}`);
  for (let j = 0; j < a[i].length; j++) {
    console.log(" " + a[i][j]);
  }
}





Q11

function sumOfSquares(arr) {
  return arr.reduce((sum, val) => sum + val * val, 0);
}
console.log(sumOfSquares([1, 2, 3])); // 1² + 2² + 3² = 14





Q12
function sumAndProduct(arr) {
  let sum = arr.reduce((a, b) => a + b, 0);
  let product = arr.reduce((a, b) => a * b, 1);
  return { sum, product };
}
console.log(sumAndProduct([1, 2, 3, 4]));




Q13

let arr = [];
arr.push("apple");
arr.push("banana");
arr.push("mango");
console.log(arr); // ["apple", "banana", "mango"]






Q14

function removeDuplicates(arr) {
  return [...new Set(arr.map(el => typeof el === "string" ? el.toLowerCase() : el))];
}
console.log(removeDuplicates(["Apple", "apple", "Banana", "banana", "APPLE"]));



Q15

const color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const o = ["th", "st", "nd", "rd"];

color.forEach((c, i) => {
  let suffix = o[(i + 1) % 10] || o[0];
  console.log(`${i + 1}${suffix} choice is ${c}.`);
});






Q16

function findLeapYears(start, end) {
  let result = [];
  for (let year = start; year <= end; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      result.push(year);
    }
  }
  return result;
}
console.log(findLeapYears(2000, 2025));



Q17

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
console.log(shuffle([1, 2, 3, 4, 5]));





Q18

function binarySearch(arr, target) {
  let low = 0, high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5, 7, 8, 9], 5)); // 4





Q19
function sumArrays(a1, a2) {
  let maxLength = Math.max(a1.length, a2.length);
  let result = [];
  for (let i = 0; i < maxLength; i++) {
    let val1 = a1[i] || 0;
    let val2 = a2[i] || 0;
    result.push(val1 + val2);
  }
  return result;
}
console.log(sumArrays([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13]));




Q20

function findDuplicates(arr) {
  let seen = new Set();
  let duplicates = new Set();
  for (let el of arr) {
    if (seen.has(el)) duplicates.add(el);
    seen.add(el);
  }
  return Array.from(duplicates);
}
console.log(findDuplicates([1, 2, 3, 2, 3, 4, 5, 1]));


Q21


function flatten(arr, shallow = false) {
  return shallow ? arr.flat(1) : arr.flat(Infinity);
}

console.log(flatten([1, [2], [3, [[4]]], [5, 6]]));       // [1, 2, 3, 4, 5, 6]
console.log(flatten([1, [2], [3, [[4]]], [5, 6]], true)); // [1, 2, 3, [[4]], 5, 6]




Q22

function union(arr1, arr2) {
  return Array.from(new Set([...arr1, ...arr2]));
}
console.log(union([1, 2, 3], [100, 2, 1, 10])); // [1, 2, 3, 100, 10]




Q23
function difference(arr1, arr2) {
  const flatArr2 = arr2.flat(Infinity);
  return arr1.filter(x => !flatArr2.includes(x))
             .concat(flatArr2.filter(x => !arr1.includes(x)));
}
console.log(difference([1, 2, 3], [100, 2, 1, 10]));




Q24

function cleanArray(arr) {
  return arr.filter(Boolean);
}
console.log(cleanArray([NaN, 0, 15, false, -22, '', undefined, 47, null]));
// [15, -22, 47]




Q25


let library = [
  { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
  { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
  { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
];

library.sort((a, b) => a.title.localeCompare(b.title));
console.log(library);



Q26
function findPair(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) return [i, j];
    }
  }
  return null;
}
console.log(findPair([10, 20, 10, 40, 50, 60, 70], 50)); // [2, 3]




Q27

function pluck(arr, key) {
  return arr.map(obj => obj[key]);
}
console.log(pluck([{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }], 'name'));

Q28
function longest_common_starting_substring(arr) {
  if (arr.length === 0) return '';
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    while (!arr[i].startsWith(result)) {
      result = result.slice(0, -1);
    }
  }
  return result;
}
console.log(longest_common_starting_substring(['go', 'google'])); // "go"



Q29
function num_string_range(start, end, step = 1) {
  let result = [];
  if (typeof start === 'number') {
    for (let i = start; i <= end; i += step) result.push(i);
  } else {
    for (let i = start.charCodeAt(0); i <= end.charCodeAt(0); i += step)
      result.push(String.fromCharCode(i));
  }
  return result;
}
console.log(num_string_range('a', 'z', 2)); // ['a', 'c', 'e', ...]




Q30
function merge_array(arr1, arr2) {
  return Array.from(new Set([...arr1, ...arr2]));
}
console.log(merge_array([1, 2, 3], [2, 30, 1])); // [1, 2, 3, 30]






Q31
function remove_array_element(arr, value) {
  return arr.filter(item => item !== value);
}
console.log(remove_array_element([2, 5, 9, 6], 5)); // [2, 9, 6]




Q32

function contains_element(arr, val) {
  return arr.includes(val);
}
console.log(contains_element([2, 5, 9, 6], 5)); // true










Q33

let arr = [1, 2, 3];
arr.length = 0;
console.log(arr); // []











Q34


function nthlargest(arr, n) {
  let sorted = arr.slice().sort((a, b) => b - a);
  return sorted[n - 1];
}
console.log(nthlargest([43, 56, 23, 89, 88, 90, 99, 652], 4)); // 89










Q35
function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
console.log(getRandomItem([10, 20, 30, 40]));







