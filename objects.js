// objects
// In array, we can't specify the properties of the value.
// To overcome this disadvantage in arrays. We have moved to objects
//def:-In objects, we store the data/ values in the form of key value pair
//2 diffrent ways to store data in objects.  using
//1. using object literals  2.using new keyword

//.1 using object literals
//syntax:-keyword object_name = {key:value};

var person={name:"divya",age:22,place:"Hyderabad"};
console.log(person)

//2.using new keyword
//syntax:-keyword object_name = new object();
var person = new Object();
person.name="chitti";
person.age=25;
person.height=5.8;
person.weight=60;
person.phoneno=6305078330;
person.place="Jarkhand";
console.log(person);
console.log(person.place)

//How to delete perticular property
//syntax:-delete object_name.property_name
delete person.phoneno;
console.log(person)

// Creating object
var car = {car1:{model:"Rolex",Price:5000000,color:"blue",
           car2:{model:"thar",Price:6000000,color:"white",
           car3:{model:"maruthi",Price:7000000,color:"red",}}}
           
         }
console.log(car)
console.log(car.car1.Price)
console.log(car.car1.car2.color)
console.log(car.car1.car2.car3.model)



// spread operator
// To spread the array elements we are using spread operator it is denoted by ...
//syntax:- var array_name =[1,2,3,4,5]
var arr1=[1,2,3,4,5]
console.log(arr1)
console.log(...arr1)

var arr2=[...arr1]
console.log(arr2)
console.log(...arr2)

//using spread operator in objects 
var person1={name:"chitti",age:25,place:"Jarkhand"}
console.log(person1)
// console.log(...person1)


var obj1={name:"divya",age:22}
var obj2={place:"hyderabad",height:5.6}
console.log(obj1);
console.log(obj2);
var obj3={...obj1,...obj2}
console.log(obj3)

//object within the object(nested object)
var chitti={name:"Chitti",age:25,place:"jharkhand"}
var divya={chitti}
console.log(divya)
// console.log(chitti)
// console.log(...chitti)


var favplace = {place1:"Ooty",place2:"Swizerland",place3:"Kerala",place4:"Kashmir"}
var favfood = {food1:"Biryani",food2:"Icecream",food3:"Shawarma",food4:"Waffels"}
var both = {...favplace,...favfood}
console.log(both)



//Task
//Create an object named student with properties:name, age, course, and marks.
var student = {name:"Chitti",age:22,cource:"PythonFullStack",marks:75};
console.log(student);
//Add a new property grade and modify the marks value.
student.grade = "B";
console.log(student);
student.marks = 50;
console.log(student);
//Use Object.keys() and Object.values() to display all property names and their values separately.
console.log(Object.keys(student));
console.log(Object.values(student));
//Use Object.entries() to print key–value pairs together in array format.
console.log(Object.entries(student));
//Create another object extraDetails with properties like city and rollNo,and merge it into the student object using Object.assign().
var extraDetails = {city:"Hyderabad",rollno:10};
console.log(Object.assign(student,extraDetails));
//Use Object.hasOwnProperty() to check if the student object has the property course and address.
console.log(Object.hasOwnProperty("name"));
console.log(Object.hasOwnProperty("cource"));
console.log(Object.hasOwnProperty("address"));
//making copy of student object
var frozenstudent = {...student};
console.log(frozenstudent);
console.log(Object.freeze(frozenstudent));
//after freezing trying to add,modify and delete properties 
frozenstudent.height = 5.8;       //adding
console.log(frozenstudent);
frozenstudent.name = "divya";     //modifying
console.log(frozenstudent);
delete frozenstudent.age;         //deleting
//Apply Object.seal() on another copy of the object and verify that:
var sealedstudent = {...frozenstudent};
console.log(Object.seal(sealedstudent));
sealedstudent.weight = 50;                 //adding
sealedstudent.cource = "javafullstack";     //modifying
console.log(sealedstudent);
delete sealedstudent.city;                   //deleting
console.log("Original Student:",student);
console.log("Frozen Student:",frozenstudent);
console.log("Sealed Student:",sealedstudent);
