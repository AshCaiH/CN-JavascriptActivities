///
// Activity One
///

const age = 17;
const country = "UK";

if (age >= 18 && country == "UK") console.log("You are old enough to drink.\n");
else console.log("You may not be old enough to drink.\n");

///
// Activity Two
///

const topping = "chorizo";
switch (topping) {
    case "pepperoni":
    case "chorizo":
    case "tomato":
    case "goat's cheese":
        console.log(`Sure, you can put ${topping} on a pizza.\n`);
        break;
    case "egg":
    case "spaghetti":
    case "turnip":
        console.log(`You probably shouldn't put ${topping} on a pizza.\n`);
        break;
    default:
        console.log(`I have no opinion about putting ${topping} on a pizza.\n`);
}

///
// Activity Three
///

let password = "9043u5asd"
if (password.length < 8) console.log("Your password needs to be at least 8 characters long.\n");
else console.log("Password is valid\n");

let num = 13429415;
if (num % 3 == 0 || num % 5 == 0) console.log(`${num} is divisible by 3 or 5\n`); 
else console.log(`${num} is NOT divisible by 3 or 5\n`); 

///
// Activity Four
///

fizzbuzz = "";
if (num % 3 == 0) fizzbuzz += "fizz ";
if (num % 5 == 0) fizzbuzz += "buzz";
if (fizzbuzz.length > 0) console.log(fizzbuzz, "\n");
else console.log(num, "\n");

///
// Activity Five
///

num = 160061;
let mun = num.toString().split("").reverse().join("");
console.log(mun == num ? `${num} is a palindrome\n` : `${num} is NOT a palindrome\n`);

///
// Activity Six
///

let time = 8.5;

switch (true) {
    case ((8 <= time && time < 9) || (17 <= time && time < 18)):
        console.log("I am commuting\n");
        break;
    case ( time >= 9 && time < 17 ): 
        console.log("I am at work\n");
        break;
    default:
        console.log("I am at home\n");
}


///
// Activity Seven
///

let funnyString = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi".split("").reverse().join("");

let lastIndex = -1;
let lastLetter = "";

for (letter of ["a", "e", "i", "o", "u"]) {
    index = funnyString.length - funnyString.indexOf(letter);
    if (index > lastIndex) {
        lastIndex = index;
        lastLetter = letter;
    }
}

console.log("The last vowel is ", lastLetter, " at position ", lastIndex, "\n");

///
// Activity Eight
///

let myString = "seesaws"
console.log(myString, myString[0] == myString[myString.length-1], "\n")

///
// Activity Nine
///

let num1 = 309;
let num2 = 453;

if ((num1 + num2) % 2 == 0) console.log(num1 + num2);
else console.log(num1 * num2);