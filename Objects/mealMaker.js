let menu = {
    _meal: '',
    _price: 0,
    set meal(mealToCheck) {
        if (typeof mealToCheck === 'string') {
            this._meal = mealToCheck;
        }
    },
    set price(priceToCheck) {
        if (typeof priceToCheck === 'number') {
            this._price = priceToCheck;
        }
    },
    get todaysSpecial() {
        if (this._meal && this._price) {
            return `Today's Special is ${this._meal} for $${this._price}`;
        } else {
            return 'Meal or price was not set correctly!';
        }
    }
}

// menu.meal = 10;
// menu.price = '10';
menu.meal = 'Siomai';
menu.price = 10;
console.log(menu);
console.log(menu.todaysSpecial);

// To further extend my learning on this simple activity, try adding an array of meals
// and prices to randomly set and get Today's Special





