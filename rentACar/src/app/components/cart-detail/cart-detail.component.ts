import { Login } from './../../models/login';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { City } from './../../models/city';
import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';
import { AdditionalCartItem } from 'src/app/models/additionalCartItem';
import { CartService } from 'src/app/services/cart.service';
import { Car } from 'src/app/models/cars';
import { AdditionalService } from 'src/app/models/additionalService';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {

  cities:City[]
  cartItems: CartItem[] = [];
  users:Login[];
  additionalCartItems:AdditionalCartItem[]=[]
  checkoutForm:FormGroup
  constructor(public cartService: CartService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createCheckoutForm()
    this.getCartItems()
    this.getCities()
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

  createCheckoutForm(){
    this.checkoutForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      contactAddress: ['', Validators.required],
      billingAddress: ['', Validators.required],
    });
  }

  getCities(){
    this.cartService.getCities().subscribe(data=>{
      this.cities=data
    })
  }


}
