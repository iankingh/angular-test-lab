import { User } from './user';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { of } from 'rxjs/internal/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpclient: HttpClient) { }

  url = environment.apiUrl;

  user: BehaviorSubject<User> = new BehaviorSubject({username: 'Guest'});

  getBooleanData() {
    return false;
  }

  getBooleanObservable() {
    return of(false) ;
  }

  getImage(){
    return this.httpclient.get(this.url+'.jpg')
  }

  /**
   *
   */
  getJsonServerData() {

    return this.httpclient.get('http://localhost:3000/posts');

  }

  /**
   *
   * @param i
   * @param j
   * @returns
   */
  add(i: number, j: number) {
    return i + j;
  }

}
