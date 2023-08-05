import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  cartCount = this.store.select('cartCount');

  constructor(private router: Router, private store: Store<{cartCount: number}>) {}

  ngOnInit(): void {}

  goToFruits() {
    this.router.navigate(['fruits']);
  }

  goToVegetables() {
    this.router.navigate(['vegetables']);
  }
}
