import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = []

  addtoCart(product) {
    this.items.push(product)
  }

  getItems() {
    return this.items
  }

  clearCart (){
  return this.items=[] 
  }
  constructor() { }

}