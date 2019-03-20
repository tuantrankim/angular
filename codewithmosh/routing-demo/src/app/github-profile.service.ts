import { DataService } from './services/data.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GithubProfileService extends DataService {

  constructor(http: HttpClient) {
    super('https://api.github.com/users', http);
  }
}
