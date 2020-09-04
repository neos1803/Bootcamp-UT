import os.path

save_path = 'C:/Users/AppandSec/Documents/Bootcamp-UT/python-basic/oop/'
save = os.path.join(save_path, 'cart.txt')
f = open(save, "w")

class Cart:
    data = []
    disc = ""
    total_item = 0
    total_quantity = 0
    total_price = 0
    
    def addItem(self, e):
        n = {}
        if "quantity" in e:
            for k,v in e.items():
                n[k] = v
        else:
            for k,v in e.items():
                n[k] = v
                n["quantity"] = 1
        Cart.data.append(n)
        return self

    def removeItems(self, e):
        for i in range(len(Cart.data)):
            if Cart.data[i]["item_id"] == e["item_id"]:
                del Cart.data[i]
                break
        return self
    
    def addDiscount(self, e):
        Cart.disc = e
        return self

    @staticmethod
    def showAll():
        print(Cart.data)
    
    @staticmethod
    def totalQuantity():
        Cart.total_quantity = sum(k["quantity"] for k in Cart.data)
        print(Cart.total_quantity)
    
    @staticmethod
    def totalPrice():
        sum = 0
        discount = int(Cart.disc.split('%')[0])
        for i in range(len(Cart.data)):
            sum += (Cart.data[i]["price"] - Cart.data[i]["price"] * discount / 100) * Cart.data[i]["quantity"]
        Cart.total_price = sum
        print(sum)
    
    @staticmethod
    def totalItems():
        Cart.total_item = len(Cart.data)
        print(len(Cart.data))
    
    @staticmethod
    def checkOut():
        n = " data = {} \n Total Items = {} \n Total Quantity = {} \n Discount = {} \n Total Price = Rp {} ".format(Cart.data, Cart.total_item, Cart.disc, Cart.total_quantity, Cart.total_price)
        f.write(n)

cart = Cart()

cart.addItem({ "item_id": 1, "price": 30000, "quantity": 3 }).addItem({ "item_id": 2, "price": 10000 }).addItem({ "item_id": 3, "price": 5000, "quantity": 2 }).removeItems({'item_id': 2}).addDiscount('50%').addItem({ 'item_id': 4, 'price': 400, 'quantity': 6 })
# cart.addItem({ "item_id": 3, "price": 30000, "quantity": 5 })
# cart.addDiscounts
cart.showAll()
cart.totalQuantity()    
cart.totalPrice()
cart.totalItems()
cart.checkOut()
