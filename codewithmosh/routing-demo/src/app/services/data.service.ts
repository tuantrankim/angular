import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class DataService {
  constructor(private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url)
    .pipe(
      catchError(this.handleError)
    );
  }

  get(id) { 
    return this.http.get(this.url + '/' + id)
    .pipe(catchError(this.handleError));
  }

  create(resource) {
    return this.http.post(this.url, resource)
      .pipe(catchError(this.handleError));
  }

  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, { isRead: true })
      .pipe(catchError(this.handleError));
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id)
      .toPromise()
      .catch(this.handleError);
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

  // private handleError(error: Response) {
  //   if (error.status === 400)
  //     return Observable.throw(new BadInput(error.json()));
  
  //   if (error.status === 404)
  //     return Observable.throw(new NotFoundError());
    
  //   return Observable.throw(new AppError(error));
  // }
}
