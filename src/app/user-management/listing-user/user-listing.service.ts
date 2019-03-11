import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 import { Observable, from} from 'rxjs';
 import { User} from './../create-user/user';
@Injectable({
  providedIn: 'root'
})
export class UserListingService {

  constructor(
    private http : HttpClient
  ) { }
  getAllUser () : Observable <User []> {
    return this.http.get<User []>("http://localhost:8080/user");
  }
}
