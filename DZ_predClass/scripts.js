function isPalindrome(word) {
    word = word.toLowerCase();
    var reverseWord = word.split('').reverse().join('');
    return word === reverseWord;
}
console.log(isPalindrome('шалаШ'));
console.log(isPalindrome('привет'));
console.log(isPalindrome('шалаш'));

function isAnagram(word, comparedWord) {
    word = word.toLowerCase().split('').sort().join('');
    comparedWord = comparedWord.toLowerCase().split('').sort().join('');
    return word === comparedWord;
}
console.log(isAnagram('Кот', 'отк'));
console.log(isAnagram('Кот', 'отк'));//проверка с регистром
console.log(isAnagram('кот', 'атк'));
console.log(isAnagram('кот', 'отко'));

function divideArr(arr, size) {
    var resultArr = [];
    for (var i = 0; i < arr.length/size; i++) {
        resultArr[i] = arr.slice((i*size), (i*size) + size);
    }
    return resultArr;
}

console.log(divideArr([1, 2, 3, 4], 2));
console.log(divideArr([1, 2, 3, 4, 5], 3));

function vowelsCount(text) {
    var vowels = ['а', 'о', 'у', 'ы', 'э', 'я', 'ё', 'ю', 'и', 'е'];
    var workText = text.toLowerCase().split(''),
        counter = 0;
    for (var i = 0; i<workText.length; i++) {
        for (var k = 0; k<vowels.length; k++) {
            if( workText[i] === vowels[k]) {
                counter++;
            }
        }
    }
    return 'количество гласных букв в тексте: ' + counter;
}

console.log(vowelsCount('Съешь же ещё этих мягких французских булок да выпей чаю'));
console.log(vowelsCount('В чащах юга жил-был цитрус, да, но фальшивый экземпляр.'));
