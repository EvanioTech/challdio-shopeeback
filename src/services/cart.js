//ações no carrinho


// add item ao carrinho

async function addItemToCart(userCart, item) {
    userCart.push(item);
    return userCart;


}


//deletar item do carrinho

async function deleteItemFromCart(userCart, name) {
    const index = userCart.findIndex(item => item.name === name);
    if (index === -1) {
        return userCart;
    }
    userCart.splice(index, 1);
    return userCart;

    


}




//remover item do carrinho

async function removeItemCart(userCart, index) {

   // const deleteIndex = index - 1;

    if(index >= 0 && index < userCart.length){ {
        userCart.splice(index, 1);
        
    }

    
}
}





//calcular o toral do carrinho

async function calculateTotal(userCart) {
    console.log('\n Shopee cart TOTAL: ');
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);

    console.log(` 🎁Total: ${result}`);
}

async function displayCart(userCart) {
    
     userCart.forEach((item, index) => {
        console.log(`${index + 1} - Produto: ${item.name}  | Preço: ${item.price} reais | Quantidade: ${item.quantity} | SubTotal: ${item.subtotal()} reais.`);
    });

    calculateTotal(userCart);
}



export { addItemToCart, deleteItemFromCart, removeItemCart, calculateTotal, displayCart }