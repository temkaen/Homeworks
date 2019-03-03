function Animal(name) {
    var foodAmount = 50;
    var forContent = this;
    this.name = name;

    this._getFormattedFoodAmount = function() {
        return foodAmount + 'гр.';
    };

    this.dailyNorm = function(amount) {
        if (!arguments.length) return foodAmount;

        if (amount < 50 || amount > 500) {
            console.log('Недопустимое количество корма.');
            return this;
        }

        foodAmount = amount;
        return this;
    };

    this.feed = function() {
        return 'Насыпаем в миску ' + forContent._getFormattedFoodAmount() + ' корма.';
    };
}

function Cat() {
    Animal.apply(this, arguments);

    var animalFeed = this.feed;

    this.feed = function() {
        console.log(animalFeed() + 'Кот доволен ^_^');
        return this;
    };

    this.stroke = function () {
        console.log('гладим кота');
        return this;
    }
}

var barsik = new Cat('Барсик');


console.log(barsik.dailyNorm(300).stroke().feed().stroke().dailyNorm(200).feed().stroke());