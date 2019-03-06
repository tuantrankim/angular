import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent  {

  items: any[] = [
    'Wash the dishes',
    'Call the accountatn',
    'Apply for a car insurance'
  ];

  addItem(input: HTMLInputElement) {
    //this.items.splice(0,0, input.value);
    input.value = '';
  }
  constructor() { }
  

}
