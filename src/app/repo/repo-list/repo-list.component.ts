import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Load } from '../state/repo.actions';
import { Observable } from 'rxjs';

import { Repo } from '../repo';
import { getAllRepos, getRequestDatetime } from '../state/repo.selectors';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements OnInit {
  repos$: Observable<Repo[]>;
  requestDates$: Observable<Date>;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    console.log('ngOnInit repo-list');
    this.repos$ = this.store.select(getAllRepos);
    this.requestDates$ = this.store.select(getRequestDatetime);
    this.store.dispatch(new Load());
  }

}
