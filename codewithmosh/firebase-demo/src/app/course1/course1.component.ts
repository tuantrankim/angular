import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-course1',
  templateUrl: './course1.component.html',
  styleUrls: ['./course1.component.css']
})
export class Course1Component implements OnInit, OnDestroy {
  

  courses: any[];
  course;
  subscription: Subscription;

  constructor(private db: AngularFireDatabase) {
    this.subscription = db.list('/courses')
    .valueChanges()
    .subscribe(courses =>{
      this.courses = courses;
      console.log(this.courses);
    });

    this.subscription = db.list('/courses/2')
    // .snapshotChanges()
    .valueChanges()
    .subscribe(course =>{
      this.course = course;
      console.log(this.course);
      console.log(this.course);
    });
  }

  ngOnInit() {
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  add(course: HTMLInputElement){
    const afList = this.db.list('/courses')
    afList.push({name:course.value, isPrimary:true, students:10000});
    const listObservable = afList.snapshotChanges();
    listObservable.subscribe();
  }
}
