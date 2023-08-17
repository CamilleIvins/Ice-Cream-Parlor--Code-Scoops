const iceCream = [{
    name: 'Pistachio',
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

const vessels = [{
    name: 'Cup',
    price: .25,
    quantity: 0.,
},
{
    name: 'Waffle Cone',
    price: 1,
    quantity: 0
},
{
    name: 'Waffle Cone Cup',
    price: 1.5,
    quantity: 0
}]

const toppings = [{
    name: 'Hagelslag',
    price: .25,
    quantity: 0,
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
let taxElem = document.getElementById('tax')
let totalElem = document.getElementById('total')

// *SECTION - flavours

function buyPistachio() {
    // find the flavour amongst flavours
    // scoop +1 of said flavour
    // show we added scoop!
    let pistachio = iceCream.find((flavour) => flavour.name == 'Pistachio')
    pistachio.quantity++


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
    drawTotals()
    drawCart()
}

// *SECTION - vessels
function buyCup() {
    // find the flavour amongst flavours
    // scoop +1 of said flavour
    // show we added scoop!
    let cup = vessels.find((carry) => carry.name == 'Cup')
    cup.quantity++
    console.log('need a cup')

    drawTotals()
    drawCart()
}
function buyWaffleCone() {
    // find the flavour amongst flavours
    // scoop +1 of said flavour
    // show we added scoop!
    let waffle = vessels.find((carry) => carry.name == 'Waffle Cone')
    waffle.quantity++

    drawTotals()
    drawCart()
}
function buyWaffleCup() {
    // find the flavour amongst flavours
    // scoop +1 of said flavour
    // show we added scoop!
    let coneCup = vessels.find((carry) => carry.name == 'Waffle Cone Cup')
    coneCup.quantity++

    drawTotals()
    drawCart()
}

//SECTION - toppings

function buyHagelslag() {
    let sprinkles = toppings.find(topping => topping.name == 'Hagelslag')
    sprinkles.quantity++

    drawTotals()
    drawCart()
}

function buyChips() {
    let chips = toppings.find(topping => topping.name == 'Chocolate Chips')
    chips.quantity++

    drawTotals()
    drawCart()
}

function buyCookie() {
    let cookie = toppings.find(topping => topping.name == 'Cookie Chunks')
    cookie.quantity++
    drawTotals()
    drawCart()
}

//SECTION - draws
function drawTotals() {
    // find all purchases
    // give quantity * price
    let subTotal = 0
    let total = 0
    let tax = 0
    iceCream.forEach(flavour => {
        if (flavour.quantity > 0) {
            subTotal += flavour.quantity * flavour.price
        }
    })
    vessels.forEach(holder => {
        if (holder.quantity > 0) {
            subTotal += holder.quantity * holder.price
        }
    })
    tax = (subTotal * .06).toFixed(2)
    total = (subTotal * 1.06).toFixed(2)
    console.log(subTotal, total)

    subTotalElem.innerText = subTotal.toString()
    taxElem.innerText = tax.toString()
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
                 ${flavour.name}</div>
                <div class="col-md-4 col-12">x ${flavour.quantity}</div>
                <div class="col-md-4 col-12">${flavour.price}</div>
                </div>`
        }
    })
    vessels.forEach(holder => {
        if (holder.quantity > 0) {
            newCharge +=
                `  <div class="col-md-4 col-12">
                 ${holder.name}</div>
                <div class="col-md-4 col-12">x ${holder.quantity}</div>
                <div class="col-md-4 col-12">${holder.price}</div>
                </div>`
        }

    })
    toppings.forEach(topping => {
        if (topping.quantity > 0) {
            newCharge +=
                `  <div class="col-md-4 col-12">
                 ${topping.name}</div>
                <div class="col-md-4 col-12">x ${topping.quantity}</div>
                <div class="col-md-4 col-12">${topping.price}</div>
                </div>`
        }
        console.log(newCharge)
    })
    cartElem.innerHTML = newCharge
}

function removeItem(flavourName) {
    console.log('remove')
    let foundFlavour = iceCream.find(flavour => flavour.name == flavourName)
    foundFlavour.quantity--
    drawCart()
}

{/* <button class="mdi mdi-delete" onclick="removeItem('${flavour.name}')></button> <span>${flavour.name}</span></div> */ }
// `  <div class="d-flex justify-content-between">
// <span>${flavour.name} x ${flavour.quantity}</span>
// <span>${flavour.price}</span>
// </div>`