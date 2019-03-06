import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-course2',
  templateUrl: './course2.component.html',
  styleUrls: ['./course2.component.css']
})
export class Course2Component implements OnInit {

  courses$;
  course$;
  subscription: Subscription;

  constructor(db: AngularFireDatabase) {
    this.courses$= db.list('/courses').valueChanges();
    //this.course$ = db.list('/courses/1').snapshotChanges();
    this.course$ = db.list('/courses/1').valueChanges();

    console.log(this.courses$);
    console.log(this.course$);
  }

  ngOnInit() {
  }

  add(course: HTMLInputElement){
    
  }

}
