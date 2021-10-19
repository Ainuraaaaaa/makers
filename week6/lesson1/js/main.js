//dom, селекторы native js
// let h1 = document.getElementsByTagName('h1')
// console.log(h1);
// h1[0].style.color = 'red'
// let p = document.getElementsByClassName('paragraph')
// console.log(p);
// // p[0].style.fontSize = '24px'
// for (const val of p) {
//     val.style.fontSize = '24px'
//     val.style.fontWeight = 700
// }

// let firstSpan = document.getElementById('first-span')
// console.log(firstSpan)
// firstSpan.style.fontWeight = 700

// let h1 = document.querySelector('h1')
// console.log(h1)
// h1.style.color = 'green'
// let p = document.querySelectorAll('.paragraph')
// console.log(p)
// p.forEach(item => {
//     item.style.fontSize = '24px'
//     item.style.color = 'blue'
// })
// let span = document.querySelector('#first-span')
// let span = document.querySelector('.paragraph span')
// span.style.background = 'pink'

// let p = document.querySelector('.paragraph')
// // p.classList.toggle('paragraph')
// p.classList.add('text')
// // p.classList.remove('paragraph')
// p.classList.replace('paragraph', 'para')
// console.log(p.classList.value)

// let div = document.querySelector('div')
// let btn = document.createElement('button')
// btn.innerText = 'SAVE'
// div.append(btn)
// let lastP = document.getElementById('last-p')
// let text = lastP.innerText;
// // lastP.innerText += "coding is easy"
// lastP.innerHTML += "<strong class = 'str'> coding is easy </strong>"
// console.log(text)
// let allTags = document.querySelectorAll("*")
// console.log(allTags)

// let tagsAByGet = document.getElementsByTagName("a")
// let tagsAByQuery = document.querySelectorAll("a")
// let a = document.createElement("a")
// document.body.append(a)
// console.log(tagsAByGet)
// console.log(tagsAByQuery)

// let listItem = document.querySelectorAll("li")
// let listItemTag = listItem[0].outerHTML
// console.log(listItemTag)
// listItem.forEach((item, index) => {
//     if (index % 2 === 0)
//         item.style.background = 'violet'
// });

// let h3 = document.querySelector('h3')
// h3.outerHTML = `<h4>${h3.innerText}</h4>`

// let p = document.querySelector('p')
// pTags.forEach((item) => {
//     item.classList.toggle("second-title")
// });

// let h2 = document.querySelector('h2')
// //  let res = h2.hasAttribute("class")
// h2.setAttribute("class", "h2-title")
// h2.removeAttribute("id")
// h2.removeAttribute("class")

