import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
  // form = new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   contact: new FormGroup({
  //     email: new FormControl(),
  //     phone: new FormControl()
  //   }),
  //   topics: new FormArray([])
  // });

  // Similar to above source code but using formbuilder
  
  form;

  constructor(fb: FormBuilder) { 
    this.form = fb.group({
      name:['', Validators.required],
      contact: fb.group({
        email:[],
        phone:[]
      }),
      topics: fb.array([])
    });

  }
  get topics(){
    return this.form.get('topics') as FormArray;
  }
  ngOnInit() {
  }
  addTopic(){
    let name = this.form.get('name') as FormControl;
    let email = this.form.get('contact.email')as FormControl;
    let phone = this.form.get('contact.phone')as FormControl;
    let topic =  name.value + ", " + email.value + ", " + phone.value;
    this.topics.controls.push(new FormControl(topic));
    name.setValue('');
    email.setValue('');
    phone.setValue('');
  }
  removeTopic(topic:FormControl){
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }
}
