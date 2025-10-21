//Task 1: Character Finder
//charAt(),charCode(),at() methods
var string = "JavaScript";
var character = string.charAt(4);
console.log("Character at 4th index is: ",character);
var asciivalue = string.charCodeAt(2);
console.log("ASCII value at 2: ",asciivalue);
var lastchar = string.at(-1);
console.log("Last character using at(): ",lastchar);

//Task 2: Combine & Search
// concat(), includes(), indexOf(), lastIndexOf() methods
var str1 = "Hello";
var str2 = "World";
var combined = str1.concat(" ",str2);
console.log("Combined String: ",combined);
var includeslo = combined.includes("lo");
console.log("Includes 'lo': ",includeslo);
var firstindex = combined.indexOf("l");
console.log("First indexof: ",firstindex);
var lastindex = combined.lastIndexOf("l");
console.log("Last index of l: ",lastindex);

// Task 3: Text Formatting
//toUpperCase(), toLowerCase(), trim(), trimStart(), trimEnd() methods
let str = ` JavaScript Methods `;
console.log("Original: ",str);
let trimmed = str.trim();
console.log("Trimmed: ",trimmed);
let uppercase = str.toUpperCase();
console.log("Uppercase: ",uppercase);
let lowercase = str.toLowerCase();
console.log("Lowercase: ",lowercase);
let trimstart = str.trimStart();
console.log('TrimStart: ',trimstart);
let trimend = str.trimEnd();
console.log("TrimEnd: ",trimend);

//Task 4: Extract Substrings
// slice(), substring() methods
let string1 = "Learning JavaScript is Fun!";
let slicedstr = string1.slice(9,19);
console.log("Using slice(): ",slicedstr);
let substring = string1.substring(0,8);
console.log("Using Substring(): ",substring);

//Task 5: Padding Magic
// padStart(), padEnd() methods
let string2 = "50";
let padstart = string2.padStart(5,"0");
console.log("PadStart(5,'0'): ",padstart);
let padend = string2.padEnd(10,"*");
console.log("PadEnd(10, '*'): ",padend);

//Task 6: Replace & Compare
//replace(), replaceAll(), localeCompare() methods
let string3 = "I love JavaScript, JavaScript is powerfull!";
let replace = string3.replace("JavaScript","JS");
console.log("After replace(): ",replace);
let replaceall = string3.replaceAll("JavaScript","JS");
console.log("After replaceAll(): ",replaceall);

let comparision = "apple".localeCompare("banana");
console.log("Compare 'apple' vs 'banana': ",comparision);

// Task 7: Mixed Operations (Mini Project)
function analyzeString(str){
    return{
        length: str.length,
        firstChar: str.charAt(0),
        lastChar: str.charAt(str.length-1),
        upperCase: str.toUpperCase(),
        lowerCase: str.toLowerCase(),
        includesJS: str.includes("JS"),
        sliced: str.slice(0,5),
        trimmed: str.trim()
    };
}

let result = analyzeString("   JS is awesome!   ");
console.log(result);
