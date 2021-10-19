// простые методы массивов
// push, pop, shift, unshift

// let arr = [1, 2, 3]
// arr.push(4); //добавляет конец
// console.log(arr);
// let num = arr.pop() //вырезает один элемент с конца
// console.log(arr)
// console.log(num)

// let arr = ["Kyrgyzstan", "Uzbekistan", "Russia"]
// arr.unshift("China") //добавляет в начало
// console.log(arr)
// let country = arr.shift() //вырезает один элемент с начала массива
// console.log(arr)
// console.log(country)

// //splice, slice
// let nums = [22, 40, 38, 50]
// let res = nums.splice(0, 1, "1")
// console.log(nums)
// console.log(res)
//массив.splice(с какого начать и сколько вырезать и что вставить)


// let arr = [100, 31, 47, 68]
// let num = arr.slice(1, 2)
// console.log(arr)
// console.log(num)
//массив.slice (с какого начать и по какой (не включительно))


// let arr = [1, 2, 3, 4, 5,]
// // arr.reverse()
// let str = arr.join(" ") // из массива делает строку
// console.log(arr)
// console.log(str)
// let newArr = str.split("") //из строки делает массив
// console.log(newArr)

// let nums = [1, 2, 30, 11, 101, 22, 86]
// nums.sort((a, b) => a - b)
// nums.sort((a, b) => b - a)
// console.log(nums)

// let res1 = [1, 2, 3]
// let res2 = [4, 5, 6]
// concat. соединяет массивы между собой

// let result = res2.concat(res1, ["str", "boolean"])
// console.log(result)

// let arr = ["Ainura", "Askat", "Maksat", "Malik", "Atai"]
// for (let i = 0; i < arr.length; i++) {
//     arr.splice(i, 1, [arr[i], i])

// }
// console.log(arr)

// let mixedUsers = [
//     {
//         role: "user",
//     },
//     {
//         role: "admin",
//     },
//     {
//         role: "admin",
//     },
//     {
//         role: "user",
//     },
//     {
//         role: "user",
//     },
//     {
//         role: "admin"
//     }

// ]
// let admins = []
// let users = []

// for (let i = 0; i < mixedUsers.length; i++) {
//     if (mixedUsers[i].role === 'admin') {
//         admins.push(mixedUsers[i])
//     }
//     else if (mixedUsers[i].role === 'user') {
//         users.push(mixedUsers[i])
//     }
// }
// console.log(admins)
// console.log(users)

// let products = [
//     { size: "s" },
//     { size: "s" },
//     { size: "s" },
//     { size: "s" },
//     { size: "l" },
//     { size: "l" },
//     { size: "l" },
//     { size: "l" },
//     { size: "m" },
//     { size: "m" },

// ]
// let sSizes = [], lSizes = [], mSizes = []
// for (let i = 0; i < products.length; i++) {
//     if (products[i].size === 's') {
//         sSizes.push(products[i])
//     }
//     else if (products[i].size === 'l') {
//         lSizes.push(products[i])
//     }
//     else if (products[i].size === 'm') {
//         mSizes.push(products[i])
//     }
// }
// console.log(sSizes)
// console.log(lSizes)
// console.log(mSizes)

// let name = prompt("Ainura");
// let surname = prompt("Bektemirova");
// let age = +prompt("18");

// console.log(
//     name && surName && age
//         ? `Your name: ${name}, age:${age}, surName: ${surName}`
//         : `Введите: ${name ? "name" : } ${surName ? " " :
//             "surName"} ${age ? " " : "age"
//         }`
// )

// let login = prompt('enter your login');
// if (login === 'admin') {
//     let password = prompt('enter your password');
//     if (password === 'password') {
//         alert('welcome, admin!');
//     } else {
//         alert("wrong password!")
//     }

// }
// else { alert('unknown user') };

// let arr1 = [12, 45, 67, 56];
// let arr2 = [2, 105, 10, 122];
// let sum = []
// for (let i = 0; i < arr1.length; i++) {
//     sum[i] = arr1[i] + arr2[i]
// }
// console.log(sum)


// let a = 4, b = 5, c= 6
// if(a<b){
//     a =b
// }
// if(a<c){
//     a=c
// }
// console.log(a)

let a = [1, 3, 4, 5, 2, 3, 4]
let ar = a.splice(a  .length - 3, 3)
console.log(ar)
