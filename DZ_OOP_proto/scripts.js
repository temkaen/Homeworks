function Animal(name) {
    this._foodAmount = 50;//был привантый - делаем защищенным
    this.name = name;
}

Animal.prototype._getFormattedFoodAmount = function() {
        return this._foodAmount + 'гр.';
};

Animal.prototype.dailyNorm = function(amount) {
        if (!arguments.length) return this._foodAmount;

        if (amount < 50 || amount > 500) {
            return 'Недопустимое количество корма.';
        }

        this._foodAmount = amount;
};//прототип метода дейлинорм для класса животных



Animal.prototype.feed = function() {
        return 'Насыпаем в миску ' + this._getFormattedFoodAmount() + ' корма.';
};//прототип метода фид для класса животных


function Cat(name) {
    Animal.apply(this, arguments);//наследуем от животных вызывая конструктор животных в своём контексте
}//конструктор класса Коты
    Cat.prototype = Object.create(Animal.prototype);
    Cat.prototype.constructor = Cat;


Cat.prototype.feed = function() {
    this.animalFeed = Animal.prototype.feed.apply(this, arguments);
    return this.animalFeed + '\n' + 'Кот доволен ^_^';
};//расширяем метод для котов

Cat.prototype.stroke = function() {
        console.log('Гладим кота.');
};




var barsik = new Cat('Барсик');
console.log(barsik.name);
console.log(barsik.dailyNorm(200));
console.log(barsik.feed());
console.log(barsik._getFormattedFoodAmount());
console.log(barsik.stroke());

function copy(obj) {
    if(obj == null || typeof(obj) != 'object') {
        return obj;
    }
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