import { AnonGuard } from './guards/anon-guard';
import { AuthGuard } from './guards/auth-guard';
import { LoginComponent } from './container/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './container/dashboard.component';

const routes: Routes = [
  {path:'',canActivate:[AnonGuard],
  children:[{path:'',component:LoginComponent}]
},
{path:'',canActivate:[AuthGuard],
children:[{path:'dashboard',component:DashboardComponent}]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
