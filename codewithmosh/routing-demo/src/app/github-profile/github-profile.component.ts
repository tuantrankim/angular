import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router2: Router
    ) { }

  ngOnInit() {
    // init and params snapshot be called when components change.
    console.log('github profile on init');
    let id1 = this.route.snapshot.paramMap.get('id');
    console.log('snapshot param: ',id1);

    // params changes but still on same components
    this.route.paramMap
    .subscribe(params=>{
      let id = +params.get('id');
      console.log(id);
    });
  }

  submit(){
    this.router2.navigate(['/follower'], {
      queryParams:{page:1, order: 'newest'}
    });
  }
}
