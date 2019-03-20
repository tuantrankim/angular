import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService) { }

  ngOnInit() {
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    //instead using map, switchMap convert observable of Obj to Obj
    //map => follower is observable<obj>
    //switchMap => follower is obj
    .pipe(switchMap(combined =>{
      let id = combined[0].get('id');
      let page = combined[1].get('page');
      console.log(id, page);
      
      return this.service.getAll();
    }))
      .subscribe(followers =>{
      this.followers = followers as any[];
    });

    // combine subscribe
    // this.route.paramMap.subscribe(params =>{});
    // this.route.queryParamMap.subscribe(params=>{});

    
  }

  ngOnInit1() {
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
      .subscribe(combined =>{
      let id = combined[0].get('id');
      let page = combined[1].get('page');

      console.log(id, page);

      this.service.getAll()
        .subscribe(followers => this.followers = followers as any[]);

    });
  }
}
