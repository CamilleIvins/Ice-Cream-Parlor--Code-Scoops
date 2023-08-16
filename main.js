const iceCream = [{
    name: 'Cookie Dough',
    price: 1.25,
    quantity: 0
},
{
    name: 'Vanilla',
    price: 1,
    quantity: 0
},
{
    name: 'Strawberry',
    price: 1.25,
    quantity: 0
}]

const toppings = [{
    name: 'Sprinkles',
    quantity: 0,
    price: .25
},
{
    name: 'Chocolate Chips',
    price: .25,
    quantity: 0
},
{
    name: 'Cookie Chunks',
    price: .5,
    quantity: 0
}]


let cartElem = document.getElementById('cart')
let subTotalElem = document.getElementById('subtotal')
let totalElem = document.getElementById('total')

function buyCookieDough() {
    // find the flavour amongst flavours
    // scoop +1 of said flavour
    // show we added scoop!
    let cookieDough = iceCream.find((flavour) => flavour.name == 'Cookie Dough')
    cookieDough.quantity++
    console.log('the diet crusher', cookieDough)

    drawTotals()
    drawCart()
}
function buyVanilla() {
    // find the flavour amongst flavours
    // scoop +1 of said flavour
    // show we added scoop!
    let vanilla = iceCream.find((flavour) => flavour.name == 'Vanilla')
    vanilla.quantity++
    console.log('the classic', vanilla)

    drawTotals()
    drawCart()
}
function buyStrawberry() {
    // find the flavour amongst flavours
    // scoop +1 of said flavour
    // show we added scoop!
    let strawberry = iceCream.find((flavour) => flavour.name == 'Strawberry')
    strawberry.quantity++
    console.log('the trickster', strawberry)

}

//SECTION - draws
function drawTotals() {
    // find all purchases
    // give quantity * price
    let subTotal = 0
    let total = 0
    iceCream.forEach(flavour => {
        if (flavour.quantity > 0) {
            subTotal += flavour.quantity * flavour.price
        }
    })
    total = (subTotal * 1.06).toFixed(2)
    console.log(subTotal, total)

    subTotalElem.innerText = subTotal.toString()
    totalElem.innerText = total.toString()
}

function drawCart() {
    // look at flavours
    // see if any flavours are in cart
    // yes? then how many * cost <-- mult quant and price
    // add upper line for each flavour to total of all flavours
    // draw to DOM
    let newCharge = ''

    iceCream.forEach(flavour => {
        if (flavour.quantity > 0) {
            newCharge +=
                `  <div class="col-md-4 col-12">
           ${flavour.name} </div>
           <div class="col-md-4 col-12">x ${flavour.quantity}</div>
           <div class="col-md-4 col-12">${flavour.price}</div>
       </div>`
        }
        console.log(newCharge)
    })
    cartElem.innerHTML = newCharge
}



// `  <div class="d-flex justify-content-between">
// <span>${flavour.name} x ${flavour.quantity}</span>
// <span>${flavour.price}</span>
// </div>`