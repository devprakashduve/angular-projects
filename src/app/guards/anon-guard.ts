import { AuthUtils } from '../utils/auth-utils';
import { ActivatedRouteSnapshot,Router, CanActivate, RouterStateSnapshot } from "@angular/router";

import { Injectable } from '@angular/core';
@Injectable()
export class AnonGuard{
  constructor(private router:Router){

  }
canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):any{
  const isLoggedIn=!!AuthUtils.getAuthDetails();
  if(isLoggedIn){
    this.router.navigate(['dashboard']);
  }else{
 // console.log(route,state);
  return true;
  //return !AuthUtils.getAuthDetails();
   }
}
}
