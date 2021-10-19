// let arr8 = ['hello', 'helloworld', 'romantic', 'lovely', 'attraction']
// let newArr8 = arr8.filter((item, index, array) => {
//     return item.length > 5
// })
// console.log(newArr8)


// let elevator = {
//     minFloor: 1,
//     maxFloor: 16,
//     currentFloor: 1,
//     printFloor() {
//         console.log(this.currentFloor)
//     },
//     upOneFloor() {
//         if (this.currentFloor < this.maxFloor) {
//             this.currentFloor++
//             this.printFloor()
//         } else {
//             alert("вы достигли максимального этажа")
//         }
//     },
//     downOneFloor() {
//         if (this.currentFloor > this.minFloor) {
//             this.currentFloor--
//             this.printFloor()
//         } else {
//             alert("вы достигли минимального этажа")
//         }
//     },
//     toFloor(floor) {
//         if (floor <= 16 && floor >= 1) {
//             while (this.currentFloor !== floor) {
//                 this.currentFloor > floor ? this.downOneFloor() : this.upOneFloor()
//             }
//         }
//         else {
//             alert("такого этажа не существует")
//         }
//     },
// }
// elevator.printFloor()
// elevator.upOneFloor()
// elevator.downOneFloor()

// elevator.toFloor(14)
// elevator.toFloor(5)

let arr8 = ['hello', 'helloworld', 'romantic', 'lovely', 'attraction']
let newArr8 = arr8.filter((item, index, array) => {
    return item.length > 5
})
console.log(newArr8)