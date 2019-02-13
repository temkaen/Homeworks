// Должна присутствовать проверка на корректность числа, для определения массива метод
// isArray использовать запрещено.

var sum = 0;

function treeSum(arr) {
    var arrItem;

    for (var i = 0; i < arr.length; i++) {
        arrItem = arr[i];
        (arrItem.length !== undefined) ? treeSum(arrItem) : sum += +arrItem;
        }
    return sum;
}

alert(treeSum([5, 7, [4, [2], 8, [1,3],2],[9, []],1,8]));

// это работает блиииин!!!! Что такое проверка на корректность числа? Не очень понятно это условие.
// Надеюсь- это проверка полученного числа (как в тетради). Если это не так - безусловно дополню.

// Написать функцию pow(x,n), которая возвращает x в степени n,
//     иначе говоря, умножает x на себя n раз и возвращает результат.
//     Создать страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
//     В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.


var x = prompt('Какое число необходимо возводить в степень?'),
    n = prompt('В какую степень возвести число?');
    (n < 1) ? alert('введите целое число от 0 и выше') : pow(x, n);

function pow(x, n) {
    power = x;
    for (var i = 1; i < n; i++) {
         power *= x;
    }

    return power;
}
    alert(power);

// power подсвечивается сереневым - проверил - всё работает, но судя по цвету - это зарезервированное слово?



function sumTo(n) {
    var sum = 0;

    for (var i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}



function sumTo(n) {
    if (n == 1) return 1;

    return n + sumTo(n - 1);
}


function sumTo(n) {
    return n * (n + 1) / 2;
}

//быстрее та, которая короче - по формуле Гаусса. Самая медленная будет по рекурсии - потому что для того,
// чтобы понять рекурсию - нужно понять рекурсию =) и ещё потому, что рекурсия сама по себе - очень ресурсозатратная операция,
//и количество вызовов равно порядка 10000 - ограничение браузера, поэтому sumTo(10000) просто ничего не даст - очень большое количество вызовов.