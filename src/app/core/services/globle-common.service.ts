import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpRequest } from "@angular/common/http";
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GlobleCommonService {

  constructor(
    private http : HttpClient
  ) { }

  sendGetRequest(url : string, oprtion) : Observable<any> {
    return this.http.get(url, oprtion).pipe(catchError(this.handleError))
  }

  handleError(error : HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.log("client side error" , error.error)
    } else {
      console.log("server side error", error.error)
    }
    return throwError("something happen");
  }
}
