function Animal(name) {
    this.foodAmount = 50;
    this.name = name;

    this._getFormattedFoodAmount = function() {
        return this.foodAmount + 'гр.';
    };

    this.dailyNorm = function(amount) {
        if (!arguments.length) return this.foodAmount;

        if (amount < 50 || amount > 500) {
            return 'Недопустимое количество корма.';
        }

        this.foodAmount = amount;
    };

    this.name = name;

    var self = this;
    Animal.prototype.feed = function() {
        return 'Насыпаем в миску ' + self._getFormattedFoodAmount() + ' корма.';
    };
}

function Cat(name) {
    Animal.apply(this, arguments);

    var animalFeed = this.feed;
    Cat.prototype.feed = function() {
        console.log(animalFeed() + '\n' + 'Кот доволен ^_^');
    };

    Cat.prototype.stroke = function() {
        console.log('Гладим кота.');
    };
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

var barsik = new Cat('Барсик');
console.log(barsik.name);
console.log(barsik.dailyNorm(200));
console.log(barsik.feed());
console.log(barsik._getFormattedFoodAmount());
console.log(barsik.stroke());

function copy(obj) {
    var objKey,
        copyObject = Array.isArray(obj) ? [] : {};
    for (var i in obj) {
        objKey = obj[i];
        copyObject[i] = (typeof objKey === "object") ? copy(objKey) : objKey;
    }

    return copyObject;
}

var obj = {
    "left"  : { "left" : true, "right" : false, "numb" : 10 },
    "mycode"  : 8,
    "Array" : [
        {'one' : 1},
        {'two' : 2},
    ]
};
var d = copy(obj);
console.log(d);