import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  cart: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    if (localStorage.getItem('cart') === null) {
      localStorage.setItem('cart', JSON.stringify([]));
    }
    this.cartService.cartSubject.subscribe((res) => {
      let cart = localStorage.getItem('cart') || '[]';
      this.cart = JSON.parse(cart);
    });
  }
}
