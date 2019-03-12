import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Follower{
  login: string,
  id: number,
  node_id: string,
  avatar_url: string,
  gravatar_id: string,
  url: string,
  html_url: string,
  followers_url: string,
  following_url: string,
  gists_url: string,
  starred_url: string,
  subscriptions_url: string
  organizations_url: string,
  repos_url: string,
  events_url: string,
  received_events_url: string,
  type: string,
  site_admin: boolean
}
@Injectable({
  providedIn: 'root'
})
export class GithubFollowersService {

  url = "https://api.github.com/users/mosh-hamedani/followers";

  constructor(private http: HttpClient) { }

  getAll():Observable<Follower[]>{
    return this.http.get<Follower[]>(this.url);
  }

}
