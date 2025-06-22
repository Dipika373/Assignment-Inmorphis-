//1
function isFirstCharUpper(str) {
    return /^[A-Z]/.test(str);
  }
  console.log(isFirstCharUpper("Hello"));

  //2
  //3
  function validateEmail(email)
  {
    return /^[a-zA-Z0-9.+-%]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  }
  console.log(validateEmail("example@gmail.com"))
  //4
  function findDate(str) {
    return str.match(/\b\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}\b/);
  }
  console.log(findDate("The event is on 21/06/2025.")); 
  //5
  function customTrim(str) {
    return str.replace(/^\s+|\s+$/g, '');
  }
  console.log(customTrim("   Hello World!   ")); 

  //6
  function countWords(str) {
    return str.trim().replace(/\s+/g, ' ').split(' ').length;
  }
  console.log(countWords("  Hello   world \n today  ")); 
  //7
  function isValidIP(ip) {
    const pattern = /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/;
    return pattern.test(ip);
  }
  //8
  function countVowels(str) {
    return (str.match(/[aeiou]/gi) || []).length;
  }
  console.log(countVowels("United States")); // 5
    
  //9
  function isValidURL(str) {
    return /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,6})([\/\w.-])\/?$/.test(str);
  }
  console.log(isValidURL("https://example.com")); // true

  //10
  function isAlphaNumeric(str) {
    return /^[a-z0-9]+$/i.test(str);
  }
  console.log(isAlphaNumeric("abc123")); // true

  //11
  function isValidTimeWithSeconds(str) {
    return /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/.test(str);
  }
  
  console.log(isValidTimeWithSeconds("23:59:59"));
  //12
  function isUSZip(str) {
    return /^\d{5}(-\d{4})?$/.test(str);
  }
  console.log(isUSZip("12345-6789")); 
  //13
  function isUKPostCode(str) {
    return /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/i.test(str);
  }
  console.log(isUKPostCode("SW1A 1AA")); 

  //14
  function isCanadaPostCode(str) {
    return /^[A-Z]\d[A-Z] ?\d[A-Z]\d$/i.test(str);
  }
  console.log(isCanadaPostCode("K1A 0B1")); 
  //15
function isSSN(str) {
  return /^\d{3}-\d{2}-\d{4}$/.test(str);
}
console.log(isSSN("123-45-6789")); 
//16
function isHexadecimal(str) {
  return /^[0-9a-fA-F]+$/.test(str);
}
console.log(isHexadecimal("1A3F")); 
//17
function isHexColor(str) {
  return /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(str);
}
console.log(isHexColor("#fff")); 
//18
function isDomain(str) {
  return /^[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/.test(str);
}
console.log(isDomain("example.com")); 
//19
function isHTML(str) {
  return /<[^>]+>/.test(str);
}
console.log(isHTML("<div>Hello</div>")); 
//20
function hasAlphaDashUnderscore(str) {
  return /^[a-zA-Z-_]+$/.test(str);
}
console.log(hasAlphaDashUnderscore("user_name-Test")); 
//21 
function thousands_separators(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
console.log(thousands_separators(1000));      
console.log(thousands_separators(100000));