import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from} from 'rxjs';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  constructor(
    private http : HttpClient
  ) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  createUser(user : User) : Observable <User> {
    var url = "http://localhost:8080/user";
    return this.http.post<User>(url, user, this.httpOptions) 
  }
}
