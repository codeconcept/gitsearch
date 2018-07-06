import { Injectable } from "@angular/core";

import { RepoService } from "../repo.service";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { Action } from "@ngrx/store";
import { RepoActionTypes, LoadSuccess, LoadFailure } from "./repo.actions";
import { mergeMap, map, catchError } from "rxjs/operators";

@Injectable()
export class RepoEffects {
  constructor(private repoService: RepoService, private actionss$: Actions) {}

  @Effect()
  loadRepos$: Observable<Action> = this.actionss$.pipe(
    ofType(RepoActionTypes.Load),
    mergeMap(action => {
      console.log('action after filtering ', action);
      return this.repoService.getRepos().pipe(
        map(repos => {
          console.log('repos from Effect()', repos);
          return new LoadSuccess(repos);
        }),
        catchError(err => {
          console.log('error from repo.effect', err);
          return of(new LoadFailure(err));
        })
      )
    })
  );
}