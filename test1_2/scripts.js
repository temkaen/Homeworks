// Задание 4 *:
// Усовершенствуйте задание 2 таким образом, чтобы функция, принимая объект вида
// {
//     name_one: 'Vasya',
//     name_two: 'Piotr',
//     name_three: 'Fedya',
//     name_four: 'Piotr'
// }
// отдавала объект вида
// {
//     name_four_length: 5
//     name_one_length: 5
//     name_three_length: 5
//     name_two_length: 5
//     'Дублирующиеся значения': {
//     Piotr: '2 раз(а)'
// }
// }
// В решении использовать только пройденный материал.

var newObj = {},
    newArr = [];//для значений исходного объекта

function func(obj) {
    var propLenght;//длина значений объекта
    var keyName;//имя ключа

    for (var key in obj) {
        keyName = key + '_lenght';
        newArr.push(obj[key]);
        propLenght = obj[key].split('').length;
        newObj[keyName]= propLenght;
    }
    // нужно посчитать сколько раз какой ключ встречается.
    var result = {};//создаём пустой объект для результатов

    for (var i = 0; i < newArr.length; ++i)// идем циклом по массиву со значениями исходного объекта
    {
        var a = newArr[i];// а равна значению массива
        if (result[a] !== undefined)// если а не равна андефайнд
            ++result[a] ; // увеличиваем на 1 значение ключа
        else
            result[a] = 1;//до первой встречи ключа его значение андефайнд - записываем ключ со значением 1
    }
    // нужно очистить результат от уникальных значений
    for (var key2 in result) {
        if (result[key2] == 1) {
            delete result[key2];// если значение равно 1, то это не дублирующее значение - удаляем эти ключ:значения из резалта
        } else {
            result[key2] = result[key2] + ' раз(а)';// если не равно 1 то добавляем к значению раз(а)
        }
    }
    newObj['Дублирующие значения'] = result;// добавляем в исходный объект ключ и значение
    return newObj; // возвращаем объект согласно условию
}

obj = {
    name_one: 'Vasiliy',
    name_two: 'Piotr',
    name_three: 'Fedya',
    name_four: 'Piotr',
    name_test: 'Vasiliy',
    name_test2: 'Vasiliy'
};
func(obj);
console.log(newObj);