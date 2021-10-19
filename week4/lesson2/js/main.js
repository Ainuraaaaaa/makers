//замыкание

// function init() {
//     let name = "Adilet";
//     return function () {
//         console.log(name)
//     }
// }

// let showName = init()
// console.log(showName)

// function words(arg1) {
//     return function (arg2) {
//         console.log(arg1, arg2)
//     }

// }
// let hello = words("Hello")
// hello("world")
// hello("Sanzhar")

// function sum(num1) {
//     console.log(num1)
//     return function (num2) {
//         console.log(num1 + num2)
//     }
// }
// let sum10 = sum(10)
// sum10(20)
// sum(20)(40)

//замыкание это когда дочерняя функия замкнута на лексическом окружении родительской функции


//рекурсия
// let result = 0
// function toSum(num) {
//     for (let i = num; i >= 1; i--) {
//         result += i;
//     }

// }
// toSum(5)
// console.log(result)

// function toSum(num) {
//     if (num <= 1) return num //точка выхода
//     return num + toSum(num - 1) // вызывает функцию

// }

// let result = toSum(5)
// console.log(result)

// function finder(arr) {
//     if (arr.length < 1) return 0;
//     let currentNum = arr.splice(0, 1)
//     console.log(arr)
//     return currentNum[0] === 1 ? + finder(arr) : finder(arr)
// }
// let count = finder([1, 2, 22, 4, 1, 1])
// console.log(count);

// function showText(arr) {
//     if (arr.length < 1) return 0;
//     let currentNum = arr.splice(0, 1)
//     return typeof currentNum[0] === "number" ? currentNum[0] + showText(arr) : showText(arr)

// }
// let arr = [1, true, false, "H", 3, 4]
// console.log(showText(arr))

// let user = {
//     name: 'Julia',
//     surname: 'Black',
//     age: 25,
//     sayHi: () => {
//         console.log('Hello World')
//     },
//     sayAge: function () {
//         console.log(user.age)
//     },
//     sayInfo() {
//         console.log(`${user.name} ${user.surname} ${user.age}`)
//     }

// }
// user.sayHi()
// user.sayAge()
// user.sayInfo()

// let arrowFunc = () => {
//     console.log('Hello World!')
// }
// arrowFunc()

// let birthday = {
//     name: 'Jonh',
//     age: 22,
//     sayHi: () => {
//         console.log(`Happy birthday! ${birthday.name} ${birthday.age}`)
//     }
// }
// birthday.sayHi()

let arrowFunc = (array) => {
    for (let i = 0; i < array.length; i++) {
        array[i] += ' is cool';
    }
    return array;
};

let arr = ['Kate', 'Bill', 'John', 'julia'];
console.log(arrowFunc(arr));