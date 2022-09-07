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

  // getUsers() {
  //   return this.http.get(this.baseUrl + 'users');
  // }

  getOneUser(userId: string){
    return this.http.get(this.baseUrl + 'users/' + userId);
  }

  addUser(userObj: any){
    return this.http.post(this.baseUrl + 'users', userObj);
  }

  deleteUser(userId: any){
    return this.http.delete(this.baseUrl + 'users/' + userId);
  }

  updateUser(userId: any, userObj: any){
    //console.log(userObj);
    return this.http.put(this.baseUrl + 'users/' + userId, userObj);
  }

  //--------------Using json-server and db.json file----------------

  getUsers2(): Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl2 + 'users');
  }

  getOneUser2(userId: string): Observable<User>{
    return this.http.get<User>(this.baseUrl2 + 'users/' + userId);
  }

  addUser2(userObj: User){
    return this.http.post<User>(this.baseUrl2 + 'users', userObj);
  }

  deleteUser2(userId: string){
    return this.http.delete<User>(this.baseUrl2 + 'users/' + userId);
  }

  updateUser2(userId: string, userObj: User){
    //console.log(userObj);
    return this.http.put<User>(this.baseUrl2 + 'users/' + userId, userObj);
  }
}
