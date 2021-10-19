// синхронный код

// for (let i = 0; i < 1000000; i++) {

// }
// console.log("hello")

// alert("hello")
// console.log("bootcamp")

// setTimeout(() => {
//     console.log(1)
// }, 2000)
// console.log(2)

// function func() {
//     console.log("Hello 1")
// }

// setTimeout(func, 1000)
// setTimeout(() => {
//     console.log("Hello 2")
// }, 1000)
// console.log("Hello 3")

// const id = setTimeout(() => {
//     console.log(1)
// }, 1000)

// const id2 = setTimeout(() => {
//     console.log(2)
// }, 1500)
// console.log(id)
// clearTimeout(id2)

// let i = 0
// const id = setInterval(() => {
//     console.log(`Ispan i love you ${++i}`)
// }, 1000)
// setTimeout(() => {
//     clearInterval(id)
// }, 5000);

// const age = 20
// const newPromise = new Promise(function (resolve, reject) {
//     if (age >= 21) {
//         resolve({ age, status: true })
//     } else {
//         reject({ age, status: false })
//     }
// })

// newPromise
//     .then((result) => console.log(result, 'SUCCESS'))
//     .catch((error) => console.log(error, 'ERROR'))
//     .finally(() => console.log("Finish"))

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(new Promise((res, rej) => {
//             setTimeout(() => {
//                 res('Say hello')
//             }, 1000)
//         }))
//     }, 1000)
// })
//     // console.log(p)
//     .then(promise => console.log(promise))

// XMLHttpRequest

// let xhr = new XMLHttpRequest()
// xhr.open("GET", 'https://pokeapi.co/api/v2/pokemon/');
// xhr.send()
// xhr.onload = function () {
//     console.log(JSON.parse(xhr.response))
// }

// fetch('https://pokeapi.co/api/v2/pokemon/')
//     .then(result => result.json())
//     .then(data => console.log(data))
// console.log('Hello')