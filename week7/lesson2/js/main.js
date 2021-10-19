// ! типы запросов

const API = "http://localhost:8000/products"
//! Get
// ! fetch
// function getData() {
//     fetch(API)
//         .then((response) => {

//             if (response.ok) {
//                 return response.json();
//             } else {
//                 console.log(response.statusText)
//             }

//             response.json()
//         })
//         .then((data) => {
//             console.log(data)
//         })

// }
// getData();

//!axios
// async function getDataAxios() {
//     try {
//         const { data } = await axios(API)
//         console.log(data)
//     } catch (e) {
//         console.log(e.response.statusText, e.response)
//         const status = e.response.status
//         if (status == 404) {
//             console.log("Введите правильную ссылку")
//         } else if (status == 500) {
//             consolelog("Неполадки на сервере")

//         } else if (status == 403) {
//             console.log("Не авторизован")

//         }
//     }
// }
// getDataAxios()

// const num = 10;
// try {
//     num = 20;
// } catch (error) {
//     console.log(error)
// }

// ! POST

let input = document.querySelector("input")
let btn = document.querySelector("button")

// const addProduct = () => {
//     let value = input.value
//     let product = {
//         title: value,
//     }
//     fetch(API, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(product),
//     })
// }

// btn.addEventListener("click", addProduct)

// const addProduct = async () => {
//     let value = input.value
//     let product = {
//         title: value,
//     }
//     const res = await axios.post(API, product);
//     console.log(res)
// }

// btn.addEventListener("click", addProduct)

// ! PUT - заменяет весь объект на переданный объект
//! PATCH- заменяет только те поля которые передали остальные поля не трогает

function upDateProduct() {
    let editedProduct = {
        title: "Macbook m1pro",
    }
    // fetch(`${API}/1`, {
    //     method: 'PUT',
    //     headers: {
    //         'Content-Type': "application/json",
    //     },
    //     body: JSON.stringify(editedProduct),
    // })
    // ! с помощью аксиоса
    axios.patch(`${API}/2`, editedProduct)
}
upDateProduct()