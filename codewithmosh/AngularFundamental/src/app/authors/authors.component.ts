import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  
  // private _authors : string;
  // public get authors() : string {
  //   return this._authors;
  // }
  // public set authors(v : string) {
  //   this._authors = v;
  // }
  //or short term using

  authors;

  constructor(service: AuthorsService) { 
    this.authors = service.getAuthors();
  }

  ngOnInit() {
  }

}
