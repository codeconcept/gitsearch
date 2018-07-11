import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RepoState } from './repo.reducer';

export const getRepoState = createFeatureSelector<RepoState>(
  'repos'
);

export const getAllRepos = createSelector(getRepoState, data => data.repos);

export const getRequestDatetime = createSelector(getRepoState, data => data.requestedAt);
