import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { AppUser } from '../models/app-user';
import { AppUserAuth } from '../models/app-user-auth';



@Injectable()
export class DataService {
  private baseUrl = '';
  private authBaseUrl = '';

  constructor(private http: HttpClient) {
    this.baseUrl = environment.MemberXSystem_Baseurl;
    this.authBaseUrl = environment.MemberXAuth_Baseurl;
  }

  getAll(action: string) {
    return this.http.get(this.baseUrl + '/' + action)
    .pipe(
      catchError(this.handleError)
    );
  }

  get(action: string, id) { 
    return this.http.get(this.baseUrl + '/' + action + '/' + id)
    .pipe(catchError(this.handleError));
  }

  create(action: string, resource) {
    return this.http.post(this.baseUrl + '/' + action, resource)
      .pipe(catchError(this.handleError));
  }

  auth(user: AppUser): Observable<AppUserAuth> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
    const usrName = encodeURIComponent(user.userName);
    const pass = encodeURIComponent(user.password);
    const data = `grant_type=password&username=${usrName}&password=${pass}`;
    return this.http.post<AppUserAuth>(this.authBaseUrl, data, httpOptions)
      .pipe(catchError(this.handleError));
  }
  post(action: string, resource) {
    return this.http.post(this.baseUrl + '/' + action, resource)
      .pipe(catchError(this.handleError));
  }

  update(action: string, resource) {
    return this.http.patch(this.baseUrl + '/' + action + '/' + resource.id, { isRead: true })
      .pipe(catchError(this.handleError));
  }

  delete(action: string, id) {
    return this.http.delete(this.baseUrl + '/' + action + '/' + id)
        .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.log('An error occurred:', error.error.message);
    } else {

      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(
        `Backend error: code ${error.status}, ${error.error.error}, ${error.error.error_description}`, error);
      // Known error
      if (error.status === 404) {
          return throwError('Not found');
        }
      if (error.status === 400) {
        return throwError('Bad request');
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
