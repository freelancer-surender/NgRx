import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  cart: any[] = [];

  @Input() item: any;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart() {
    let cart = localStorage.getItem("cart") || "[]";
    this.cart = JSON.parse(cart);
    this.cart.push(this.item);
    localStorage.setItem("cart", JSON.stringify(this.cart));
    this.cartService.cartSubject.next("added");
  }

}
