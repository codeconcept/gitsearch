import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepoListComponent } from './repo-list/repo-list.component';

import { StoreModule } from '@ngrx/store';
import { reducer } from './state/repo.reducer';



@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('repos', reducer)
  ],
  declarations: [RepoListComponent],
  exports: [RepoListComponent]
})
export class RepoModule { }
