// регулярные выражения

//2 способа создания регулярного выражения

// const regexp1 = /coding/  // 1 способ
// const regexp2 = new RegExp("coding") //2 способ

// const str = "coding is easy"
// let result = str.match(regexp1) || [];
// console.log(result)

// if (result.length > 0) {
//     console.log("есть")
// } else {
//     console.log("нет")
// }

//флаги
// i игнорирует регистр
// g с этим флагом поиск ищет все совпадения а без него только первое

// let regexp = /code/gi
// let str = "code, bad Code"
// let result = str.match(regexp)
// console.log(result)

//метод строки match ищет и возвращает массив, если не найдено то null

// let str = "работайте  братья, работайте"
// let regexp = new RegExp("Работайте", "gi")
// let result = str.match(regexp)
// console.log(result)

//метод строки replace иищет совпадения и заменяет их

// let str = "требуется миддл разработчик"
// let regexp = /миддл/
// let result = str.replace(regexp, 'джуниор')
// console.log(result)

//метод регулярного выражения test проверяетб есть ли хоть одно совпадение, если да то возвращает тру иначе фолс

// let str = "we can"
// let regexp = /we/i
// let result = regexp.test(str)
// console.log(result)

// \d цифра от 0-9
// \s все пробелы
// \w буквы (буквы латинского алфавита) или _
// \D не цифра все кроме от 0-9
// \S не пробел все кроме пробела
// \W символ кроме букв латинского алфавита и _ и не цифра
// \. любой символ

// let str = "coding is easy"
// let regexp = /c\w\w\w\w\w/
// let result = str.match(regexp)
// console.log(result)

//якоря 
// ^ - начало строки
// $ - конец строки

// let time = "20:12"
// let regexp = /^\d\d:\d\d$/
// let result = regexp.test(time)
// console.log(result)

//наборы []
// let str1 = "mad"
// let str2 = "sad"
// let regexp = /[ms]ad/
// let result = str2.match(regexp)
// console.log(result)

//диапазоны

// let str = '123456789'
// let regexp = /[1-9]/g
// let result = str.match(regexp)
// console.log(result)

// [0-9]
//[a-z]
//[A-Z]
//[а-я]
//[А-Я]

//исключения
// let regexp = /[^aeiou]/ //все кроме этих букв

//квантификаторы

// {n} количество

// let numbers = "12 555 3477"
// let regexp = /\d{3,4}/g
// let result = numbers.match(regexp)
// console.log(result)

// let regexp = /\d?/
// let result = numbers.match(regexp)
// console.log(result)

// let string = "color or colour"
// let regexp = /colou?r/g
// let result = string.match(regexp)
// console.log(result)

//скобочные группы
// mail.ru
// mail.gmail.ru

// let str = "mail.gmail.ru"
// let regexp = /\w+.\w+.\w+/g
// let result = str.match(regexp)
// console.log(result)

// let str = "brown, black, blue, lightblue"
// let regexp = /[aeiou]/gi
// let result = str.match(regexp)
// console.log(result)

// let str = "5 apples and 5 oranges"
// let regexp = /\d/g
// let result = str.replace(regexp, 'пять')
// console.log(result)

// // альтернация (или) '|'
// let str = "I know Java, Python, Flutter, Javascript, Dart"
// let regexp = /Java(Script)?/