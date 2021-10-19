//функции, области видимости, хойстинг
//function declaration
//function expression
// arrow function 

//function declaration
// function func() {
//     console.log("Hi")
// }
// func()

// function sayHello() {
//     alert("Hello")
// }
// sayHello()

// //обьявляем функцию
// function имя(параметры) {
//     body
// }
// имя()

// function sumTwoNumbers(num1, num2) {
//     let result = (num1 + num2)
//     return result;
// }
// let sum = sumTwoNumbers(10, 20)
// console.log(sum)

// function firstElem(arr = []) {
//     let elem = arr.shift()
//     return elem
// }
// let array = [true, 2, 3, 4, 5]
// let result = firstElem(array)
// console.log(result)

// function mulTwoNums(arg1, arg2 = 1) {
//     console.log(arg1, arg2)
//     console.log(arg1 * arg2)
// }
// mulTwoNums(2)

// let message = "Hello world"
// function showMessage(message) {
//     console.log(message)
// }
// showMessage(message)

// let arr = ["str"]
// function array(arr) { //здесь функция принимает аргументы
//     console.log(arr)
// }
// array(arr) // здесь передаются аргументы функции

// если функция принимает аргументы, то аргументы нужно передавать

// let numbers = [100, 200, 300]

// function lastElemOfArray() {
//     let lastElem = numbers.pop()
//     console.log(lastElem)

// }
// lastElemOfArray(numbers);
// let boolValues = [true, false, true]
// lastElemOfArray(boolValues)

//function expression
// let sayHello = function (arg) {
//     console.log(arg)

// }
// sayHello("hello")

// let obj = {
//     title: "Makers"
// };
// function showTitle(arg1) {
//     document.write(`<h1>${arg1.title}</h1>`)
// }
// showTitle(obj)
// let school = {
//     title: "Gazprom"
// }
// showTitle(school)

// let num1 = 50
// function func() {
//     let num1 = 20
//     console.log(num1)
// }
// func()
// console.log(num1)

//тело функции это локальная область видимости


// function pow(x, n) {
//     let result = x ** n
//     return result
// }
// let result = pow(2, 3)
// console.log(result)


// function week(num) {
//     switch (num) {
//         case 1:
//             return "понедельник"
//         case 2:
//             return "вторник"
//         case 3:
//             return "среда"
//         case 4:
//             return "четверг"
//         case 5:
//             return "пятница"
//         case 6:
//             return "суббота"
//         case 7:
//             return "воскресенье"
//         default:
//             return "неправильное число"
//     }
// }
// let week1 = week(1)
// console.log(week1)

// function checkCountry(arr) {
//     arr.sort((a, b) => b.length - a.length);
//     return arr.pop()
// }
// function checkCountry2(arr2) {
//     arr2.sort((a, b) => b.length - a.length);
//     return arr2.shift()
// }
// let countries = ['Финляндия', 'Япония', 'Лаос', 'Испания', 'Мексика']
// console.log(checkCountry(countries))
// console.log(checkCountry2(countries))


// let n = +prompt('Enter a number');
// function rec(num) {
//     if (num % 2 === 1) {
//         console.log(num);
//     }
//     if (num > 0) {
//         num--;
//         rec(num);
//     } else {
//         return 1;
//     }
// }
// rec(n);

// console.log(first())
// console.log(first())
// console.log(first())

function functionLimit(num) {
    if (num <= 1000) {
        console.log(num);
        functionLimit(num * 2);
        console.log(num);
    }
    return num
}
functionLimit(50);