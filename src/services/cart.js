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

async function removeItemCart(userCart, item) {

    // 1. encontrar o indice do item no carrinho

    const indexFound = userCart.findIndex((p) => p.name === item.name);

   // 2. se o item não existir, retornar o carrinho
   if (indexFound == -1) {
        console.log('Item não encontrado no carrinho');
       return;

    console.log('indexFound', indexFound);
}

// 3. se o item existir, decrementar a quantidade
if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity--;
    return;
}

// 4. se a quantidade for 1, remover o item do carrinho
if (userCart[indexFound].quantity == 1) {
    userCart.splice(indexFound, 1);
    console.log('Item removido do carrinho');
    
    
    return ;
}
console.log('Chamando calculateTotal...');
await calculateTotal(userCart);
console.log('Carrinho atualizado:', userCart);

return userCart;

}




//calcular o toral do carrinho



async function displayCart(userCart) {
    
     userCart.forEach((item, index) => {
        console.log(`${index + 1} - Produto: ${item.name}  | Preço: ${item.price} reais | Quantidade: ${item.quantity} | SubTotal: ${item.subtotal} reais.`);
    });

    calculateTotal(userCart);
}

async function calculateTotal(userCart) {
    console.log('\n Shopee cart TOTAL: ');
    const result = userCart.reduce((total, item) => total + item.subtotal, 0);

    console.log(` 🎁Total: ${result}`);
}



export { addItemToCart, deleteItemFromCart, removeItemCart, calculateTotal, displayCart }