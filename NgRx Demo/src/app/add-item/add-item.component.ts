import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addToCart, removeFromCart } from '../store/cart.actions';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent implements OnInit {

  constructor(private store: Store) {}

  ngOnInit(): void {}

  addToCart() {
    this.store.dispatch(addToCart({msg: "Item is added"}));
  }

  removeFromCart() {
    this.store.dispatch(removeFromCart());
  }
}
