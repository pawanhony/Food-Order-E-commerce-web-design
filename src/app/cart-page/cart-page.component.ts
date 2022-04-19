import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/foods/food.service';
import { Cart } from '../shared/model/Cart';
import { CartItem } from '../shared/model/CartItem';

@Component({
  selector: 'cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  cart!: Cart;
  constructor(private cartservice:CartService, private foodservice:FoodService) {
    this.cartservice.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    })
    this.setCart();
   }

  ngOnInit(): void {
  }

  setCart() {
    
  }

  removeFromCart(cartItem: CartItem) {
    this.cartservice.removeFormCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem: CartItem, quantityInString:string) {
    const quantity = parseInt(quantityInString);
    this.cartservice.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }

}
