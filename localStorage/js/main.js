// let btn = $(".btn");
// let inp = $(".task-input");
// let list = $(".task-list");

// btn.on('click', function () {
//     if (!inp.val()) {
//         alert('Введите данные')
//         return
//     }
//     let obj = {
//         task: inp.val()
//     }
//     setItemToStorage(obj)
//     render()
// })

// function setItemToStorage(task) {
//     if (!localStorage.getItem('tasks-data')) {
//         localStorage.setItem('tasks-data', '[]')
//     }
//     let data = JSON.parse(localStorage.getItem('tasks-data'));
//     data.push(task)
//     localStorage.setItem('tasks-data', JSON.stringify(data))

// }
// function render() {
//     if (!localStorage.getItem('tasks-data')) {
//         localStorage.setItem('tasks-data', '[]')
//     }
//     let newData = JSON.parse(localStorage.getItem('tasks-data'))
//     // console.log(newData)
//     list.html('')
//     newData.forEach(item => {
//         list.append(`<li>${item.task}<button class ="btn-delete">Delete</button></li>`)
//     });
// }

// $('body').on('click', '.btn-delete', function () {

//     let data = JSON.parse(localStorage.getItem('tasks-data'))
//     // console.log(data)
//     let index = $(this).parent().index()
//     data.splice(index, 1)
//     localStorage.setItem('tasks-data', JSON.stringify(data))
//     // console.log(index)
//     render()
// })
// render()


// let list = $('.task-list')

// XMLHttpRequest
// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'http://localhost:3000/todos')
// xhr.send();
// xhr.onload = function () {
//     // console.log(xhr.response)
//     let data = JSON.parse(xhr.response);
//     // console.log(data)
//     data.forEach(element => {
//         list.append(`<li>${element.task}</li>`)
//     });
// }

//fetch
// let list = $('.task-list')
// let promise = fetch('http://localhost:3000/todos');
// promise
//     .then(response => (response.json()))
//     .then(data => {
//         // console.log(data)
//     })

//ajax

// let list = $('.task-list')
// $.ajax({
//     url: 'http://localhost:3000/todos',
//     type: 'GET',
//     success: function (data) {
//         // console.log(data)
//         data.forEach(element => {
//             list.append(`<li>${element.task}</li>`)
//         });

//     },
//     error: function () {
//         console.log('ERROR')
//     }
// })

let btn = $('.btn')
let inp = $('.task-input');
let list = $('.task-list')

btn.on('click', function () {
    let value = inp.val()
    console.log(value);
})