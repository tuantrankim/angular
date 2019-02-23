import { Component } from '@angular/core';
import { FavoriteChangeEventArgs } from './favorite/favorite.component';
import { CoursesComponent } from './courses.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: "Title",
    isFavorite: true
  }
  title = 'hello-world Angular app';

  courses=[
    {id:1, name:'course1'},
    {id:2, name:'course2'},
    {id:3, name:'course3'}
  ];
  viewMode = 'map';

  canSave = true;

  task = {
    title: 'Review application',
    //assignee: {name: 'John Smith'}
    assignee: null
  };
  onFavoriteChange(eventArgs: FavoriteChangeEventArgs){
    console.log("Favorite changed: ", eventArgs);
  }

  onAdd(){
    this.courses.push({id:4, name: 'course4'});
  }
  onRemove(course){
    let index = this.courses.indexOf(course);
    this.courses.splice(index,1);

  }
  onChange(course){
    course.name = 'UPDATED';
  }
  loadCourses(){
    this.courses = [
      {id:1, name:'course1'},
      {id:2, name:'course2'},
      {id:3, name:'course3'}
    ];
  }

  trackCourse(index, course){
    return course? course.id : undefined;
  }
}
