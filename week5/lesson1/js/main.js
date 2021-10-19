//методы массивов (forEach, map, filter, reduce, indexOf, includes, every, some)

//forEach

// let arr = ['boolean', 34, {}, true]
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i], i, arr)
// }

// arr.forEach((item, index, array) => {
//     console.log(item, index, array)
// })

//map
// let arr = [1, 2, 3, 4, "a", 6]
// let newArr = arr.map(function (item, index, array) {
//     if (item === "a") {
//         return 5
//     }
//     return item

// })
// console.log(newArr)

//filter 
// let numbers = [32, 2, 43, 10, 25]
// let newArray = numbers.filter((item) => {
//     return item > 15
// })
// console.log(newArray)

// let films = [
//     {
//         title: 'Pila',
//         genre: 'horror',
//     },
//     {
//         title: 'Venom',
//         genre: 'fantasy',
//     },
//     {
//         title: 'Ono',
//         genre: 'horror',
//     },
//     {
//         title: 'Эки баатыр',
//         genre: 'comedy',
//     },
// ]
// console.log(films)
// function handleFilter(genre) {
//     let filteredArr = films.filter((item) => {
//         return item.genre === genre
//     })
//     console.log(filteredArr)
// }
// handleFilter("comedy")

//indexOf
// let arr = [true, 1, 0, "str"]
// let result = arr.indexOf("str")
// console.log(result)

// let studentRecords = [
//     { name: 'John', id: 123, marks: 98 },
//      { name: 'Baba', id: 101, marks: 23 },
//      { name: 'John', id: 200, marks: 45 },
//      { name: 'Wick', id: 115, marks: 75 },
//  ]


// let name = ['sam', 'luck', 'james']
// names = names.map(item => {
//     item = item[0].toUpperCase() + item.slice(1)
//     return item
// })
// console.log(names)

// let arr = [1, 3, 10, -11, -555, 10]
// let newArr = arr.filter((item, index, array) => {
//     return item < 0
// })
// console.log(newArr)
// let arr = ['str', 1, [3, 4], true, ['str'], 10, {}]
// let newArr = arr.filter((item, index, array) => {
//     return Array.isArray(item)
// })
// console.log(newArr)

// function isPalindrom(word) {
//     let secondWord = word.split("").reverse().join("")
//     if(word.toLowerCase().trim() === secondWord.toLowerCase().trim()) {
//         console.log("isPalindrom")
//     }
// }

// let arr = [5, 6, 7, 8, 9]
// sum = 0
// let newArr1 = arr.map((item, index, array) => {
//     sum += item
// })
// console.log(sum)

// function func(arr) {
//     arr.forEach((item, index, array) => {
//         if (typeof (item) === 'number') {
//             console.log(`${item} - число`)
//         } else {
//             console.log(`${item} - не число`)
//         }
//     })
// }
// let arr1 = ['Молоко', 77, 11, 'Мед', -88]
// func(arr1)
