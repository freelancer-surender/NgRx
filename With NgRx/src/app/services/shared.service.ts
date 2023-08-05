import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  fruits: any[] = [];
  vegetables: any[] = [];

  constructor() { }


}
