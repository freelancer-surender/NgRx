import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  @Output() addItemToCart = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addToCart() {
    this.addItemToCart.emit();
  }

}
