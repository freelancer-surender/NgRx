import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: any;

  @Output() addThisItemToCart = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addToCart() {
    this.addThisItemToCart.emit(this.item);
  }

}
