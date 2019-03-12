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
