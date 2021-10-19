console.log("Hello world");

let string = "abcd";
const number = 10
// number = '20'
let boolean = true
let typeNull = null
let typeUndefined = undefined
let object = {
    title: "Adidas Zoom",
    color: "green",
    size: 42,
    'description-1': "Good shoes"
}
object.size = 37

let newObject = object
console.log(newObject)
newObject.title = "Nike AirForce-1"
console.log(newObject)
console.log(object)

let firstStr = "JS12"
let secondStr = firstStr
secondStr = "JS13-FULLSTAK"
console.log(firstStr)
console.log(secondStr)

//alert, promt, confirm
// let result = alert("привет")
// console.log(result)

// let name = prompt("введите ваше имя")
// console.log("привет" + name)
// let result = confirm("Вам есть 14 лет ?")
// console.log(result)

// let num1 = '10'
// let num2 = 20
// let sum = num1 % num2
// console.log(sum)


// console.log(typeof NaN)

// console.log(10 == '10')


// console.log(10 === '10')

// let num1 = parseInt(prompt)('введите первое число')
// let num2 = +prompt('введите второе число')
// console.log(num1 + num2)

let user = {
    name: "Beknazar",
    lastName: "Omurbek",
    age: 23
}

// console.log("Добро пожаловать" + user.name + user.lastName + "на наш сайт")

// console.log(`Добро пожаловать ${user.name} ${user.lastName}  на наш сайт`)

// let obj = {
//     5; 0,
//     '5': 10,
//     5: 333
// }

// console.log(obj)
// console.log(obj['5'])

let list = [1, 2, 3, 4, 5, 6, 7, "hello", { arr: 123 }, ["first", "second"]]
console.log(list[8])

// let a = +prompt("дать сторону")
// alert(a ** 3)


let a = +prompt("дать первую сторону")
let b = +prompt("дать вторую сторону")
alert((a + b) * 2)
б