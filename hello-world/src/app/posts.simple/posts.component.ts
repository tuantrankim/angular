import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];
  url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
   }

  ngOnInit() {
    this.http.get(this.url).subscribe(
      response => {
        this.posts = response as any[];
      },
      error => {
        console.log('Error', error);
      }
    );
  }

  createPost(input: HTMLInputElement) {
    const post = {title: input.value};
    input.value = '';

    this.http.post(this.url, post ).subscribe(
      response => {
        post['id'] = response['id'];
        this.posts.splice(0, 0, post);
        console.log(response);
      },
      error => {
        console.log('Error', error);
      }
    );
  }

  updatePost(post) {
    this.http.patch(this.url + '/' + post.id, {isRead: true}).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log('Error', error);
      }
    );
    // this.http.put(this.url, post);
  }

  deletePost(post) {

    this.http.delete(this.url + '/' + post.id).subscribe(
      response => {
        const idx = this.posts.indexOf(post);
        this.posts.splice(idx, 1);
      },
      error => {
        console.log('Error', error);
      }
    );
  }


}
