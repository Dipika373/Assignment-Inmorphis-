Q1
function isBoolean(val) {
  return typeof val === "boolean";
}

console.log(isBoolean(true));   // true
console.log(isBoolean("true")); // false




Q2
function isError(val) {
  return val instanceof Error;
}

console.log(isError(new Error("Oops"))); // true
console.log(isError("Error"));           // false




Q3
function isNaNValue(val) {
  return typeof val === "number" && isNaN(val);
}

console.log(isNaNValue(NaN));   // true
console.log(isNaNValue("NaN")); // false




Q4
function isNull(val) {
  return val === null;
}

console.log(isNull(null));   // true
console.log(isNull("null")); // false






Q5
function isNumber(val) {
  return typeof val === "number" && !isNaN(val);
}

console.log(isNumber(123));    // true
console.log(isNumber(NaN));    // false
console.log(isNumber("123"));  // false

Q6
function isObject(val) {
  return val !== null && typeof val === "object";
}

console.log(isObject({}));       // true
console.log(isObject(null));     // false
console.log(isObject([]));       // true (because array is also object)



Q7
function isPlainObject(val) {
  return Object.prototype.toString.call(val) === "[object Object]";
}

console.log(isPlainObject({}));        // true
console.log(isPlainObject([]));        // false
console.log(isPlainObject(new Date())); // false



Q8
function isRegExp(val) {
  return Object.prototype.toString.call(val) === "[object RegExp]";
}

console.log(isRegExp(/abc/));           // true
console.log(isRegExp("abc"));           // false



Q9
function isChar(val) {
  return typeof val === "string" && val.length === 1;
}

console.log(isChar("A"));  // true
console.log(isChar("AB")); // false





Q10
function areSameType(val1, val2) {
  return typeof val1 === typeof val2;
}

console.log(areSameType(123, 456));        // true
console.log(areSameType("abc", false));    // false
