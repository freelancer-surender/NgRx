import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() cart: any[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToFruits() {
    this.router.navigate(['fruits']);
  }

  goToVegetables() {
    this.router.navigate(['vegetables']);
  }

}
