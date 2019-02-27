import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent implements OnInit {
  categories = [
     { id: 1, name: "Development" }
    , { id: 2, name: "Art" }
    , { id: 3, name: "Languages" }
  ];
  // course = {
  //   courseName:"",
  //   category:1,
  //   isGuarantee:true
  // }
  course = {
    courseName:null,
    category:null,
    isGuarantee:null
  }
  constructor() { }

  ngOnInit() {
  }

  submit(f)
  {
    console.log(this.course);
    console.log(f);
  }
}
