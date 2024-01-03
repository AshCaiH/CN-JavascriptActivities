///
// Activity One
///

let userName = "Alice"
let userAge = 32;
let userColour = "Orange";

console.log(`My name is ${userName}. I am ${userAge} years old. My favourite colour is ${userColour}.`);

userName = "Bill"
userAge = 27;
userColour = "Green";

console.log(`My name is ${userName}. I am ${userAge} years old. My favourite colour is ${userColour}.\n`);

///
// Activity Two
///

let breakfast = "Corn flakes"
let dinner = "A Sandwich";
let tea = "Pizza";

console.log(`Today I ate ${breakfast.toLowerCase()} for breakfast, ${dinner.toLowerCase()} for dinner and I will eat ${tea.toLowerCase()} for tea`);

breakfast = "Weetabix"
dinner = "Noodles";
tea = "Curry";

console.log(`Tomorrow I will eat ${breakfast.toLowerCase()} for breakfast, ${dinner.toLowerCase()} for dinner and ${tea.toLowerCase()} for tea\n`);

///
// Activity Three
///

let birthday = new Date("August 10, 2024 10:00:00")
let msInADay = 1000 * 60 * 60 * 24;
let daysTilBday = (birthday - Date.now()) / msInADay;
console.log (`There are ${Math.floor(daysTilBday)} days before my next birthday.\n`);

///
// Activity Four
///

let cells = "xo xx o  "; // Set the intended contents of each cell.

for (let i=1; i < 12; i++) {
    if (i % 4 == 0) { // Do this every 4th line.
        console.log( "-----------" ); 
    } else if ((i - 2) % 4 == 0) { // Do this every 4th line from line 2 onwards.
        let position = (i - 2) / 4 * 3; 
        console.log( ` ${cells[position]} | ${cells[position+1]} | ${cells[position+2]} ` );
    } else {
        console.log( "   |   |   " );
    }
}