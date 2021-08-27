import { HttpService } from './../services/http-services';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, switchMap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../services/api-service';



@Component({
  selector: 'app-login',
  template: `<form
  (ngSubmit)="this.loginForm.valid && login()"
  [formGroup]="loginForm"
  class="overlay"
  fxLayoutAlign="center center"
  fxLayout="column"
  fxLayoutGap="40px"
>
  <img src="../assets/logo.png" alt="" />

  <mat-card fxLayout="column">
    <h2>Login</h2>
    <mat-form-field>
      <input
        formControlName="email"
        matInput
        placeholder="Email"
        type="email"
      />
      <mat-error>Valid Email Required</mat-error>
    </mat-form-field>
    <mat-form-field>
      <input
        formControlName="password"
        matInput
        placeholder="Password"
        type="password"
      />
      <mat-error>(8-12 Digit ) Password Required</mat-error>
    </mat-form-field>
    <a href="#">forgot Password ? </a>
    <div
      class="actionbutton"
      fxLayout="row wrap"
      fxLayoutGap="30px"
      fxLayoutAlign="end stretch"
    >
      <button type="submit" color="primary" mat-raised-button>Login</button>
      <button color="accent" type="button" mat-raised-button (click)="signup()">signUp</button>
    </div>
  </mat-card>
</form> `,
  styles: [`
    .overlay {
        width: 100%;
        height: 100%;
      }
      .overlay img {
        width: 10%;
      }
      .overlay mat-card {
        width: 25rem;
        height: 25rem;
      }
      .overlay .actionbutton {
        margin-top: 2rem;
      }
  `]
})
export class LoginComponent {
  title = 'w2study';

  loginForm: FormGroup;
  //myObserver!: Observable<any>;

  mySubject=new BehaviorSubject('Hello World');


  // touched,untouched ,dirty

  constructor(private httpService:HttpService, private httpClient:HttpClient,private apiService:ApiService, private router:Router){


    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(12),
      ]),
    });
    //this.buySugarFromShop();
  }

   // buySugalInBulk() {
  //   return new Observable((emitter) => {
  //     emitter.next('Sugar Is Purchased');
  //   });
  // }

  // buySugarInQuantity(_quantity: any) {
  //   return new Observable((emitter) => {
  //     emitter.next('Sugar with Quantity: ' + _quantity + ' is here for you');
  //   });
  // }
  // buySugarFromShop() {
  //   observable A is dependent On Observable B******
  //   we need  to observe value of b only*****
  //   this.buySugalInBulk().subscribe((data) => {
  //     this.buySugarInQuantity('1kg').subscribe((res) => {
  //       console.log(res);
  //     });
  //   });
  //   swhitchMap**********
  //  const newObserver= this.buySugalInBulk().pipe(switchMap(() => {
  //     return this.buySugarInQuantity('1Kg');
  //   }));
  //   newObserver.subscribe((data)=>{
  //     console.log(data);
  //   });
  // }
  login() {

    let dataVal=this.loginForm.value;
this.apiService.loginAndSetAuthDetails(dataVal).subscribe(data=>{
this.router.navigate(['dashboard']);
});

// this.router.navigate(['dashboard']);

   // this.mySubject.next(this.loginForm.value);

        // const mapObserver = this.loginForm.valueChanges.pipe(
        //   map((data: any) => {
        //     return data.email;
        //   })
        // );
        // mapObserver.subscribe((data) => {
        //   console.log(data);
        // });

        /* this.loginForm.valueChanges.subscribe(data=>{
      console.log(data);
    }); */
        /* this.myObserver=new Observable((emitter)=>{
        emitter.next(this.loginForm.value);
        emitter.next('hello');
    });
    this.myObserver.subscribe((data)=>{
    console.log(data,'login');
    }); */
        /* if(this.loginForm.value){
      console.log(this.loginForm);
    } */
      }
      signup() {

        // this.mySubject.subscribe(data=>{
        //   console.log(data);
        // });
        //console.log(this.mySubject.getValue());
        /* this.myObserver.subscribe((data)=>{
        console.log(data,'login');
        }); */
      }
    }
