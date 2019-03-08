import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
// import 'rxjs/add/operator/catch';
// import { Observable, of } from 'rxjs';
import { Observable, EMPTY, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Post{
  id: number;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  // url = 'http://jsonplaceholder.typicode.com/posts1';
  url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }



  // retry request
  getPosts(){
    return this.http.get<Post[]>(this.url)
    .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    )
    ;
  }
  // simple version
  getPosts1() {
    return this.http.get(this.url);
    // .map(response => response.json()) //no need to do the map when using httpclient
    // return this.http.get(this.url, {observe: 'response'});
  }
  // strong type
  getPosts2(){
    return this.http.get<Post[]>(this.url);
  }

  // if want to use http response status
  getPostResponse(): Observable<HttpResponse<Post[]>> {
    return this.http.get<Post[]>(this.url, {observe: 'response'}).pipe(catchError(this.handleError));
  }

  createPost(post: Post){
    return this.http.post<Post>(this.url, post );
  }

  updatePost(post){
    return this.http.patch(this.url + '/' + post.id, {isRead: true});
  }

  deletePost(post){
    return this.http.delete(this.url + '/' + post.id);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
    } else {

      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
        // Known error
      if (error.status === 404) {
          return throwError(
            'Well known error: Invalid request');
        }

    }
     // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}


/*
https://angular.io/guide/http
*/
