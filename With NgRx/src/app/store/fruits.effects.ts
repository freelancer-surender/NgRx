import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { loadFruits, loadFruitsFailure, loadFruitsSuccess } from "./fruits.actions";
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { DataService } from "../services/data.service";

@Injectable()
export class FruitsEffects {

  constructor(private actionsObs: Actions, private dataService: DataService) {}

  loadFruitsObs = createEffect(() =>
    this.actionsObs.pipe(
      ofType(loadFruits),
      mergeMap(() =>
        this.dataService.getFruits().pipe(
          map((fruits) => loadFruitsSuccess({ fruits })),
          catchError((error) => of(loadFruitsFailure({ error })))
        )
      )
    )
  )
}
