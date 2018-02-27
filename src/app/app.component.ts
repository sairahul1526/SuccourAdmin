import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

export interface Succour {
  image: string;
  number: number;
  zero: number;
  first: number;
  second: number;
  description: string;
  location: string;
  latitude: string;
  longitude: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  public succours: FirebaseListObservable<Succour[]>;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {

  }

  submit(name) {
    this.succours = this.db.list(name.toLowerCase());
  }

  remove(succour) {
    this.succours.remove(succour);
  }

}
