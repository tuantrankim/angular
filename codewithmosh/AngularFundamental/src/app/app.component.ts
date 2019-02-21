import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularFundamental';
  tweet = {
    body:'Here is the body of a tweet...',
    isActive: true,
    likesCount:10
  }
}
