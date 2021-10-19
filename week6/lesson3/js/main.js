//  ! jQuery

// let allElems = $("*")
// let allElems = jQuery("*")
// console.log(allElems)

//tagName
// let h1 = $("h1")
// console.log(h1)
// h1.css('fontSize', '24px')

//className
let month = $('.october')
console.log(month)

//native js
// let liTags = document.querySelectorAll('li')
// liTags.forEach((item) => {
//     item.style.color = 'blue'
// })

//jQuery
// let liTags = $('li')
// liTags.css('color', 'blue')
// let thirdLiTag = $("li:nth-child(3)") //по порядковому номеру
// thirdLiTag.css('color', 'green')
// let first = $("li:first-child")
// first.css('fontWeight', '700')
// $('li:last-child').css('fontSize', '30px')

// let inputs = $('input')
// let disabledInput = $('input:disabled')
// console.log(disabledInput)

// let liTags = $('li')
// liTags.addClass('list-item')
//liTags.toggleClass('list-item)
//liTags.toggleClass('active')
//liTags.removeClass('list=item')
// let result = liTags.hasClass('active')
// console.log(result)

// let divsWithoutClass = $('div:not(.block)')
// console.log(divsWithoutClass)

// let paragraph = $('.text')
// let text = paragraph.text();
// console.log(text)
// paragraph.text(paragraph.text() + " Hello")


// let div = $('#users')
// let users = [
//     {
//         name: "Aibek",
//         age: 25,
//     },
//     {
//         name: "Sasha",
//         age: 15,
//     },
//     {
//         name: "Turat",
//         age: 20,
//     },
// ]
// users.forEach(item => {
//     div.append(`
//     <p>Имя: ${item.name} Возраст: ${item.age}</p>

//     `)
// })

// let google = $('a[href="yandex.ru"]')
// console.log(google)

// let p = $('p')
// p.text(new Date())


// let google = $('a:first')
// // let href = google.attr('href', 'amazon.com')
// // google.removeAttr('href')
// // google.attr("id", "global")
// // console.log(href)
// let href = google.prop('href')
// console.log(href)

let liTags = $('li')
liTags.each((index, element) => {
    console.log(index, element)
    if (index % 2 !== 0) {
        $(element).css('background', 'red')
    }
})