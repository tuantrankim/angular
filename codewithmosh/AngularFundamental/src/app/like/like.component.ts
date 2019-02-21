import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input() likesCount = 0;
  @Input() isActive = false;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    if(this.isActive){
      this.likesCount--;
      this.isActive = false;
    }
    else
    {
      this.likesCount++;
      this.isActive = true;
    }
  }
 
}
