import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  //using alias name incase refactor property/event name
  @Input('isFavorite') isFavorite: boolean;
  @Output('change') change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.isFavorite = !this.isFavorite;
    //this.change.emit(this.isFavorite);
    // we can pass an complex object e.g.:
    this.change.emit({newValue:this.isFavorite});
  }
}

export interface FavoriteChangeEventArgs{
  newvalue: boolean
}
