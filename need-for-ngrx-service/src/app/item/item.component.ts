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
    this.cartService.cart.push(this.item);
  }

}
