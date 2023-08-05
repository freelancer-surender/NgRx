import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { selectVegetables } from '../store/vegetables.selectors';
// import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.scss'],
})
export class VegetablesComponent implements OnInit {
  // onion = {
  //   id: 4,
  //   name: "Onion",
  //   pic: "https://media.istockphoto.com/id/621472882/photo/purple-onion-on-white.jpg?s=612x612&w=0&k=20&c=4W3IQtB5XkkKPT-a22MgkmL-hrn-2FPiUchL-hLbtFk="
  // };

  // tomato = {
  //   id: 5,
  //   name: "Tomato",
  //   pic: "https://media.istockphoto.com/id/91476821/photo/three-tomatoes.jpg?b=1&s=612x612&w=0&k=20&c=eOyYlyUEClMkm9hqYX7IMGEHqKYnAiLKr5tF80cAI84="
  // };

  // potato = {
  //   id: 6,
  //   name: "Potato",
  //   pic: "https://media.istockphoto.com/id/157430678/photo/three-potatoes.jpg?b=1&s=612x612&w=0&k=20&c=txk4DGWXL9cntyePO6C-X8inysng0mQ0lCuW2FdjG00="
  // };

  vegetables: any[] = [];
  // isLoading = true;

  constructor(
    private dataService: DataService,
    private store: Store<AppState>
    // private sharedService: SharedService
    ) {}

  ngOnInit(): void {
    // this.isLoading = true;
    // this.dataService.getVegetables().subscribe((res) => {
    //   this.vegetables = res;
    //   this.isLoading = false;
    // });
    // this.vegetables = this.sharedService.vegetables;
    this.store.select(selectVegetables).subscribe((res) => {
      this.vegetables = res.vegetables;
    });
  }
}
