// стрелочные функции (arrow function)

// const arrowFunc = () => {
//     console.log("arrow")
// }

// const arrowFunc = () => console.log("arrow")
// const arrowFunc = arg => console.log(arg)
// arrowFunc(10)

// function func() {
//     console.log(arguments)

// }
// const func = () => {
//     console.log(arguments)
// }
// func("str", 10, true)

// let km = +prompt("Enter km")
// const converter = (arg) => {
//     let m = arg * 1000
//     alert(`${m} м.`)

// }
// converter(km)

//методы объектов 

// console.warn(method)
// console.err("чп")
// console.log("мч")

// let user = {
//     name: "Ilyas",
//     sayHello: function (arg) { // function declaration
//         console.log(`hello ${arg} `)
//     },
//     sayHello(arg) {  // function expression
//         console.log(` Hello ${arg}`)
//     },
//     sayHello: (arg) => {
//         //arrow function
//         console.log(`hello ${arg}`)
//     }
// }
// user.sayHello("Дамир")
// user.sayHello("Ислам")


//this 

// room = 19

// let obj = {
//     title: "JS77",
//     sayContext() {
//         console.log(this)
//     },
//     sayContextArrow: () => {
//         console.log(this)
//     },
//     func() {
//         let arrowFunc = () => {
//             console.log(this)
//         }
//         arrowFunc()
//     },
// }
// obj.sayContext()
// obj.sayContextArrow()
// obj.func()

// let user = {
//     name: "Erlan",
//     sayName: function () {
//         console.log(this.name)
//     },
// }

// let newUser = { ...user }
// newUser.name = "Islam"
// user.sayName()
// newUser.sayName()


// user.sayName()


// let passenger = {
//     firstName: "Sam",
//     lastName: "Winchester",
//     passporrtNum: "US12345678",
//     baggage: 20,
//     getInfo() {
//         console.log(`passenger ${this.firstName} ${this.lastName}. Password number is ${this.passporrtNum}. Maximum luggage weigth is ${this.baggage}kg.`)
//     },
//     setBaggage(arg) {
//         this.baggage = arg
//     }

// }
// passenger.getInfo()
// passenger.setBaggage()
// passenger.getInfo()

// let arrowFunc = (str) => {
//     let splitString = str.split("")
//     let reversArray = splitString.reverse();
//     let joinArray = reversArray.join("")
//     return joinArray;
// }
// console.log(arrowFunc("JavaScript"))

// let fahrenheit = (temp) => 1.8 * temp + 32;
// console.log(fahrenheit('32'));
// console.log('==============')

function pow(x, n) {
    if (n == 1) {//точка выхода
        return x;//возвращаем число
    } else {//если n не единица то идём дальше
        return x * pow(x, n - 1);//вызов рекурсии где степень уменьшается на один
    }
}

console.log(pow(3, 4)); // вывод в консоль наш ответ