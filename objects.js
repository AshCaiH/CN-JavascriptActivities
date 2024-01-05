print = console.log

///
// Activity: Person
//

const person = {
    name: "Keith",
    age: 47,
    favSongs: [
        "One - Harry Nilsson","Song 2 - Blur","Three is a Magic Number - Bob Dorough"
    ],
    sayHi() { return `Hello! My name is ${this.name}` }
}
print(person.sayHi());
print(person.favSongs, "\n");

///
// Activity: Alarm
///

const day = "Saturday";
const alarm = {
    weekendAlarm: "No alarm needed.",
    weekdayAlarm: "Wake up at 7am!!!"
}

if (["saturday", "sunday"].includes(day.toLowerCase())) print(alarm.weekendAlarm, "\n");
else print(alarm.weekdayAlarm, "\n");

///
// Activity: Pet
///

const pet = {
    name: "Leon",
    animal: "Rabbit",
    age: 3,
    colour: "Grey",
    eat(food) {return `${this.name} the ${this.animal} is eating ${food}`},
    drink(drink) {return `${this.name} the ${this.animal} is drinking ${drink}`},
}

print( 
`${pet.eat("celery")}
${pet.drink("water")}
`
);

///
// Activity: Coffee Shop
///

const coffeeShop = {
    name: "Coffee Stop Station",
    drinks: {
        matchaLatte: 2.95,
        tea: 2.40,
        water: 0.40,
        cola: 1.30,
        coffee: 2.50
    },
    food: {
        cheeseToastie: 2.95,
        blt: 3.55,
        soupOfTheDay: 2.30,
        crisps: 1.20
    },
    orderDrinks(...items) {
        return this.orderFunc("drinks", this.drinks, items);
    },
    orderFood(...items) {
        return this.orderFunc("food", this.food, items);
    },
    orderFunc(type, menu, items) {
        let total = 0;
        for (let item of items) {
            // Make sure the option actually exists before adding its price.
            if (typeof(menu[item]) == "number") total += menu[item];
            else print(`"${item}" is not on the ${type} menu.`)
        }
        return total;
    },
}

drinkPrice = coffeeShop.orderDrinks("matchaLatte", "cola", "cola");
foodPrice = coffeeShop.orderFood("crisps", "cheeseToastie", "soupOfTheDay", "lobster")

print(
`Drinks: £${drinkPrice.toFixed(2)}
Food:   £${foodPrice.toFixed(2)}
Total:  £${(drinkPrice + foodPrice).toFixed(2)}`
);