import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';

import {environment} from '../environments/environment';
import { ZeroPipe } from './pipes/zero.pipe';
import { FirstPipe } from './pipes/first.pipe';
import { SecondPipe } from './pipes/second.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ZeroPipe,
    FirstPipe,
    SecondPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
