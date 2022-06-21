import { City } from './../models/city';
import { HttpClient } from '@angular/common/http';
import { AdditionalCartItem } from './../models/additionalCartItem';
import { AdditionalCartItems } from './../models/cartItems';
import { AdditionalService } from 'src/app/models/additionalService';
import { Injectable } from '@angular/core';
import { Car } from '../models/cars';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient:HttpClient) { }

  addToCart(car:Car){
    let item = CartItems.find(c=>c.car.id===car.id);
    if(item){
      item.quantity+=1;
    }else{
      let cartItem = new CartItem();
      cartItem.car = car;
      cartItem.quantity =1;
      CartItems.push(cartItem)
    }
  }
  addToCart2(additionalService:AdditionalService){
    let items = AdditionalCartItems.find(c=>c.additionalService.id===additionalService.id);
    if(items){
      items.quantity+=1;
    }else{
      let cartItems = new AdditionalCartItem();
      cartItems.additionalService = additionalService;
      cartItems.quantity =1;
      AdditionalCartItems.push(cartItems)
    }
  }

  removeFromCart(car:Car){
    let item:CartItem = CartItems.find(c=>c.car.id===car.id);
    CartItems.splice(CartItems.indexOf(item),1); //splice silmek için kullanılır (git bellekteki yerini indeksini bul ve 1 tane sil)
  }

  removeFromCart2(additionalService:AdditionalService){
    let item:AdditionalCartItem = AdditionalCartItems.find(c=>c.additionalService.id===additionalService.id);
    AdditionalCartItems.splice(AdditionalCartItems.indexOf(item),1); //splice silmek için kullanılır (git bellekteki yerini indeksini bul ve 1 tane sil)
  }

  list():CartItem[]{
    return CartItems;
  }
  list2():AdditionalCartItem[]{
    return AdditionalCartItems;
  }

  getTotal():any{
    let total=0;
    CartItems.forEach(element=>{
      total=total+element.quantity*element.car.dailyPrice
    });
    AdditionalCartItems.forEach(element=>{
      total=total+element.quantity*element.additionalService.price});
      return total;
  }

  getTotalQuantity():any{
    let total=0;
    CartItems.forEach(element=>{
      total=total+element.quantity
    });
    AdditionalCartItems.forEach(element=>{
      total=total+element.quantity});
      return total;
  }

  getCities():Observable<City[]>{
    return this.httpClient.get<City[]>("http://localhost:3000/cities")
  }
  
    
}
