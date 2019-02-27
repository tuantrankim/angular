import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-array-form',
  templateUrl: './array-form.component.html',
  styleUrls: ['./array-form.component.css']
})
export class ArrayFormComponent implements OnInit {

  form = new FormGroup({
    topics: new FormArray([])
  });
  constructor() { }

  ngOnInit() {
  }

    addTopic(topic:HTMLInputElement){
      this.topics.push(new FormControl(topic.value));
      topic.value = '';
    }
    get topics(){
      return this.form.get('topics') as FormArray;
    }
    removeTopic(topic: FormControl){
      let index = this.topics.controls.indexOf(topic);
      this.topics.removeAt(index);

    }
}
