import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  cart: any[] = [];

  subscribeToChildEmitter(componentRef: any) {
    componentRef.addToHeaderCart.subscribe((item: any) => {
      this.cart.push(item);
    });
  }

}
