import { Component, OnInit } from '@angular/core';
import { Follower, GithubFollowersService } from '../services/github-followers.service';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: Follower[];

  constructor(private service: GithubFollowersService) { }

  ngOnInit() {
    this.service.getAll().subscribe(
      data => {this.followers = data;},
      error => {alert(error.message);}
    );
  }

}
