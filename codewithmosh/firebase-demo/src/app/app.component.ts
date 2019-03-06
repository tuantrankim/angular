import { Component, OnDestroy } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database'
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnDestroy{
 
  title = 'firebase-demo';
  subscription: Subscription;
  constructor() {
  }
  
  ngOnDestroy(): void {
  }
}
