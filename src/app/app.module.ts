import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { RepoModule } from './repo/repo.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: 'Gitsearch',
      maxAge: 15
    }),
    EffectsModule.forRoot([]),
    RepoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
