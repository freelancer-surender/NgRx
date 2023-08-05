import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { loadVegetables, loadVegetablesFailure, loadVegetablesSuccess } from "./vegetables.actions";
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { DataService } from "../services/data.service";

@Injectable()
export class VegetablesEffects {

  constructor(private actionsObs: Actions, private dataService: DataService) {}

  loadVegetablesObs = createEffect(() =>
    this.actionsObs.pipe(
      ofType(loadVegetables),
      mergeMap(() =>
        this.dataService.getVegetables().pipe(
          map((vegetables) => loadVegetablesSuccess({ vegetables })),
          catchError((error) => of(loadVegetablesFailure({ error })))
        )
      )
    )
  )
}
