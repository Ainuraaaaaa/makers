// ! localStorage, sessionStorage

// ! setItem, getItem, removeItem, clear
// ! JSON.stringify(), JSON.parse()

let user = {
    name: "Kamila",
};
localStorage.setItem("user", JSON.stringify(user)) // ! сохранить значение (ключ-значение)
let data = JSON.parse(localStorage.getItem("user")) // ! получить данные по ключу в формате строки
// localStorage.removeItem("user") // ! удаляет данные по ключу

// localStorage.clear() // ! удаляет все 

// sessionStorage.setItem("user", JSON.stringify(user))

// ! USERS LIST
let form = $('form')
let inpName = $('.inp-name')
let inpAge = $('.inp-age')
let inpCity = $('.inp-city')
let inputs = $("input")
let tbody = $("#tbody")

function addUser(event) {
    event.preventDefault()
    let name = inpName.val()
    let age = inpAge.val()
    let city = inpCity.val()
    let boolean = true;
    if (!name) {
        inpName.css("border", "3px solid red")
        boolean = false;

    } else {
        inpName.css("border", "1px solid")
    }
    if (!age) {
        inpAge.css("border", "3px solid red")
        boolean = false;
    } else {
        inpAge.css("border", "1px solid")
    }
    if (!city) {
        inpCity.css("border", "3px solid red")
        boolean = false;
    } else {
        inpCity.css("border", "1px solid")
    }

    if (!boolean) {
        return
    }
    let user = {
        name: name,
        age: age,
        city: city,
        id: Date.now(),
    };

    let users = JSON.parse(localStorage.getItem("list")) || []
    console.log(users)
    users.push(user)
    localStorage.setItem("list", JSON.stringify(users))

    inpName.val("")
    inpAge.val("")
    inpCity.val("")
    render()

}
inputs.on("input", (e) => {
    if (e.target.value) {
        $(e.target).css("border", "1px solid")
    }
})

inputs.on("blur", (e) => {
    if (!e.target.value) {
        $(e.target).css("border", "3px solid red")
    }
})

function render() {
    tbody.html("")
    let users = JSON.parse(localStorage.getItem("list")) || []
    users.forEach((item, index) => {
        tbody.append(`
        <tr>
             <th scope="row">${index + 1}</th>
             <td>${item.name}</td>
             <td>${item.age}</td>
             <td>${item.city}</td>
         </tr>
        
        `)
    });
}
render()
form.on("submit", addUser)
