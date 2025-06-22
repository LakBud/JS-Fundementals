

console.log("Hello, World!");

// window.alert("Hello, World!");


document.getElementById("myh1").textContent = "What is the radius of the circle?";
document.getElementById("myP").textContent = "Please enter a number in the text box below and click the button to calculate the circumference of the circle.";

let x = 20;

console.log(20*x);

// let age = "hi!";

// console.log(typeof age);
// console.log("You are", age, "years old");
// 5
// 5let name = "John";  

let forsale = true;
console.log("Is the item for sale?", forsale);


let people = 25;

people --;
people += 5;
console.log("There are", people, "people in the room")


let username;

// Unprofessional way to get user input
// username = window.prompt("What is your name?");
// console.log("Hello", username, "!");



// document.getElementById("mysubmit").onclick = function() {
  //  username = document.getElementById("mytext").value;
    // console.log("Hello", username, "!");
// document.getElementById("myP").textContent = "Hello " + username + "!";
//}


// #5

//let age = window.prompt("What is your age?");

//age = Boolean(age);

//console.log(age, typeof age);

// #6 const is a permanent variable, good for security

const pi = 3.14;
let radius;
let circumference;


document.getElementById("mysubmit").onclick = function() {
  radius = document.getElementById("mytext").value;
  circumference = 2 * pi * radius;
  console.log("The circumference of the circle is", circumference);
  document.getElementById("myP").textContent = "The circumference of the circle is " + Math.round(circumference) + " cm.";
}

// #7 counting project                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
const decreaseBtn = document.getElementById("decreaseBtn");
const ResetBtn = document.getElementById("ResetBtn");
const IncreaseBtn = document.getElementById("IncreaseBtn");
const countlabel = document.getElementById("countlabel");
let count = 0;


decreaseBtn.onclick = function() {
  count--;
  countlabel.textContent = count;
}

ResetBtn.onclick = function() {
  count = 0;
  countlabel.textContent = count;
}

IncreaseBtn.onclick = function() {
  count++;
  countlabel.textContent = count;
}


// #8 random number generator

const myrandom = document.getElementById("myrandom");
const randomlabel = document.getElementById("randomlabel");
const min = 1;
const max = 6;
let RandomNumber;
myrandom.onclick = function() {
  RandomNumber = Math.floor(Math.random() * max) + min;
  randomlabel.textContent = "Your random number is: " + RandomNumber;

}

// #9 if-statements from the highest number to the lowest number

let myage = 18;
let HasLicense = false;

if(myage >= 18){
console.log("You are old enough to drive.");

if(HasLicense){
  console.log("You have a driver's license.");
}
else{
console.log("You do not have a driver's license.");

}


}
else {
console.log("You are not old enough to drive.");


}

// #10 Checked property of a checkbox
const mycheckbox = document.getElementById("mycheckbox");
const mychecksubmit = document.getElementById("mychecksubmit");
const radio1 = document.getElementById("radio1");
const radio2 = document.getElementById("radio2");

mychecksubmit.onclick = function() {
  if(mycheckbox.checked) {
    document.getElementById("mycheckp").textContent = "You have checked the box.";
  }
  else {
    document.getElementById("mycheckp").textContent = "You have NOT checked the box.";
  }

  if(radio1.checked) {
    document.getElementById("myradiop").textContent = "Radio 1 is selected.";
    radio2.checked = false;
  }
  else if(radio2.checked) {
    document.getElementById("myradiop").textContent = "Radio 2 is selected.";
    radio1.checked = false;
  }
  else {
    document.getElementById("myradiop").textContent = "No radio button selected.";
  }
}

// Ensure only one radio button can be checked at a time
radio1.onclick = function() {
  radio2.checked = false;
};
radio2.onclick = function() {
  radio1.checked = false;
};



// #11 Ternary operator
let age = 15;
let canVote = (age >= 18) ? "You can vote." : "You cannot vote.";
console.log(canVote);


// #12 Switch statement
let day = "piz"; // 1 = Monday, 2 = Tuesday, ..., 7 = Sunday
switch(day) {
  case 1:
    console.log("It's Monday.");
    break;
  case 2:
    console.log("It's Tuesday.");
    break;
  case 3:
    console.log("It's Wednesday.");
    break;
  case 4:
    console.log("It's Thursday.");
    break;
  case 5:
    console.log("It's Friday.");
    break;
  case 6:
    console.log("It's Saturday.");
    break;
  case 7:
    console.log("It's Sunday.");
    break;
  default:
    console.log(day,"is a invalid day number.");
}


let testScore = 85; // Example test score
switch(true){
case testScore >= 90:
  console.log("You got an A.");
  break;
  case testScore >= 80:
  console.log("You got an B.");
  break;
  case testScore >= 70:
  console.log("You got an C.");
  break;
  case testScore >= 60:
  console.log("You got an D.");
  break;
  case testScore >= 50:
  console.log("You got an F.");
  break;
  default:
  console.log("Unvalid grade.");


}

// #13 String methods

let myString = "Hello, World!";
console.log(myString.charAt(0)); 
console.log(myString.indexOf("World"));
console.log(myString.length);


// #14 string slicing

const email = "joe@outlook.com"

let name = email.slice(0, email.indexOf("@")); // "joe"
let extension = email.slice(email.indexOf("@") + 1); // "outlook.com"

console.log("Name:", name);
console.log("Extension:", extension);

// #15 Method chaining
let myText = "   Hello, World!   ";
let trimmedText = myText.trim().charAt(0).toUpperCase() + myText.trim().slice(1).toLowerCase();
console.log(trimmedText); 

// #16 logical operators
// Logical AND (&&), OR (||), NOT (!)

let adult = 85;

if(adult >= 18 && adult <= 65) {
console.log("You are an adult.");
}
else if(adult > 65 || adult < 18) {
console.log("You are not an adult.");
}

// #17 strict equality

// Strict equality (===) checks both value and type
// Loose equality (==) checks only value, not type
// inequality (!=) checks if values are not equal, ignoring type
// strict inequality (!==) checks if values are not equal and also checks type

let num1 = 5;
let num2 = 5;
if(num1 == num2) {
  console.log("The numbers are strictly equal.");
}
else {
  console.log("The numbers are NOT strictly equal.");
}

// #18 while loop = repeat until condition is false

// let loggedIn = false;
// username = window.prompt("What is your name?");
// password = window.prompt("What is your password?");
// while(!loggedIn) {
  //if(username === "admin" && password === "1234") 
   // {
     // loggedIn = true;
     // console.log("You are logged in as", username);
  //}
 // console.log("Incorrect username or password. Please try again.");
   // username = window.prompt("What is your name?");
    //password = window.prompt("What is your password?");
  //}
//}

// #19 for loop = repeat a block of code a certain number of times

for(let i = 0; i < 20; i++) {

if(i == 10) {
    break;
  }
else {
    console.log("The number is", i);
  }

}

// #20 NUMBER GUESSING GAME
// const minNumber = 1;
// const maxNumber = 100;
// const answer = Math.floor(Math.random()* (maxNumber - minNumber + 1) + minNumber);

// let attempts = 0;
// let guess;
// let running = true;

// while(running){

//   guess = window.prompt("Guess a number between " + minNumber + " and " + maxNumber + ":");
//   guess = Number(guess);

//   if(isNaN(guess)) {
//     window.alert("Please enter a valid number.");
//     continue; // Skip to the next iteration of the loop
//   }
//   else if(guess < minNumber || guess > maxNumber) {
//     window.alert("Please enter a number between " + minNumber + " and " + maxNumber + ".");
//     continue; // Skip to the next iteration of the loop
//   }
//   else{
//     attempts++;
//     if(guess < answer) {
//       window.alert("Your guess is too low. Try again.");
//     }
//     else if(guess > answer) {
//       window.alert("Your guess is too high. Try again.");
//     }
//     else {
//       window.alert("Congratulations! You guessed the number " + answer + " in " + attempts + " attempts.");
//       running = false; // End the game
//     }


//   }

//   if(attempts >= 10) {
//     window.alert("Sorry, you've used all your attempts. The correct number was " + answer + ".");
//     running = false; // End the game
//   }
// }


// console.log("The answer is", answer); // For testing purposes, you can see the answer



// #21 functions

function greetUser(name, age) {
  console.log("Hello, " + name + "!");
  console.log("You are " + age + " years old.");
}

greetUser("Alice", 30);

// variable scope local = only accessible within the function, global = accessible everywhere

// #22 project temperature conversion

const textBox = document.getElementById("textBox");
const toFarenheit = document.getElementById("toFarenheit");
const toCelcius = document.getElementById("toCelcius");
let temp;

function convert() {

  if(toFarenheit.checked){
    temp = Number(textBox.value);
    temp = temp * 9/5 + 32; // Convert to Fahrenheit
    document.getElementById("result").textContent = "The temperature in Fahrenheit is: " + temp.toFixed(1) + " °F";
  }
  else if(toCelcius.checked) {
    temp = Number(textBox.value);
    temp = temp - 32 * 5/9; // Convert to Celcius
    document.getElementById("result").textContent = "The temperature in Fahrenheit is: " + temp.toFixed(1) + " °F";
  }
  else {
    document.getElementById("result").textContent = "Please select a conversion option.";
    return;
  }
}


// #23 Arrays 
// Arrays are used to store multiple values in a single variable
// They can hold any type of data, including numbers, strings, and even other arrays

let fruits = ["apple", "banana", "cherry", "coconut"];

// fruits[2] = "coconut"; // Change the  elements in array
// console.log(fruits[0]); 
// fruits.push("orange"); // Add a new element to the end of the array
// fruits.pop(); 
// fruits.unshift("Mango"); 
// fruits.shift();                                                                                   
// let numOfFruits = fruits.length;
// let index = fruits.indexOf("apple");

// fruits.sort().reverse();

// for(let fruit of fruits){
 // console.log(fruits);
// }


// #24 spread operator = ... allows an array or string to be expanded into seperate elements

let vegetables = ["carrots", "celery", "potato"]

let foods = [... fruits, ...vegetables, "eggs", "milk"]

console.log(foods)


// #25 rest parameters (..rest) allow a function work with a variable number of arguments by bundling them into an array.
// spread = expands an array into seperate elements
// rest = bundles seperate elements into an array

// 1
function sum(...numbers){

  let result = 0;
  for(let number of numbers){
    result += number;


  }
  return result;
}

// 2
function getAverage(...numbers){

  let result = 0;
  for(let number of numbers){
    result += number;


  }
  return result / numbers.length;
}


const total = getAverage(75, 100, 85);
console.log(total);

// 3

function combineStrings(...strings){
  return strings.join(" ");
}
const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "111");
console.log(fullName)

// #26 Random Password Generator

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){

const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789"
const symbolChars = "!@#$%^&*()_+-=[]{}|;:',.<>/?`~";

let allowedChars = "";
let password = "";

allowedChars += includeLowercase ? lowercaseChars : "";
allowedChars += includeUppercase ? uppercaseChars : "";
allowedChars += includeNumbers ? numberChars : "";
allowedChars += includeSymbols ? symbolChars : "";


if (length < 1) {
  return "Password length must be at least 1";
}
if (allowedChars.length === 0) {
  return "At least 1 set of characters needs to be selected";
}
for (let i = 0; i < length; i++) {
  const randomIndex = Math.floor(Math.random() * allowedChars.length);
  password += allowedChars[randomIndex];
}


return password;
}

const passwordLength = 12; // Set to a positive number for a valid password
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);

console.log("Generated Password:", password);


// #27 Callback
// makes functions after the function work by clarifying the reading process

//function fetchData(callback) {
  //setTimeout(function() {
    //console.log("Data loaded!");
    //callback();
  //}, 1000);
//}

//function processData() {
  //console.log("Processing data...");
//}

//fetchData(processData);

// #28 forEach() Calls the function for every item in the array in order.

let junk = ["pizza", "taco", "burger", "kebab"];

junk.forEach(capitalize);
junk.forEach(display);

function capitalize(element, index, array) {
  array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function display(element){
  console.log(element);
}

// #29 map() = forEach() but returns a new array

const students = ["Spongebob", "Patrick", "Squidward", "Sabdy"];
const studentsUpper = students.map(upperCase);

console.log(studentsUpper)

function upperCase(element){
  return element.toUpperCase();


}

// #30 filter() = creates a new array by filtering out elements

const words = ["apple", "orange", "banana", "kiwi", "pomegeanate", "coconut"];
const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);

console.log(shortWords);

function getShortWords(element){
  return element.length <= 6;
}
function getLongWords(element){
  return element.length > 6;
}

// #31 reduce() = reduce the elements of an array to a single value

const grades = [75, 50, 90, 80, 65, 95];

const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(minimum)

function getMax(accumulator, element){
  return Math.max(accumulator, element);
}
function getMin(accumulator, element){
  return Math.min(accumulator, element);
}

// #32 Function expression

// function declaration = define a reusable block of code that performs a specific task
function sayHello(name) {
  console.log("Hello, " + name + "!");
}

// function expressions = a way to define functions as values or variables
const sayGoodbye = function(name) {
  console.log("Goodbye, " + name + "!");
};

sayHello("Alice");
sayGoodbye("Bob");


// #33 Arrow functions = a concise way for function expressions, good for simple function you only use once. 
// (parameters) => some code

  // const hello = () => console.log("Hello");
  // setTimeout( () => console.log("Hello"), 3000);

  // const numbers = [1, 2, 3, 4, 5];
  // const squared = numbers.map(num => num * num);
  // console.log(squared);

// # 34 Object = key:value, function()

const person = {
  firstName: "Spongebob",
  lastName: "Squarepants",
  age: 30,
  isEmployed: true,
  sayHello: function() { console.log("Hi! I am spongebob")},
}

const person2 = {
  firstName: "Patrick",
  lastName: "Star",
  age: 40,
  isEmployed: false,
  sayHello: () => console.log("Hi! I am patrick"),
  
}

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.isEmployed);
person.sayHello();

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayHello();


// #35 this = reference to the object where THIS is used (depends on context)
// person.name = this.name

const person3 = {
  name: "Max",
  favFood: "Hamburgers",
  sayHello: () => console.log("Hi! I am", this.name),
  sayHello: function() { console.log("Hi! I am spongebob")},
}

// #36 constructor = special method for defining the properties and methods of objects

function Car(make, model, year, color){
  this.make = make,
  this.model = model,
  this.year = year,
  this.color = color
  this.drive = function(){console.log("You drive the", this.model)}
} 

const car1 = new Car("Mustang", "Ferarri", 2024, "red");
const car2 = new Car("Lamborghini", "Hurricane", 2022, "yellow");
const car3 = new Car("Ferrari", "9/11", 2020, "silver");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);

console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);

car1.drive();
car2.drive();
car3.drive();

// #37 Classes

class Product{
  constructor(name, price){

    this.name = name;
    this.price = price;
  }
  displayProduct(){
    console.log("Product:", this.name)
    console.log("Price: $", this.price.toFixed(2))
  }
  calculateTotal(salesTax){
    return this.price + (this.price * salesTax);
  }
}

const salesTax = 0.05;

const product1 = new Product("Headphones", 25.99)
const product2 = new Product("Scarf", 11.99)
const product3 = new Product("Hoodie", 6.99)

product1.displayProduct();  

const priceTotal = product1.calculateTotal(salesTax);
console.log("Total price with tax: $", priceTotal.toFixed(2));

// #38 static = class owns anything static, not the objects

class User{

  static UserCount = 0;

  constructor(username){

    this.username = username;
    User.UserCount++;
  }

  static getUserCount(){
    console.log("There are:", User.UserCount, "users online")
  }
  sayHello(){
    console.log("my username is", this.username)
  }
}

const user1 = new User("Shamikh");
const user2 = new User("Rehan");
const user3 = new User("Haroon");

user1.sayHello();
user2.sayHello();
user3.sayHello();

User.getUserCount();

// #39 Inheritance = allows a new class to inherit properties and methods
//                   from an existing class (parent -> child)

class Animal{ // parent
  
  
  alive = true;

  eat(){
    console.log("This", this.name, "is eating")
  }
  sleep(){
    console.log("This", this.name, "is sleeping")
  }
}

class Rabbit extends Animal{ //The child class extends to the parent class where it can have its own unique properties aswell
  name = "Rabbit";

  run(){
    console.log(this.name, "is running.");
  }
}

class Fish extends Animal{ 
  name = "Fish";
   swim(){
    console.log(this.name, "is swimming.");
  }
}

class Hawk extends Animal{ 
  name = "Hawk";
   fly(){
    console.log(this.name, "is flying.");
  }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
fish.swim();
rabbit.run();
hawk.fly();

// #40 super = used in calles to call the constructor or access the properties andm ethods of a parent (superclass)
// this = this object
// super = the parent

class Animal1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  move(speed) {
    console.log(`${this.name} moves at ${speed} km/h.`);
  }
}

class Bug extends Animal1 {
  constructor(name, age, runSpeed) {
    super(name, age);
    this.runSpeed = runSpeed;
  }
  move() {
    super.move(this.runSpeed);
  }
}

class Shark extends Animal1 {
  constructor(name, age, swimSpeed) {
    super(name, age);
    this.swimSpeed = swimSpeed;
  }
  move() {
    super.move(this.swimSpeed);
  }
}

class Bird extends Animal1 {
  constructor(name, age, flySpeed) {
    super(name, age);
    this.flySpeed = flySpeed;
  }
  move() {
    super.move(this.flySpeed);
  }
}

const bug = new Bug("Bug", 1, 25);
const shark = new Shark("Shark", 2, 12);
const bird = new Bird("Bird", 2, 20);

bug.move();
shark.move();
bird.move();

console.log(bug.name, bug.age, bug.runSpeed);
console.log(shark.name, shark.age, shark.swimSpeed);
console.log(bird.name, bird.age, bird.flySpeed);

// #41 Getters and Setters 


// 1
class Rectangle{

  constructor(width, height){

    this.width = width;
    this.height = height;
  }

  set width(newwidth){
    if(newwidth > 0){
      this._width = newwidth
    }
    else{
      console.error("Width must be a positive number")
    }
  }

  set height(newheight){
    if(newheight > 0){
      this._height = newheight
    }
    else{
      console.error("Height must be a positive number")
    }
  }

  get width(){
    return this._width.toFixed(1), "cm";
  }
   get height(){
    return this._height.toFixed(1), "cm";
  }

  get area(){
    return this._width * this._height.toFixed(1), "cm^2";
  }
}

const rectangle = new Rectangle(3, 8);


console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);


// 2

class Person1{

  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  set firstName(newFirstName){
    if (typeof newFirstName === "string" && newFirstName.length > 0) {
      this._firstName = newFirstName;
    } else {
      console.error("First name must be a non-empty string");
    }
  }

  set lastName(newLastName){
    if (typeof newLastName === "string" && newLastName.length > 0) {
      this._lastName = newLastName;
    } else {
      console.error("Last name must be a non-empty string");
    }
  }

  set age(newAge){
    if(typeof newAge === "number" && newAge >= 0){
      this._age = newAge;
    }
    else{ 
      console.error("Age must be a non-negative number");
    }
  }

  get firstName(){
    return this._firstName;
  }
  get lastName(){
    return this._lastName;
  }
  get fullName(){
    return this._firstName + " " + this._lastName;
  }
  get age(){
    return this._age;
  }
}

const person1 = new Person1("spongebob", "squarepants", 30);
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.fullName);
console.log(person1.age);

// #42 destructuring = extract values from arrays and objects, then assign them to variables in a convenient way. [] = for array / {} = for object

const colors = ["red", "green", "blue", "black", "white"];



//2 [colors[0], colors[4]] = [colors[4], colors[0]]
//3 const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

//5
function displayPerson({ firstName, lastName, age, job="Unemployed" }) {
  console.log("name: ", firstName, lastName);
  console.log("age: ", age);
  console.log("job: ", job);
}

const shamikh = {
  firstName: "Shamikh",
  lastName:  "Pasha",
  age: 30,
  job: "McDonalds Worker",
}
const rehan = {
  firstName: "Rehan",
  lastName: "Ashan",
  age: 34,
}

displayPerson(shamikh)

//4 const { firstName: p2FirstName, lastName: p2LastName, age: p2Age, job: p2Job = "Unemployed" } = person2;

//console.log(firstColor);

// #43 Nested objects = objects inside objects


class people6{
  constructor(name, age1, hobby, ...address){
    this.name = name ;
    this.age1 = age1;
    this.hobby = hobby;
    this.address = new Address(...address);

  }


}

class Address{

  constructor(street, city, country){
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

const haroon = new people6("Haroon Ahsan", 30, "Døgne Minecraft", "124 Conch St.", "Georgia", "USA");

console.log(haroon.address)


// #44 Arrays of objects

const fruits1 = [
  { name: "Apple", color: "Red", quantity: 10 },
  { name: "Banana", color: "Yellow", quantity: 5 },
  { name: "Orange", color: "Orange", quantity: 8 },
  { name: "Grapes", color: "Purple", quantity: 15 },
  { name: "Mango", color: "Yellow", quantity: 3 }
];

//fruits1.forEach(fruit => console.log(fruit));

const lowCuantityFruits = fruits1.filter(fruit => fruit.quantity >= 10);

console.log(lowCuantityFruits);

// #45 sort() = method to sort elements of an array in place.
//              Sorts elements as strings in lexicographic (alphabet + numbers + symbol) order

// 1

let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5];

numbers.sort((a, b) => a - b); // correct order
// numbers.sort((a, b) => b - a); reverse order

console.log(numbers);

// 2
const employers = [
  { name: "Alice", age: 32 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 40 },
  { name: "Diana", age: 28 }
];

// Sort by age (ascending)
employers.sort((a, b) => a.age - b.age);
console.log("Sorted by age:", employers);

// Sort by name (alphabetical)
employers.sort((a, b) => a.name.localeCompare(b.name));
console.log("Sorted by name:", employers);

// #46 Date objects = Objects that contain values that represent date and times (can be changed/formatted)

// Date(year, month, hour, minute, second, ms)

const date = new Date(2025, 2, 4, 8, 1, 5);

console.log(date);

// #47 closure = A function defined inside of another function.
//               The inner function has access to the variables and scope of the outer function.

function createPointSystem() {
  let points = 0;

  function addPoints(amount) {
    points += amount;
    console.log(`Added ${amount} points. Total: ${points}`);
  }

  function subtractPoints(amount) {
    points -= amount;
    if (points < 0) points = 0;
    console.log(`Subtracted ${amount} points. Total: ${points}`);
  }

  function getPoints() {
    return points;
  }

  return { addPoints, subtractPoints, getPoints };
}

const pointSystem = createPointSystem();
pointSystem.addPoints(10);
pointSystem.addPoints(5);
pointSystem.subtractPoints(3);
console.log("Current points:", pointSystem.getPoints());

// #48 setTimeput() = allows you to schedule the execution of a function after a amount of time
//                    setTimeput(callback, delay);
// clearTimepout(timeoutId) = can cancel a timeout before it triggers

let timeoutId;

function startTimer(){
  timeoutId = setTimeout(() => window.alert("Hello"), 3000);
  console.log("STARTED");
}

function clearTimer(){
  clearTimeout(timeoutId);
  console.log("CLEARED");
}

// #49 DIGITAL CLOCK PROGRAM

function updateClock(){

  const now = new Date();
  const hours = now.getHours().toString().padStart(2, 0);
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const seconds = now.getSeconds().toString().padStart(2, 0);
  const timeString = `${hours}:${minutes}:${seconds}` 
  document.getElementById("clock").textContent = timeString;

}
updateClock();
setInterval(updateClock, 1000);

// #51 export const PI = 3.14;


// #52 Synchronous = Executes line by line consecutively in a sequential manner
//                   Code that waits for an operation to complete.

console.log("Task1 1");
console.log("Task1 2");
console.log("Task1 3");

// Asynchronus = Allows multiple operations to be performed concurrently without
//               waiting, Doesnt block execution flow and continues. 
// (Callback, Promises, Async/Await)


function func1(callback){
setTimeout(() => {console.log("Task2 1"); callback()}, 0);
}

function func2(){
console.log("Task2 2");
console.log("Task2 3");
console.log("Task2 4");
}

func1(func2);


// #53 Error = Represents a problem. User input or connection issues
// try {} = enclose code that might cause an error
// catch {} = Catch and handle any thrown errors from try{}
// finally {} = Always executes. Used for clean up (optional)

try {
  console.log(æ)

}
catch(error){
  console.error(error);
}
finally{
  console.log("Execute");
}


console.log("We killed æ!")









