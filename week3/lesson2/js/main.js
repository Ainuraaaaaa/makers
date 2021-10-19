// Логические операторы
// оператор и
// console.log(true && true)
// console.log(true && false)
// console.log(true && 'a')

// оператор или
// console.log(true || false)
// console.log(false || false)

// оператор не
// console / log(!!true)
// console.log(!false)

// console.log(true && true || false && !false)

// console.log(true || !true && false || false)
// console.log(!false && !true || !true)
// console.log(false || !false && !!true)

// // условные операторы
// let num1 = 140
// let num2 = 141

// if (num1 === num2) {
//     console.log('num1 ===num2')
// }
// else if (num1 > num2)
//     console.log("num1 > num2")
// else {
//     console.log("не подошло")

// }

// const value = "Hello"
// const number = 47
// if (value === "Hello") {
//     console.log("hello world")
// }
// if (number > 50) {
//     console.log("number > 50")
// }
// else if (number < 50) {
//     console.log("number < 50")
// }
// else {
//     console.log("number === 50")
// }

// let sum = 100
// let result = 200
// if (sum === 100 && result === 201) {
//     console.log("YES")
// }
// else {
//     console.log("no")
// }
// else if {

// }

// тернарный оператор

// let user1 = "Ulan"
// let user2 = "Ulan"

// user1 === user2 ? console.log("если условия будут true") : console.log("если условия будут false")

// let num = 1
// let num2 = 2

// num < num2 && 10 > 11 ? alert(true) : alert(false)


// 0 || !1 && -1 ? console.log(true) : console.log(false)

// switch

// let str = "College"

// switch (str) {
//     case "school":
//         console.log("GOOD")
//         break;
//     case "Bootcamp":
//         console.log("BOOTCAMP")
//         break;
//     default:
//         console.log("college")
// }

// let code = prompt("Введи тег h1")

// switch (code) {
//     case "<h1></h1>":
//         alert("Правильно ввели")
//         break;
//     case "h1":
//         alert("Почти правильно")
//         break;
//     default:
//         alert("ПОВТОРИ заголовки")
//         break;
// }

// let temp = +prompt("Введите температуру")

// temp < 0 ? console.log(`температура воздуха опустится до ${temp} градусов`) : console.log(`температура поднимется до ${temp} градусов`)

// let min = +prompt("Введите число")
// if (min >= 0 && min < 15) {
//     console.log("Первая часть")
// }
// else if ()


let i = ['Paul', 'John', 'George', 'Ringo', 'Yoko']
let n = 0
for (n = 0; n < i.length; n++) {
    console.log(i[n])
}
