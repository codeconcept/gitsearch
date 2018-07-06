import { Repo } from "../repo";

import { Action } from "@ngrx/store";

export enum RepoActionTypes {
  Load = "[Repo] Load",
  LoadSuccess = "[Repo] Load success",
  LoadFailure = "[Repo] Load failure"
}

/**
 * actions creators
 */
export class Load implements Action {
  type = RepoActionTypes.Load;

  constructor(public payload: any = null) {}
}

export class LoadSuccess implements Action {
  type = RepoActionTypes.LoadSuccess;

  constructor(public payload: Repo[]) {}
}

export class LoadFailure implements Action {
  type = RepoActionTypes.LoadFailure;

  constructor(public payload: string) {}
}

/**
 * custom type for all possible repo action types
 */
export type RepoActions = Load | LoadSuccess | LoadFailure;
