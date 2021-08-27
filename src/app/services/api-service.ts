import { User } from './../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { HttpService } from './http-services';
import { map } from 'rxjs/operators';
import { AuthUtils } from '../utils/auth-utils';

@Injectable({
  providedIn:'root'
})
export class ApiService{
  constructor(private httpService:HttpService){

  }

  getUserList(page=1):Observable<User[]>{
    return this.httpService.get('/users?page='+page).pipe(map(res=> res.data));}

  // this.httpService.get('/users?page=2').subscribe(data=>{
  //   console.log(data);
  // });

  loginAndSetAuthDetails(data:any):Observable<any>{
    return this.httpService.post('/login',data).pipe(map((res)=>{
      AuthUtils.setAuthdetails();
      return res;

    }));

  }

}
