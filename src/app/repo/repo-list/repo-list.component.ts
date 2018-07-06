import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Load } from '../state/repo.actions';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit() {
    console.log('ngOnInit repo-list');
    this.store.dispatch(new Load());
  }

}
