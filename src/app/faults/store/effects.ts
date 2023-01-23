import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import * as FaultsActions from './actions'
import { FaultsService } from '../faults.service';

@Injectable()
export class FaultsEffects {

  getFaults$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FaultsActions.getFaults),
      mergeMap(() => {
        return this.faultsService.getFaults().pipe(
          map((faults) => FaultsActions.getFaultsSuccess({ faults })),
          catchError((error) =>
            of(FaultsActions.getFaultsFailure({ error: error.message }))
          )
        );
      })
    )
  );

  postFault$ = createEffect(() => this.actions$.pipe(
    ofType(FaultsActions.postFault),
    mergeMap(action => {
      console.log(action)
      return this.faultsService.postFault({ trayId: action.trayId, title: action.title }).pipe(map(data => {
        console.log(data)
      }))
    })
  ), { dispatch: false })

  constructor(private actions$: Actions, private faultsService: FaultsService) {
  }

}
