import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Store } from '@ngrx/store';
import { loadFruits } from './store/fruits.actions';
import { loadVegetables } from './store/vegetables.actions';
// import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isFruitsLoading = true;
  isVegetableLoading = true;
  constructor(
    private dataService: DataService,
    // private sharedService: SharedService,
    private store: Store
  ) {}

  ngOnInit(): void {
    // this.isFruitsLoading = true;
    // this.isVegetableLoading = true;
    // this.dataService.getFruits().subscribe((res) => {
    //   this.sharedService.fruits = res;
    //   this.isFruitsLoading = false;
    // });
    // this.dataService.getVegetables().subscribe((res) => {
    //   this.sharedService.vegetables = res;
    //   this.isVegetableLoading = false;
    // });
    this.store.dispatch(loadFruits());
    this.store.dispatch(loadVegetables());
  }
}
