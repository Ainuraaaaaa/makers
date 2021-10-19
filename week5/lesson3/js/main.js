// поверхностное и глубокое копирование

// let user = {
//     name: "Aisultan",
//     age: 20,
//     languages: {
//         english: "2 level",
//         french: "3 level"
//     }
// }
// // let newUser = user;
// // let newUser = Object.assign({}, user) поверхностное копирование
// let newUser = { ...user } // поверхностное копирование spred
// newUser.name = "Aibek";
// newUser.languages.english = "6 level"
// console.log(user)
// console.log(newUser)

// let product = {
//     title: "T-shirt",
//     price: {
//         s: 3000,
//         m: 4000,
//         l: 2000,
//     },
// }

// let newProduct = JSON.parse(JSON.stringify(product)) //глубокое копирование
// newProduct.price.s = 10000;
// console.log(product)
// console.log(newProduct)
// let str = JSON.stringify(product)
// let obj = JSON.parse(str)
// console.log(obj)
// console.log(str)
// console.log(product)

// let student = {
//     name: "Melis",
//     lastName: "Artykbaev"
// }
// // let name = student.name
// // let lastName = student.lastName
// let name = "Sanzhar"
// let { name: studentName, lastName } = student
// console.log(studentName, lastName)

// let arr = ["true", 10, null, "str", 77, false]
// // let boolean = arr[0]
// let [boolean, , type, ...rest] = arr
// console.log(boolean, type, rest)

// let obj = {
//     name: "Market Place",
//     frameworks: ["React", "Django API"],
//     versions: {
//         legacy: [2011, 2012, 2013],
//     },
// }
// let { frameworks: [frontEndFramework] } = obj
// console.log(frontEndFramework)
// let { versions: { legacy: [, year] } } = obj
// console.log(year)
// let { name: projectName } = obj
// console.log(projectName)

// let product = {
//     // title: "Pencil",
//     // price: 100,
// }
// let { title = "default title" } = product
// console.log(title)

// let user = {
//     name: 'John',
//     age: 22
// }
// let { name = prompt('Введите имя'), age = +prompt('Введите число') } = user
// console.log(name, age)

// function showNameAndPhone({ name, phone }) {
//     console.log(name, phone)
// }
// let obj = {
//     name: "Shergazy",
//     phone: 777222333,
// }
// showNameAndPhone(obj)

// function func(first, second) {
//     let [first, second] = arg
//     //     arg.forEach(item => {
//     console.log(first, second)
//     //     });
// }
// func([1, 2, 3, 4, 5])

// function showUser({name= 'Iskhak', lastName= 'Boobekov', age = '24'}) {
//     console.log({ name, lastName, age })

// }
// let obj = {
//     name: "Iskhak",
//     lastName: "Boobekov",
//     age: 24,
// }
// showUser(obj)

// let obj = {
//     title: 'The Hobbit, or There and Back Again',
//     description: 'The hobbit tells a fantastic story of adventure, danger, friendship, and courage',
//     texts: [{
//         author: 'J. R. R. Tolkien',
//         price: 120,
//         ISBN: '912-6-44-578441-0'
//     }
//     ]
// }
// let { texts: [{ ISBN }] } = obj
// console.log(ISBN)

































function showMessage(text) {
    return "Hello World"
}
showMessage()
console.log(showMessage)