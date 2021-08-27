import { AuthUtils } from '../utils/auth-utils';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate{

  constructor(private router:Router){

  }

canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):any{
  const isLoggedIn=!!AuthUtils.getAuthDetails();
  if(isLoggedIn){
    return true;
  }else{
 // console.log(route,state);
 this.router.navigate(['']);
  //return !AuthUtils.getAuthDetails();
   }

  console.log(route,state);
  //return true;
  return !!AuthUtils.getAuthDetails();
}
}
