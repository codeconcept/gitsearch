import { Repo } from '../repo';
import { RepoActionTypes, RepoActions } from './repo.actions';

export interface RepoState {
  repos: Repo[];
  requestedAt: Date;
  errorMessage: string;
}

const initialState: RepoState = {
  repos: [],
  requestedAt: null,
  errorMessage: ''
}

export function reducer(state = initialState, action: RepoActions) {
  switch(action.type) {
    case RepoActionTypes.LoadSuccess:
      return {
        ...state,
        repos: action.payload,
        requestedAt: new Date().toISOString()
      }
    default:
      return state;
  }
}