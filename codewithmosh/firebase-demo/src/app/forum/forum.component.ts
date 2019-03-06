import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  articles$;
  article = {
    title:"",
    content:""
  }
  constructor(private db: AngularFireDatabase) {
    this.articles$= db.list('/articles').valueChanges();

    // this.subscription = db.list('/articles')
    // .valueChanges()
    // .subscribe(courses =>{
    //   this.courses = courses;
    //   console.log(this.courses);
    // });
  }
  ngOnInit() {
  }
  submit(f)
  {
    console.log(this.article);
    console.log(f);

    //push to firebase
    const afList = this.db.list('/articles')
    afList.push(this.article);
    const listObservable = afList.snapshotChanges();
    listObservable.subscribe();

    this.article = {
      title:"",
      content:""
    }

  }
}
