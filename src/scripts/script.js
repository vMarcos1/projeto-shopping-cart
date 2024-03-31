const openShopping = document.querySelector('.shopping')
const closeShopping = document.querySelector('.closeShopping')
const list = document.querySelector('.list')
const listCard = document.querySelector('.list-card')
const body = document.querySelector('body')
const total = document.querySelector('.total')
const quantity = document.querySelector('.quantity'
)
const card = document.querySelector('.card')

openShopping.addEventListener("click", () => {
    card.classList.add('ativo')

    
})
closeShopping.addEventListener("click", () => {
     card.classList.remove('ativo')
         
    
})

const products = [
    {
        id: 1,
        name: "Product name 1", 
        image: '1.PNG',
        price: 29.99,
    },

    {
        id: 2,
        name: "Product name 2", 
        image: '2.PNG',
        price: 29.99,
    },

    {
        id: 3,
        name: "Product name 3", 
        image: '3.PNG',
        price: 29.99,
    },

    {
        id: 4,
        name: "Product name 4", 
        image: '4.PNG',
        price: 29.99,
    },

    {
        id: 5,
        name: "Product name 5", 
        image: '5.PNG',
        price: 29.99,
    },

    {
        id: 6,
        name: "Product name 6", 
        image: '6.PNG',
        price: 29.99,
    },
];

const listItens = []

function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div')
        newDiv.classList.add('item')
        newDiv.innerHTML = `
        <img src="src/image/${value.image}">
        <div class="title">${value.name}</div>
        <div class="price"> ${value.price.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</div> 
        <button onclick="addToCard(${key})">Adicionar ao Carrinho</button>

        `
        list.appendChild(newDiv)

    })

}
initApp()

function addToCard(key) {
    if (listItens[key] == null) {
        listItens[key] = products[key]
        listItens[key].quantity = 1

    }
    reloadCard()
}

function reloadCard() {
    listCard.innerHTML = ''
    let count = 0
    let totalPrice = 0
    listItens.forEach((value, key) => {
        totalPrice = totalPrice + value.price
        count = count + value.quantity  

        if(value != null) {
            let newDiv = document.createElement('li')
            newDiv.innerHTML = `
            <div><img src="src/image/${value.image}"></div>
            <div>${value.name}</div>
            <div>${value.price.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</div>
            <div>
                <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                <div class="count">${value.quantity}</div>
                <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
            </div>

            `
            listCard.appendChild(newDiv)
        }
    })
    total.innerHTML = totalPrice.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})
    quantity.innerHTML = count
}

function changeQuantity(key, quantity) {
    if(quantity == 0) {
        delete listItens[key]
    } else {
        listItens[key].quantity = quantity
        listItens[key].price = quantity * products[key].price
    }
    reloadCard()
}