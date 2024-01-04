print = console.log;

const favColour = (colour) => {
    print(`My favourite colour is ${colour}`);
}

favColour("fluroescent beige");
print("");

///
// Activity One
///

const factorial = (n) => {
    if (n === 0 || n === 1) return 1;
    else return (n * factorial(n-1));
}

print(factorial(33), "\n");

///
// Activity Two
///

let orderCount = 0;

// "...param" lets you include as many arguments as you want.
const takeOrder = (...toppings) => {
    // Split off the last topping so it won't be included in the 
    // comma separated list, for grammatical reasons.
    let lastTopping = toppings.pop();
    // Make a string of the list of toppings (except the last).
    let toppingString = toppings.join(", ");

    // If there was more than one topping, add "and [last topping]" to the string.
    if (toppingString.length > 0) toppingString += ` and ${lastTopping}`
    // Otherwise just include the last (and only) topping by itself.
    else toppingString = lastTopping;
    
    print(`Pizza with ${toppingString}.`)
    orderCount++;
}

takeOrder("ham", "pineapple");
takeOrder("tuna", "sweetcorn", "peppers");
takeOrder("mozzarella");
takeOrder("goat cheese", "jalapenos", "pesto", "peppers", "tomato stuffed crust");
print(`There are currently ${orderCount} orders queued up.\n`);

///
// Activity Three
///

let myPin = "0451";
let myBalance = 599.06;
// The options correspond to the different buttons the user could press.
let options = [5, 10, 20, 50, 100, 500]; 

const withdraw = (pin, button) => {
    if (pin != myPin) {
        print("The entered PIN is incorrect. Please try again.");
        return;
    }

    let amtToWithdraw = options[button];
    if (typeof(amtToWithdraw) != "number") {
        print("You pressed a button that doesn't exist? Please try again.");
        return;
    }

    if (amtToWithdraw > myBalance) {
        print(`You do not have enough available balance to complete this withdrawal. (Tried to withdraw £${amtToWithdraw} but only £${myBalance} is available.)`);
        return;
    } else {
        // I have to fix the number to two decimal places, otherwise js
        // gives me numbers like 49.059999999999945.
        myBalance = (myBalance - amtToWithdraw).toFixed(2);
        print(`You successfully withdrew £${amtToWithdraw}. £${myBalance} remains in the account.`);
    }
}

withdraw("0411", 3);
withdraw("0451", 3);
withdraw("0451", 7);
withdraw("0451", 5);
withdraw("0451", 5);
withdraw("0451", 2);
