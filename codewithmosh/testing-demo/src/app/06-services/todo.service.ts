import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TodoService { 
  constructor(private http: HttpClient) { 
  }

  add(todo) {
    return this.http.post('...', todo);
  }

  getTodos() { 
    return this.http.get<any[]>('...');
  }

  delete(id){
    return this.http.delete('...', id);
  }
}