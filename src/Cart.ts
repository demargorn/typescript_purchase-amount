import { IBuyable } from './interfaces/IBuyable';
import { IProduct } from './interfaces/IProduct';

class Cart {
   constructor(private multiItems: IBuyable[] = [], private singleItems: Set<IProduct> = new Set()) {}

   push(item: IBuyable): void {
      this.multiItems.push(item);
   }

   getItems(): IBuyable[] {
      return [...this.multiItems];
   }

   totalCost(): number {
      return this.multiItems.reduce((total, item) => total + item.price, 0);
   }

   totalCostwithDiscount(discount: number): number {
      return this.multiItems.reduce((total, item) => total + item.price - (total + (item.price * discount) / 100), 0);
   }

   removeItem(id: number): void {
      const idx = this.multiItems.findIndex((item) => item.id === id);
      this.multiItems.splice(idx, 1);
   }

   add(item: IProduct): void {
      this.singleItems.add(item);
   }

   getProducts(): IProduct[] {
      return Array.from(this.singleItems).map((item) => item);
   }

   totalPrice(): number {
      return Array.from(this.singleItems).reduce((total, item) => total + item.price, 0);
   }

   totalPricewithDiscount(discount: number): number {
      return Array.from(this.singleItems).reduce(
         (total, item) => total + item.price - (total + (item.price * discount) / 100),
         0
      );
   }
   removeProduct(id: number): void {
      const remove = Array.from(this.singleItems).find((item) => item.id === id);
      this.singleItems.delete(remove);
   }
}

export { Cart };
