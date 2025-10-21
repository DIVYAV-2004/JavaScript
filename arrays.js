// Array is a collection of heterogenious elements used to store the data
// In variables memory is alocating more/repetation will happen.
// so to overcome this disadvantage we have moved to arrays
// syntax:- keyword array_name = [value]
var divya=["divya","chitti",22,5.6,true];
console.log(divya);

// Array Methods
// 1.push()
//used to push / add any element/data into an array. it will be added at last
// syntax:- array_name.push(element)
divya.push("smiley");
console.log(divya);
// 2.pop()
//here, we can remove the element,which is present at the last.
// syntax:- array_name.pop()
divya.pop();
console.log(divya);
// 3.unshift()
// here, it is used to add an element at first/starting index.
// syntax:- array_name.unshift()
divya.unshift("vijayawada");
console.log(divya);
// 4.shift()
//By using this method, we can remove the first index element.
// syntax:- array_name.shift()
divya.shift();
console.log(divya);
// 5.includes()
// it checks for the element whether it is present or not in the specified array
//the result will be displayed as boolean value
// syntax:- array_name.includes(element)
console.log(divya.includes(22));
// 6.indexOf()
//it is used to check the indexof the element
// syntax:- array_name.indexof(element)
console.log(divya.indexOf("chitti"));
// 7.length
//  it is used to check the length of an array
// syntax:- array_name.length
console.log(divya.length)
// 8.map()
// 9.filter()
// 10.reduce()

//Task
//1.Array Basics
//1. Create an array of 5 colors and print the second and last color.
var array1 = ["green","skyblue","white","pink","red"];
console.log(array1[1]);
console.log(array1[4]);
// 2. Create an array of numbers and replace the first element with 100.
var numbers = [10,20,30,40,50];
console.log(numbers);
numbers[0] = 100;
console.log(numbers);
// 3. Create an array with mixed data types (string, number, boolean). Print the type of each element using a loop.
let mixedArray = ["Divya",21,true,"Guntur",5.6,false];
console.log(mixedArray)
for (let i = 0; i < mixedArray.length; i++) {
    console.log(`Element: ${mixedArray[i]} | Type: ${typeof mixedArray[i]}`);
}
// 4. Create a nested array and print the inner array’s second element.
let nestedArray = [
    ["Apple","Mango","Banana"],
    [10,20,30],
    [true,false,false]
];
console.log("Second Element of first Inner Array: ",nestedArray[0][1]);
console.log("Second Element of Second Inner Array: ",nestedArray[1][1]);
console.log("Second Element of third Inner Array: ",nestedArray[2][1]);
// 5. Create an array using the Array constructor and display its length.
let fruits = new Array("Divya","Chitti","Cryso","Asha");
console.log("Array Elements: ", fruits);
console.log("Length of the Fruits Array: ", fruits.length);
// 2. push(), pop(), shift(), unshift()
// 6. Create an array of fruits and add one fruit at the end using push().
let fruits1 = ["Apple","Banana","Kiwi","Pineapple"];
console.log(fruits1);
fruits1.push("Jackfruit");
console.log(fruits1);
// 7. Remove the last element from the array using pop() and display the updated array.
fruits1.pop();
console.log(fruits1);
// 8. Add two new fruits at the beginning using unshift().
fruits1.unshift("Papaya");
fruits1.unshift("Grapes");
console.log(fruits1);
// 9. Remove the first element using shift() and print the new array.
fruits1.shift();
console.log(fruits1);
// 10. Use a combination of push() and pop() to keep only 3 elements in your array.
let arr = [];
arr.push(10)
arr.push(20)
arr.push(30)
arr.push(40)
console.log(arr)
arr.pop()
console.log(arr)
// 3. slice() and splice()
// 11. Create an array [10, 20, 30, 40, 50] and use slice() to extract [20, 30].
var chitti = [10, 20, 30, 40, 50]
console.log(chitti)
console.log(chitti.slice(1,3))
// 12. Using the same array, use splice() to replace 30 with 35.
let array = [10, 20, 30, 40, 50]
console.log(array)
array.splice(2,1,35)
console.log(array)
// 13. Insert 25 before 30 using splice().
var array1 = [10, 20, 30, 40, 50];
console.log(array1);
array1.splice(2,0,25);
console.log(array1);
// 14. Remove the last two elements using splice().
var array1 = [10, 20, 30, 40, 50];
array1.splice(-2,2);
console.log(array1);
// 15. Use slice() to copy the first three elements into a new array.
var divya = [10,20,30,40,50];
var newarr=divya.slice(0,3)
console.log(newarr)
// 4. concat(), join(), toString()
// 16. Create two arrays [1,2,3] and [4,5,6] and merge them using concat().
var array1 =  [1,2,3];
var array2 =  [4,5,6];
var array3=array1.concat(array2)
console.log(array3)
// 17. Convert an array of names into a string separated by commas using join().
var names = ["divya","chitti","Cryso","asha"];
var newstring = names.join(", ")
console.log(newstring)
// 18. Use toString() on an array and display the output.
var names = ["divya","chitti","Cryso","asha"];
var newstring = names.toString()
console.log(newstring)
// 19. Merge three arrays using concat() and find the length of the new array.
var array1 = [10,20,30];
var array2 = [40,50,60];
var array3 = [70,80,90];
array4=array1.concat(array2,array3);
console.log(array4);
console.log(array4.length);
// 20. Create an array of city names and join them using ' - ' as a separator.
var city = ["Hyderabad","Banglore","Pune","chennai"];
var newcity=city.join("-")
console.log(newcity)
// 5. Search Methods (indexOf, lastIndexOf, includes)
// 21. Create an array ['apple', 'banana', 'orange', 'banana', 'grape'] and find the first index of 'banana'.
var fruits2 = ['apple', 'banana', 'orange', 'banana', 'grape'];
var index = fruits2.indexOf("banana");
console.log(index);
// 22. Find the last index of 'banana' using lastIndexOf().
var index1 = fruits2.lastIndexOf("banana");
console.log(index1);
// 23. Check if 'mango' exists in the array using includes().
var hasmango = fruits2.includes("mango");
console.log(hasmango);
// 24. Write code to check if a specific number exists in an array, if not, push it.
var numbers = [10,20,40,50];
var exists = numbers.includes("30");
console.log(exists)
numbers.push("30");
console.log(numbers);
// 25. Use includes() to verify if 'kiwi' is present in your fruit array and print a message accordingly.
let fruits3 =["apple","banana","mango","kiwi","grapes"];
if (fruits3.includes("kiwi")){
    console.log("kiwi is present in the array");
}else{
    console.log("kiwi is not present in the array")
}
// 6. find() and findIndex()
// 26. Create an array [5, 12, 8, 130, 44] and find the first number greater than 10.
var num = [5, 12, 8, 130, 44];
var greaterthan10 = num.find(num=>num>10);
console.log(greaterthan10)
// 27. Use findIndex() to locate the position of the first element greater than 50.
var num = [5, 12, 8, 130, 44];
var greaterthan50 = num.findIndex(num=>num>50);
console.log(greaterthan50)
// 28. Find the first even number in an array using find().
var num = [5, 12, 8, 130, 44];
var evennum = num.find(num=>num%2==0);
console.log(evennum)
// 29. Find the index of the first odd number in an array using findIndex().
var num = [5, 12, 8, 130, 44];
var oddnum = num.find(num=>num%2!=0);
console.log(oddnum);
// 30. Use find() to search for a string longer than 5 characters in an array of words.
let words = ["apple", "banana", "cat", "elephant", "dog"];
let longchar = words.find(words=>words.length>5);
console.log(longchar)
// 7. sort(), reverse(), copyWithin(), flat()
// 31. Sort an array [5,3,8,1,2] in ascending order.
var numbers = [5,3,8,1,2];
numbers.sort();
console.log(numbers)
// 32. Reverse the sorted array and print it.
var numbers = [5,3,8,1,2];
var sortedarray = numbers.sort();
console.log(sortedarray);
var reversedarray = sortedarray.reverse();
console.log(reversedarray)
// 33. Use copyWithin() to copy first two elements to the end of an array [10,20,30,40,50].
let numbers1 = [10,20,30,40,50];
numbers1.copyWithin(3,0,2)             // targetIndex=3, start=0, end=2 (end not included)
console.log(numbers1);
// 34. Flatten a nested array ['a','b',['c','d'],['e',['f']]] using flat().
var nestedarray = ['a','b',['c','d'],['e',['f']]];
var newnestedarray = nestedarray.flat(2);
console.log(newnestedarray);
// 35. Use flat() with depth 2 to flatten ['x',['y',['z',['w']]]]].
var nested1 = ['x',['y',['z',['w']]]];
var newflat = nested1.flat(2);
console.log(newflat)
// 8. length, Destructuring & Misc
// 36. Create an array of 10 numbers and print its length.
var num1 = [1,2,3,4,5,6,7,8,9,10];
console.log(num1.length);
// 37. Remove the last element using pop() and print the new length.
num1.pop();
console.log(num1);
console.log(num1.length);
// 38. Use array destructuring to extract first three elements into variables.
var num2 = [3,4,5,6,7,8,9];
var [a,b,c] = num2;
console.log(a,b,c)
// 39. Create a constant array and modify one element (to show arrays are mutable).
const abc = [10,20,40,50];
abc[2] = 30;
console.log(abc)
// 40. Combine multiple array methods (push, splice, sort, reverse) to manipulate data dynamically.
let number1 = [10,5,8];
number1.push(12,3);
console.log("After pushing:",number1);
number1.splice(2,0,7);
console.log("After Slice:",number1);
number1.sort();
console.log("After sort:",number1);
number1.reverse();
console.log("After reverse:",number1);
