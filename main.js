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

function buyCookieDough() {
    // find the flavour amongst flavours
    // scoop +1 of said flavour
    // show we added scoop!
    let cookieDough = iceCream.find((flavour) => flavour.name == 'Cookie Dough')
    cookieDough.quantity++
    console.log('the diet crusher', cookieDough)

    total()
    drawCart()
}
function buyVanilla() {
    // find the flavour amongst flavours
    // scoop +1 of said flavour
    // show we added scoop!
    let vanilla = iceCream.find((flavour) => flavour.name == 'Vanilla')
    vanilla.quantity++
    console.log('the classic', vanilla)

    total()
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
function total() {
    // find all purchases
    // give quantity * price

    let total = 0
    iceCream.forEach(flavour => {
        if (flavour.quantity > 0) {
            total += flavour.quantity * flavour.price
        }
    })
    console.log(total)
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
                `  <div class="d-flex justify-content-between">
           <span>${flavour.name} x ${flavour.quantity}</span>
           <span>$$$</span>
       </div>`
        }
        console.log(newCharge)
    })
    cartElem.innerHTML = newCharge
}



