import { User } from './user';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { of } from 'rxjs/internal/observable/of';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpclient: HttpClient) { }

  user: BehaviorSubject<User> = new BehaviorSubject({username: 'Guest'});

  getBooleanData() {
    return true;
  }

  getBooleanObservable() {
    return of(false) ;
  }

  getImage(){
    this.httpclient.get('https://img.nextmag.com.tw//campaign/28/640x_61e34bdd3e845ede5a82fd5f48750c77.jpg');
  }

}
