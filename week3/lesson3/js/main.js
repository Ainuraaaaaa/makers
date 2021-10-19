// while, do while

// let arr = [1, 2, 3, 4, 5]
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])

// let i = 0
// while (i < arr.length) {
//     console.log(arr[i])
//     i++
// }

// let number = 1
// while (number <= 100) {
//     if (number % 2 === 0) {
//         console.log(number)
//     }
//     number++
// } 


// let i = 50
// do {
// console.log(i, "сработает один раз")
// } while (i < 40)


// FOR
// for (let i = 0; i < 20; i++) {
//     console.log(i)
// }

// let arr = ["arstan", "beksultan", "akai"]
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
//     if (arr[i] === 'beksultan') {
//         alert(arr[i])
//         continue;
//     }
//     console.log("код ниже")
// }


let users = [
    {
        name: "Ainura"
    },
    {
        name: "Badjo"
    },
    {
        name: "Sanzhar"
    },
]

// for (let i = 0; i < users.length; i++) {
//     document.write(`<p>имя: ${users[i].name}</p>`)
// }
// console.log(users)


// for of, for in
// for (let value of users) {
//     console.log(value)
// }


// for (let value in users) {
//     console.log(users[value])
// }

// let user = {
//     name: "Atai",
//     name: "Bakai",
//     name: "Erlan"
// }
// str = ''
// for (let key in user) {
//     str += user[key]
// }
// console.log(str)
// console.log(users)
// console.log(user)

// for (let value of user) {
//     console.log(value)
// }
// с помощью фор ин можно перебирать только обьекты и массивы
// с помощью фор оф можно перебирать только массивы

// let number = 5
// console.log(++ number)
// console.log(number)

// let arr = [true, 7, 2, 'Hello']
// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'number') {

//     }
// }

let arr = [1, 2, -3, 0, 1, -6, 9, 0, 0]
let positive = 0
let zero = 0
let negativ = 0
for(let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
        zero++
    }
    else if (arr[i] > 0) {
        positive++
    }
    else if (arr[i] < 0) {
        negative++
    }
}