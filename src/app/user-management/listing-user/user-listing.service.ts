import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpEvent, HttpParams, HttpErrorResponse } from '@angular ;
 import { Observable, from, throwError} from 'rxjs';
 import { User} from './../create-user/user';
import { catchError } from 'rxjs/operators';
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

  private handleError(error: HttpErrorResponse) {
    debugger;
      if(error.error instanceof ErrorEvent){
          console.error('client side:', error.error.message);
      } else {
          console.error(`server side:’ ${error.status}, ` + `body was: ${error.error}`);
      }
      return throwError( 'Something happened;');
  };
    
  // observeResponce() : Observable<HttpResponse<any>> {
  //   return this.http.get("/assets/data/abc.json",{observe :"response",responseType : "text"});
  // }


  observeResponce() : Observable<any> {
    let id = "1";
    let name = "yash";
    var params =  new HttpParams()
    .set("name",name)
    .set("name","raj")
    .append("name",name)
    params.set("id",id)

   let headers = new HttpHeaders();
    console.log(params.toString());
    debugger;
    return this.http.get("src/assets/data/abc.json",{observe :"events", responseType : "json",reportProgress : true, params,headers}).pipe(catchError(this.handleError));
  }  
} 
