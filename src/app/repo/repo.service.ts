import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Repo } from "./repo";

@Injectable({
  providedIn: 'root'
})
export class RepoService {
  reposUrl = 'https://api.github.com/users/codeconcept/repos';

  constructor(private http: HttpClient) {}

  getRepos(): Observable<Repo[]> {
    return this.http.get<Repo[]>(this.reposUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data)))
      )
  }
}