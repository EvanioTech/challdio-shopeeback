import { createItem } from "./services/item.js";
import * as cartService from "./services/cart.js";


const myCart = [];
const myWishlist = [];

console.log('welcome to the store!');

const item1 = await createItem('mouse', 20, 3);
const item2 = await createItem('teclado', 150, 2);
const item3 = await createItem('placa de video', 3589.50, 2);
const item4 = await createItem('monitor', 890.55, 4);
const item5 = await createItem('fone de ouvido', 50, 9);
const item6 = await createItem('cabo hdmi', 19.98, 5);

 await cartService.addItemToCart(myCart, item1);
 await cartService.addItemToCart(myCart, item2);
 await cartService.addItemToCart(myCart, item3);
 await cartService.addItemToCart(myCart, item4);
 await cartService.addItemToCart(myWishlist, item5);
    await cartService.addItemToCart(myWishlist, item6);

    //await cartService.deleteItemFromCart(myCart, item1.name);
    //await cartService.deleteItemFromCart(myCart, item4.name);
    ///await cartService.deleteItemFromCart(myCart, item3.name);
    //await cartService.deleteItemFromCart(myCart, item2.name);
    

   await cartService.removeItemCart(myCart, item1);
   await cartService.removeItemCart(myCart, item2);

   await cartService.displayCart(myCart);
    
    


    

//console.log('Total a pagar ' , cartService.calculateTotal(myCart), 'reais');
//console.log('Total a pagar ' , item2.subtotal() + item3.subtotal() + item1.subtotal(), 'reais');
//console.log('desejos: ',cartService.calculateTotal(myWishlist));
//console.log( cartService.displayCart(myCart));
//console.log( cartService.displayCart(myWishlist));
