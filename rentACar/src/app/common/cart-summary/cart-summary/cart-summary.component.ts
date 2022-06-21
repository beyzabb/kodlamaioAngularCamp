import { AdditionalCartItem } from './../../../models/additionalCartItem';
import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';
import { CartService } from 'src/app/services/cart.service';
import { AdditionalService } from 'src/app/models/additionalService';
import { Car } from 'src/app/models/cars';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css'],
})
export class CartSummaryComponent implements OnInit {
  cartItems: CartItem[] = [];
  additionalCartItems:AdditionalCartItem[]=[]

  constructor(public cartService: CartService) {}

  ngOnInit(): void {
    this.getCartItems();
  }
  getCartItems() {
    this.cartItems = this.cartService.list();
    this.additionalCartItems = this.cartService.list2();
  }
  removeFromCart(car:Car){
    this.cartService.removeFromCart(car)
  }
  removeFromCart2(additionalService:AdditionalService){
    this.cartService.removeFromCart2(additionalService)
  }
}
