import { IBuyable } from './interfaces/IBuyable';
import { IProduct } from './interfaces/IProduct';
import { Cart } from './Cart';

const cart = new Cart();
const banana: IBuyable = {
   id: 245,
   price: 100,
};

const film: IProduct = {
   id: 105,
   price: 355,
   repeatPurchase: false,
};

cart.push(banana);
console.log(cart.totalCost());
console.log(cart.totalCostwithDiscount(25));

cart.add(film);
console.log(cart);
console.log(cart.totalPrice());
console.log(cart.totalPricewithDiscount(10));
console.log(cart.removeItem(245));
console.log(cart.removeProduct(105));
console.log(cart);
