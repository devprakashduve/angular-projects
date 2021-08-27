import { Observable, observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn:'root'
})

export class HttpService{

  private baseUrl='https://reqres.in/api';
  constructor(private httpClient:HttpClient){

  }

get(url:string):Observable<any>{
  return this.httpClient.get(this.baseUrl+url).pipe(catchError(this.handleErrors.bind(this)));
}


post(url:string,data:any):Observable<any>{
return this.httpClient.post(this.baseUrl+url,data).pipe(catchError(this.handleErrors.bind(this)));
}

private handleErrors(response:any){
  return throwError({message:response.message});
}

}
