import { Repo } from "../repo";

import { Action } from "@ngrx/store";

export enum RepoActionTypes {
  Load = "[Repo] Load"
}

/**
 * actions creators
 */
export class Load implements Action {
  type = RepoActionTypes.Load;

  constructor(public payload: any = null) {}
}

/**
 * custom type for all possible repo action types
 */
export type RepoActions = Load;
