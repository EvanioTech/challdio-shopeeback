//ações no carrinho


// add item ao carrinho

async function addItemToCart(userCart, item) {
    userCart.push(item);
    return userCart;


}


//deletar item do carrinho

async function deleteItemFromCart(userCart) {


}




//limpar carrinho

async function clearCart(userCart) {
}


//calcular o toral do carrinho

async function calculateTotal(userCart) {
    return userCart.reduce((total, item) => total + item.subtotal(), 0);
}



export { addItemToCart, deleteItemFromCart, clearCart, calculateTotal }