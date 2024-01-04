// Setting this here because console.log is a pain
// to type each time compared to print.
let print = console.log;

///
// Arrays - Activity One
///

let favMusic = [
    "Judgment - Destination",
    "Paper Mario: The Origami King - Autumn Mountain Battle Theme",
    "Celeste - Mirror Temple B-Side"
];

print(favMusic);
favMusic.push("Crosscode - Raid", "Timesplitters 2 - Industrial Tileset");
print(favMusic);
favMusic.pop();
print(favMusic, "\n");

///
// Arrays - Activity Two
///

let numberList = [0.453,22.3123,923.119]
print( numberList.map(Math.floor), "\n" );


///
// Loops - Activity One
///

let favFilms = ["Toy Story", "Terminator 2", "Spiderverse"];
favFilms.push("Aladdin", "Grand Budapest Hotel");
for (film of favFilms) print(film);
print("");

///
// Loops - Activity Two
///

for (i=0; i < 6; i++) print(Math.ceil(Math.random()*50));
print("");

///
// Loops - Activity Three
///

for (i = 9; i>=0; i--) print(i);
print("");

///
// Loops - Activity Four
///

if (favFilms[2] == "Ghostbusters") print("Ghostbusters is in third place.");
else print("The third film is not Ghostbusters.");
print("");

///
// Loops - Activity Five
///

for (i=0; i<6; i++) {
    let randNum = Math.ceil(Math.random()*30);
    if (randNum % 7 == 0) print(`${randNum} is divisible by 7`);
    else print(`${randNum} is NOT divisible by 7`);
}
print("");

///
// Loops - Activity Six
///

bobsFollowers = ["Alice", "Tony", "Frank", "Jess"];
hannahsFollowers = ["Bob", "Alice", "Tony", "Malcolm"];

for (bobFollower of bobsFollowers) {
    for (hanFollower of hannahsFollowers) {
        if (bobFollower == hanFollower) print(bobFollower, "follows Bob and Hannah");
    }
}
print("");

///
// Loops - Activity Seven
///

// A For Loop's constructor can create, check the condition of and, after each loop, change the value of a variable, so it can be more manageable and self-contained than a while loop.
// The following loop will run 5 times, with i starting with a value of 0
// and incrementing by two after each step.

for (i=0; i < 10; i+=2) print(i);
print("");

// A For loop can also be run over an array, for example "for (item in list)" or "for (item of list)". 
// "in" returns the position of each item, and "of" returns the item itself.

let list = ["a", "b", "c"]
for (position in list) print(position);
print("");
for (item of list) print(item);
print("");

// A While Loop will normally run until the condition in its constructor is NOT met.

let value = 0;
while (value < 3) {
    value++;
    print(value);
}
print("");

// A Do While Loop works similarly to a while loop, except it will always run at least once.

do print(value);
while (value < 3);
