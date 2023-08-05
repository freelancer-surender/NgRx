import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getFruits() {
   let apple = {
      id: 1,
      name: "Apple",
      pic: "https://media.istockphoto.com/id/185262648/photo/red-apple-with-leaf-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=acFVqLYdwzZQ4WQRre3MUKW9PCMewLldoMVEXLyplkM="
    };

    let orange = {
      id: 2,
      name: "Orange",
      pic: "https://media.istockphoto.com/id/1357864202/photo/mandarine-orange-fruits-or-tangerines-isolated-on-white-background-fresh-mandarine-close-up.jpg?b=1&s=612x612&w=0&k=20&c=Nmwb013cZAQ6UeO033bKe90RThXlZ2gTODL5VQxqA6k="
    };

    let grapes = {
      id: 3,
      name: "Grapes",
      pic: "https://media.istockphoto.com/id/682505832/photo/ripe-red-grape-pink-bunch-with-leaves-isolated-on-white-with-clipping-path-full-depth-of-field.jpg?b=1&s=612x612&w=0&k=20&c=FV-KZqPFwi09flA5ZokOT4Pg2-1rbge1epBRpvqTLJY="
    };
    return of([apple, orange, grapes]).pipe(delay(5000));
  }

  getVegetables() {
    let onion = {
      id: 4,
      name: "Onion",
      pic: "https://media.istockphoto.com/id/621472882/photo/purple-onion-on-white.jpg?s=612x612&w=0&k=20&c=4W3IQtB5XkkKPT-a22MgkmL-hrn-2FPiUchL-hLbtFk="
    };

    let tomato = {
      id: 5,
      name: "Tomato",
      pic: "https://media.istockphoto.com/id/91476821/photo/three-tomatoes.jpg?b=1&s=612x612&w=0&k=20&c=eOyYlyUEClMkm9hqYX7IMGEHqKYnAiLKr5tF80cAI84="
    };

    let potato = {
      id: 6,
      name: "Potato",
      pic: "https://media.istockphoto.com/id/157430678/photo/three-potatoes.jpg?b=1&s=612x612&w=0&k=20&c=txk4DGWXL9cntyePO6C-X8inysng0mQ0lCuW2FdjG00="
    };
    return of([onion, tomato, potato]).pipe(delay(5000));
  }
}
