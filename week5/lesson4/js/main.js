// let arr = [
//     { id: 2 },
//     { id: 2 },
//     { id: 2 },
//     { id: 3 },
//     { id: 3 },
//     { id: 3 },
//     { id: 1 },
//     { id: 1 },
//     { id: 1 },
// ]

// function uniq(arg) {
//     let uniqArr = []
//     arg.forEach(item => {
//         let check = uniqArr.filter(elem => item.id === elem.id)
//         if (check.length === 0) {
//             uniqArr.push(item)
//         }
//         console.log(uniqArr)
//     });
//     return uniqArr
// }
// let newArr = uniq(arr)
// console.log(newArr)

// let arr = [1, 1, 1, 2, 3, 3, 4, 5, 5]
// let newArr = []
// arr.forEach((item) => {
//     let check = newArr.filter(elem => {
//         console.log("это элем", elem, "это item", item)
//         return elem === item
//     })
//     if (check.length === 0) {
//         newArr.push(item);
//     }
// })
// console.log(newArr)

// let nums = [10, 21, 15, 5]
// let newArr = nums.map(item => item ** 2)
// console.log(newArr)

// let student = {
//     name: "Aibek",
//     courses: {
//         javascript: {
//             price: 200,
//             duration: 3
//         },
//         python: {
//             position: "intro",
//             lesson: 1,
//         },
//     },
// }
// let { courses: { python: { position } } } = student
// console.log(position)

// let user = {
//     name: "Igor",
//     age: 25,
//     friends: ["Ilyas", "Kostya"],
//     children: [
//         { name: "Nikolay", age: 3 },
//         { name: "Petr", age: 10 },
//     ],
//     parents: [
//         { name: "Victor", age: 55 },
//         {
//             name: "Vasilisa",
//             age: 53,
//             friends: {
//                 close: ["Shergazy", "Aleksandra"],
//                 notClose: []
//             },
//         },
//     ],
//     jobs: {
//         frontEnnd: {
//             language: "Javascript",
//         },
//         backEnd: {
//             language: {
//                 java: {
//                     version: 1,
//                     frameworks: {
//                         spring: {
//                             version: 1,
//                         },
//                     },

//                 },
//             },
//         },
//     },
// }
// // let { parents: [, { friends: { close: [, firstName] } }] } = user
// // let { children: [, secondChild] } = user
// // console.log(secondChild)
// // console.log(firstName)
// let { jobs: { backEnd: { language: { java: { frameworks: { spring: { version } } } } } } } = user
// console.log(version)
// function rec(start) {
//     console.log(start)
//     if (start >= 100) return;
//     rec(start + 1)
// }
// rec(1)

// let i = 101
// do {
//     console.log(i)
//     i++
// } while (i <= 100)


// console.log((true && true && false) || !!true )



