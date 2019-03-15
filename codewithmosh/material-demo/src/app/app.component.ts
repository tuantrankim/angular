import { Component } from '@angular/core';
import { timer, Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { AnimalComponent } from './animal/animal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'material-demo';
  isChecked = true;
  colors = [
    {id:1, name: 'Red'},
    {id:2, name: 'Green'},
    {id:3, name: 'Blue'}
  ];

  color = 2;
  minDate = new Date('01/01/2019');
  maxDate = new Date('01/15/2019');

  categories =[
    {name: 'Beginner', selected: false},
    {name: 'Intermediate', selected: false},
    {name: 'Advanced', selected: false},
  ];

  progress = 0;
  timer;

constructor(private dialog: MatDialog) {
  this.isLoading = true;
  this. progressSpinnerUpdate();
  this. progressSpinnerUpdate2();
}
  onChange($event){
    console.log($event);
  }
  selectCategory(category){
    this.categories
      .filter(c=> c!= category)
      .forEach(c => c.selected = false);

      category.selected = !category.selected;
  }

  progressSpinnerUpdate(){
    this.timer = setInterval(()=>{
      this.progress++;
      if(this.progress === 100) clearInterval(this.timer);
    },20);
  }

  isLoading;
  timer2;
  progressSpinnerUpdate2(){
    this.timer2 = timer(5000);
    this.timer2.subscribe(data => this.isLoading = false);
  }
  openDialog(){
    this.dialog.open(EditCourseComponent,{
      data:{courseId: 1}
    })
    .afterClosed()
    .subscribe(result =>console.log(result));
    console.log('open dialog');
  }
  
  animal: string;
  name: string;

  openDialog2(): void {
    const dialogRef = this.dialog.open(AnimalComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
