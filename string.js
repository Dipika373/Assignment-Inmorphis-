q1
function is_string(input) {
  return typeof input === 'string';
}

// Test
console.log(is_string('w3resource')); // true
console.log(is_string([1, 2, 4, 0])); // false

Q2
function is_Blank(str) {
  return str.length === 0;
}

// Test
console.log(is_Blank(''));     // true
console.log(is_Blank('abc'));  // false


Q3
function string_to_array(str) {
  return str.trim().split(" ");
}

// Test
console.log(string_to_array("Robin Singh")); // ["Robin", "Singh"]


Q4
function truncate_string(str, num) {
  return str.slice(0, num);
}

// Test
console.log(truncate_string("Robin Singh", 4)); // "Robi"


Q5
function abbrev_name(name) {
  const parts = name.split(" ");
  return parts[0] + " " + parts[1][0] + ".";
}

// Test
console.log(abbrev_name("Robin Singh")); // "Robin S."




Q6

function protect_email(email) {
  const parts = email.split("@");
  return parts[0].slice(0, 5) + "...@" + parts[1];
}

// Test
console.log(protect_email("robin_singh@example.com")); // "robin...@example.com"




Q7
function string_parameterize(str) {
  return str.toLowerCase().replace(/\s+/g, '-').replace(/\W+/g, '');
}

// Test
console.log(string_parameterize("Robin Singh from USA.")); // "robin-singh-from-usa"


Q8

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Test
console.log(capitalize('js string exercises')); // "Js string exercises"




Q9
function capitalize_Words(str) {
  return str.split(" ").map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(" ");
}

// Test
console.log(capitalize_Words('js string exercises')); // "Js String Exercises"




Q10
function swapcase(str) {
  return str.split('').map(char =>
    char === char.toUpperCase()
      ? char.toLowerCase()
      : char.toUpperCase()
  ).join('');
}

// Test
console.log(swapcase('AaBbc')); // "aAbBC"





Q11
function camelize(str) {
  return str.replace(/\W+(.)/g, (match, chr) => chr.toUpperCase());
}

console.log(camelize("JavaScript Exercises")); // "JavaScriptExercises"





Q12
function uncamelize(str, separator = ' ') {
  return str.replace(/([a-z])([A-Z])/g, '$1' + separator + '$2').toLowerCase();
}

console.log(uncamelize('helloWorld'));      // "hello world"
console.log(uncamelize('helloWorld','-'));  // "hello-world"
console.log(uncamelize('helloWorld','_'));  // "hello_world"



Q13

function repeat(str, n = 1) {
  return str.repeat(n);
}

console.log(repeat('Ha!'));     // "Ha!"
console.log(repeat('Ha!', 2));  // "Ha!Ha!"
console.log(repeat('Ha!', 3));  // "Ha!Ha!Ha!"



Q14
function insert(str, insertStr, position = 0) {
  return str.slice(0, position) + insertStr + str.slice(position);
}

console.log(insert('We are doing some exercises.'));
console.log(insert('We are doing some exercises.', 'JavaScript '));
console.log(insert('We are doing some exercises.', 'JavaScript ', 18));




Q15
function humanize_format(num) {
  if (num === undefined) return;
  const suffix = ['th', 'st', 'nd', 'rd'],
        v = num % 100;
  return num + (suffix[(v - 20) % 10] || suffix[v] || suffix[0]);
}

console.log(humanize_format(1));   // "1st"
console.log(humanize_format(8));   // "8th"
console.log(humanize_format(301)); // "301st"
console.log(humanize_format(402)); // "402nd"



Q16

function text_truncate(str, length = str.length, ending = '...') {
  return str.length > length ? str.slice(0, length - ending.length) + ending : str;
}

console.log(text_truncate('We are doing JS string exercises.'));
console.log(text_truncate('We are doing JS string exercises.', 19));
console.log(text_truncate('We are doing JS string exercises.', 15, '!!'));


Q17

function string_chop(str, size = str.length) {
  const chunks = [];
  for (let i = 0; i < str.length; i += size) {
    chunks.push(str.slice(i, i + size));
  }
  return chunks;
}

console.log(string_chop('w3resource'));
console.log(string_chop('w3resource', 2));
console.log(string_chop('w3resource', 3));


Q18

function count(mainStr, subStr, caseSensitive = true) {
  if (!caseSensitive) {
    mainStr = mainStr.toLowerCase();
    subStr = subStr.toLowerCase();
  }
  return mainStr.split(subStr).length - 1;
}

console.log(count("The quick brown fox jumps over the lazy dog", 'the')); // 2
console.log(count("The quick brown fox jumps over the lazy dog", 'fox', false)); // 1



Q19
function escape_HTML(str) {
  return str.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
}

console.log(escape_HTML('<a href="test" target="_blank">'));
// "&lt;a href=&quot;test&quot; target=&quot;_blank&quot;&gt;"





Q20
function formatted_string(mask, str, side = 'r') {
  str = str.toString();
  if (side === 'l') {
    return (mask + str).slice(-mask.length);
  } else {
    return (str + mask).substring(0, mask.length);
  }
}

console.log(formatted_string('0000', 123, 'l')); // "0123"
console.log(formatted_string('00000000', 123));  // "12300000"




Q21
function repeat_string(str, count) {
  if (typeof str !== 'string' || typeof count !== 'number') {
    return "Error in string or count.";
  }
  return str.repeat(count);
}

console.log(repeat_string('a', 4)); // "aaaa"
console.log(repeat_string('a'));    // "Error in string or count."






Q22
function subStrAfterChars(str, char, pos) {
  if (pos === 'b') {
    return str.substring(str.lastIndexOf(char) + 1);
  } else {
    return str.substring(0, str.indexOf(char));
  }
}

console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':', 'a')); // "w3resource"
console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E', 'b')); // "xercises"



Q23
function strip(str) {
  return str.trim();
}

console.log(strip('w3resource '));   // "w3resource"
console.log(strip(' w3resource'));   // "w3resource"
console.log(strip(' w3resource '));  // "w3resource"


Q24
function truncate(str, n) {
  return str.split(" ").slice(0, n).join(" ");
}

console.log(truncate('The quick brown fox jumps over the lazy dog', 4)); 
// "The quick brown fox"



Q25
function alphabetize_string(str) {
  return str.replace(/\s/g, '').split('').sort().join('');
}

console.log(alphabetize_string('United States')); // "SUadeeinsttt"



Q26
function remove_first_occurrence(str, search) {
  return str.replace(search, '');
}

console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));




Q27

function ascii_to_hexa(str) {
  return str.split('').map(char => char.charCodeAt(0).toString(16)).join('');
}

console.log(ascii_to_hexa('12'));  // "3132"
console.log(ascii_to_hexa('100')); // "313030"


Q28

function hex_to_ascii(hexStr) {
  let result = '';
  for (let i = 0; i < hexStr.length; i += 2) {
    result += String.fromCharCode(parseInt(hexStr.substr(i, 2), 16));
  }
  return result;
}

console.log(hex_to_ascii('3132'));   // "12"
console.log(hex_to_ascii('313030')); // "100"


Q29
function search_word(text, word) {
  const pattern = new RegExp('\\b' + word + '\\b', 'gi');
  const matches = text.match(pattern);
  const count = matches ? matches.length : 0;
  return `'${word}' was found ${count} times.`;
}

console.log(search_word('The quick brown fox', 'fox'));
console.log(search_word('aa, bb, cc, dd, aa', 'aa'));




Q30

function string_endsWith(str, suffix) {
  return str.endsWith(suffix);
}

console.log(string_endsWith('JS PHP PYTHON','PYTHON')); // true
console.log(string_endsWith('JS PHP PYTHON',''));       // false



Q31

function escape_html(str) {
  return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/'/g, '&#39;')
            .replace(/"/g, '&quot;');
}

console.log(escape_html('PHP & MySQL')); // "PHP &amp; MySQL"
console.log(escape_html('3 > 2'));       // "3 &gt; 2"




Q32 
function remove_non_ascii(str) {
  return str.replace(/[^\x20-\x7E]/g, '');
}

console.log(remove_non_ascii('äÄçÇéÉêPHP-MySQLöÖÐþúÚ')); // "PHP-MySQL"






Q33
function remove_non_word(str) {
  return str.replace(/[^\w\s-]/g, '');
}

console.log(remove_non_word('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL'));
// "PHP - MySQL"






Q34
function sentenceCase(str) {
  return str.toLowerCase().replace(/(^\w|\.\s*\w)/g, c => c.toUpperCase());
}

console.log(sentenceCase('PHP exercises. python exercises.'));
// "Php Exercises. Python Exercises."




Q35
function strip_html_tags(str) {
  return str.replace(/<[^>]*>/g, '');
}

console.log(strip_html_tags('<p><strong><em>PHP Exercises</em></strong></p>'));
// "PHP Exercises"




Q36
function zeroFill(number, width, sign = '') {
  let numStr = Math.abs(number).toString().padStart(width, '0');
  return (sign === '-' && number >= 0 ? '+' : number < 0 ? '-' : '') + numStr;
}

console.log(zeroFill(120, 5, '-')); // "+00120"
console.log(zeroFill(29, 4));       // "0029"




Q37
function compare_strings(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase();
}

console.log(compare_strings('abcd', 'AbcD')); // true
console.log(compare_strings('ABCD', 'Abce')); // false




Q38
function case_insensitive_search(text, word) {
  return text.toLowerCase().includes(word.toLowerCase()) ? "Matched" : "Not Matched";
}

console.log(case_insensitive_search('JavaScript Exercises', 'exercises'));   // "Matched"
console.log(case_insensitive_search('JavaScript Exercises', 'Exercises'));   // "Matched"
console.log(case_insensitive_search('JavaScript Exercises', 'Exercisess'));  // "Not Matched"
