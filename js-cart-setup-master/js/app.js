// show cart
(function (){
const cartInfo = document.getElementByID('cart-info');
const cart = document.getElementById('cart');

cartInfo.addEventListener('click', function(){
cart.classList.toggle('show-cart');
})

})();
