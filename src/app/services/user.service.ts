import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = 'https://jsonplaceholder.cypress.io/';
  baseUrl2: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl + 'users');
  }

  addUser(userObj: any){
    return this.http.post(this.baseUrl + 'users', userObj);
  }

  //--------------Using json-server and db.json file----------------

  getUsers2(): Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl2 + 'users');
  }

  addUser2(userObj: User){
    return this.http.post<User>(this.baseUrl2 + 'users', userObj);
  }

}
