class Cart {
    constructor() {
        this.carts = []
        this.discount = ""
    }

    addItem(item) {
        if (item.quantity) item.quantity=1;
        this.carts.push()
        return this;
    }

    removeItem(item) {
        this.carts.splice(this.carts.findIndex(value => value.item.id), 1);
        return this;
    }

    addDiscount(discount) {
        this.discount = discount;
        return this;
    }

    totalItems() {
        console.log(this.carts.length);
    }

    totalQuantity() {
        console.log(this.carts.map((value) => value.quantity).reduce((a, b) => a+b))
    }

    showAll() {
        console.log(this.carts)
    }
}

const cart = new Cart();
// Do some chainings
cart.addItem({ item_id: 1, price: 30000, quantity: 3 })
    .addItem({ item_id: 2, price: 10000 })               // By default quantity is 1
    .addItem({ item_id: 3, price: 5000, quantity: 2 })
    .removeItem({item_id: 2})
    .addItem({ item_id: 4, price: 400, quantity: 6 })
    .addDiscount('50%')

cart.totalItems() // 3

cart.totalQuantity() // 11

cart.totalPrice() // 51200

cart.showAll() // Show all items in cart

cart.checkout() // Store data in a file