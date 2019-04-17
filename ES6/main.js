
//7
{
    function returnUsers(namesArr) {
        return namesArr.map((name, i) =>  ({[`Пользователь ${i + 1}`]: name}));
    }

    returnUsers(['Вася', 'Петя']);

}

//8
{
    const initialArray = [
        {name: 'Vasya'},
        {name: 'Piotr', age: 25},
        {salary: '2000$'}
    ];

    const resultObj = initialArray.reduce((first, next) => Object.assign(first, next));
    console.log(resultObj);

}

//9
{
    class Animal {
        constructor(name){
            this.name = name;
            this._foodAmount = 50;
        };
        get _formattedFoodAmount() {
            return this._foodAmount + 'гр.';
        };
        set dailyNorm(amount) {
            if (!arguments.length) return this._foodAmount;

            if (amount < 50 || amount > 500) {
                return 'Недопустимое количество корма.';
            }

            this._foodAmount = amount;
        };
        feed(){
            return `Насыпаем в миску ${this._foodAmount} корма.`;
        }

    }


    class Cat extends Animal{
        constructor(){
            super(arguments);
        };

        feed() {

            return `${super.feed()} Кот доволен ^_^`;
        };

        stroke() {
            return `Гладим кота`;
        }
    }




    const barsik = new Cat('Барсик');
    barsik.feed();
    barsik.stroke();
}







































