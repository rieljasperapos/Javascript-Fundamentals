let menu = {
    _meal: [],
    _price: [],
    set meal(mealToCheck) {
        if (typeof mealToCheck === 'string') {
            this._meal.push(mealToCheck);
        }
    },
    set price(priceToCheck) {
        if (typeof priceToCheck === 'number') {
            this._price.push(priceToCheck);
        }
    },
    get todaysSpecial() {
        let index = Math.floor(Math.random() * menu._meal.length);
        if (this._meal[index] && this._price[index]) {
            return `Today's Special is ${this._meal[index]} for $${this._price[index]}.`;
        } else {
            return 'Meal or price was not set correctly.';
        }
    }
}

menu.meal = 'Siomai';
menu.meal = 'Java Rice';
menu.meal = 'Ngohiong';

menu.price = 10;
menu.price = 50;
menu.price = 20;

console.log(menu.todaysSpecial);

// let index = Math.floor(Math.random() * menu._meal.length);
// console.log(`Size of meal array ${menu._meal.length}`);
// console.log(`Index: ${index}`);

// menu._meal.forEach(meal => {
//     console.log(meal);
// })

// menu._price.forEach(mealPrice => {
//     console.log(mealPrice);
// })

