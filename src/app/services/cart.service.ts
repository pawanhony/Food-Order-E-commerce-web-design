import { Injectable } from '@angular/core';

import { CartItem } from '../shared/model/CartItem';
import { Foods } from '../shared/model/food';
import { Cart } from '../shared/model/Cart';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  
  private cart: Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  
  

  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  private setCartToLocalStorage(): void {
    this.cart.totalCount = this.cart.items
      .reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
    this.cart.totalCount = this.cart.items
      .reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);

    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart);
  }
  
 
  addToCart(food:Foods) : void {
    let cartItem = this.cart.items.find(item => item.food.id === food.id)
    if (cartItem){
    this.changeQuantity(food.id, cartItem.quantity +1)
    return;
    }
    this.cart.items.push(new CartItem(food));
  }

  removeFormCart(foodId:number) {
    this.cart.items = this.cart.items.filter(item => item.food.id != foodId)
  }

  changeQuantity(quantity:number, foodId: number) {
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    if (!cartItem) return;
    cartItem.quantity = quantity;
  }

  

  private getCartFromLocalStorage(): Cart {
    const cartJson = localStorage.getItem('Cart');
    return cartJson ? JSON.parse(cartJson) : new Cart();
  }
}


