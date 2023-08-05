import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addToCart } from '../store/cart.actions';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: any;

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  addToCart() {
    this.store.dispatch(addToCart(this.item));
  }

}
