import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { RepoListComponent } from './repo-list/repo-list.component';

import { StoreModule } from '@ngrx/store';
import { reducer } from './state/repo.reducer';
import { EffectsModule } from '@ngrx/effects';
import { RepoEffects } from './state/repo.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('repos', reducer),
    EffectsModule.forFeature(
      [ RepoEffects ]
    ),
    HttpClientModule
  ],
  declarations: [RepoListComponent],
  exports: [RepoListComponent]
})
export class RepoModule { }
