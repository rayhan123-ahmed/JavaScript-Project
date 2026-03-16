const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const emptyCard = document.getElementById("empty-card");
const cartTotal = document.getElementById("cart-total");
const totalPriceDisplay = document.getElementById("total-price");
const cheackoutBtn = document.getElementById("cheackout-btn");

const products = [
  { id: 1, name: "product 1", price: 29.99 },
  { id: 2, name: "product 2", price: 19.99 },
  { id: 3, name: "product 3", price: 9.99 },
];

const cart = []

products.forEach((product)=>{
   const productDiv = document.createElement('div');
   productDiv.classList.add("product");
   productDiv.innerHTML = `
   <span>${product.name} - ${product.price.toFixed(2)}</span> 
   <button data-id ="${product.id}">Add to card</button>
   `
   productList.appendChild(productDiv)

})

productList.addEventListener('click',(e)=>{
  if (e.target.tagName === 'BUTTON') {
     const productId = parseInt(e.target.getAttribute("data-id"));
     const product = products.find(p => p.id === productId)
     addToCart(product);
  }
})

function addToCart(product) {
    cart.push(product)
    renderCart(); 
}

function renderCart() {
    cartItems.innerText = '';
   let totalPrice = 0
    if (cart.length > 0) {
       emptyCard.classList.add('hidden');
       cartTotal.classList.remove('hidden');

    cart.forEach((item,index)=>{
        totalPrice += item.price;
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
        ${item.name} - $${item.price.toFixed(2)}
        `
        cartItems.appendChild(cartItem);
        totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}`;
    })

    }else{
       emptyCard.classList.remove("hidden");
       totalPriceDisplay.textContent = `$0.00`;
    }

}

cheackoutBtn.addEventListener('click',()=>{
    cart.length = 0
    renderCart()
})