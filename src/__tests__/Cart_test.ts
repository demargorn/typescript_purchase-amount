import { IBuyable } from '../interfaces/IBuyable';
import { IProduct } from '../interfaces/IProduct';
import { Cart } from '../Cart';

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

test('test Cart push method with %o values', () => {
   cart.push(banana);
   expect(cart.getItems()).toEqual([banana]);
});

test('test Cart getItems method', () => {
   expect(cart.getItems()).toEqual([banana]);
});

test('test Cart totalCost method', () => {
   expect(cart.totalCost()).toBe(100);
});

test('test Cart totalCostWithDiscount method with %n values', () => {
   expect(cart.totalCostwithDiscount(25)).toBe(75);
});

test('test Cart removeItem method with %o values', () => {
   cart.removeItem(245);
   expect(cart.getItems()).toEqual([]);
});

test('test Cart add method with %o values', () => {
   cart.add(film);
   expect(cart.getProducts()).toEqual([
      {
         id: 105,
         price: 355,
         repeatPurchase: false,
      },
   ]);
});

test('test Cart getProducts method', () => {
   expect(cart.getProducts()).toEqual([
      {
         id: 105,
         price: 355,
         repeatPurchase: false,
      },
   ]);
});

test('test Cart totalPrice method', () => {
   expect(cart.totalPrice()).toEqual(355);
});

test('test Cart totalPricewithDiscount method with %n values', () => {
   expect(cart.totalPricewithDiscount(10)).toEqual(319.5);
});

test('test Cart removeProduct method', () => {
   cart.removeProduct(105);
   expect(cart.getProducts()).toEqual([]);
});
