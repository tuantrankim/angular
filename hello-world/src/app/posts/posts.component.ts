import { Component, OnInit } from '@angular/core';
import { PostService, Post } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];
  error: any;
  headers: string[];

  constructor(private service: PostService) {
   }

  ngOnInit() {
    // this.showPostResponse();
    this.showPost();
  }

  private showPost() {
    this.service.getPosts()
      .subscribe((data: Post[]) => {
        this.posts = data;
      }
      // Comment the code to use global error handler
      // , error => {
      //   this.error = error;
      //   console.error('Error', error);
      // }
      );
  }

  showPostResponse() {
    this.service.getPostResponse()
    // resp is of type `HttpResponse<Post[]>`
    .subscribe(response => {
      // display its headers
      const keys = response.headers.keys();
      this.headers = keys.map(key => `${key}: ${response.headers.get(key)}`);

      // access the body directly, which is typed as `Post[]`.
      // this.posts = {...response.body};
      this.posts = response.body;
    }, error => {
      this.error = error;
      console.error('Error', error);
    });
  }

  createPost(input: HTMLInputElement) {
    const post = {id: null, title: input.value};
    input.value = '';

    this.service.createPost(post).subscribe(
      response => {
        post.id = response['id'];
        this.posts.splice(0, 0, post);
        console.log(response);
      }
      // Comment the code to use global error handler
      // ,
      // error => {
      //   console.log('Error', error);
      // }
    );
  }

  createPost_Optimistic(input: HTMLInputElement) {
    const post = {id: null, title: input.value};
    this.posts.splice(0, 0, post);

    input.value = '';

    this.service.createPost(post).subscribe(
      response => {
        post.id = response.id;
        console.log(response);
      }
      // Undo the add if there's error
      ,
      error => {
        this.posts.splice(0, 1);
        console.log('Error', error);
      }
    );
  }
  updatePost(post) {
    this.service.updatePost(post).subscribe(
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

    this.service.deletePost(post).subscribe(
      response => {
        const idx = this.posts.indexOf(post);
        this.posts.splice(idx, 1);
        console.log(response);
      },
      error => {
        if (error.status === 404) {
          alert('This pos has already been deleted.');
        } else { throw error; } // Throw the error to global error handler

      }
    );
  }

  deletePost_Optimistic(post) {
    const idx = this.posts.indexOf(post);
    this.posts.splice(idx, 1);

    this.service.deletePost(post).subscribe(
      null,
      error => {
        this.posts.splice(idx, 0, post); // add the post back

        if (error.status === 404) {
          alert('This pos has already been deleted.');
        } else { throw error; } // Throw the error to global error handler

      }
    );
  }

}
