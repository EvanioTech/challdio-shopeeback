// casos de uso dos itens


// criar item com subtotal certo

async function createItem(name, price, quantity) {
  return {
    name,
    price,
    quantity,
    get subtotal() {
      return this.price * this.quantity;
    },
  }
}

export { createItem }