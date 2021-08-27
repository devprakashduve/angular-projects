import { User } from './../models/user';
import { ApiService } from './../services/api-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
 <div fxLayoutAlign="start center" fxLayout="row wrap">
<mat-card *ngFor="let user of users">
<img matCardImage mat-card-avatar [src]="user.avatar">
<mat-card-header>
        <mat-card-title>{{user.first_name}}</mat-card-title>
        <mat-card-subtitle>{{user.last_name}}</mat-card-subtitle>

</mat-card-header>

<mat-card-content>
{{user.email}}
    </mat-card-content>
    <!-- <mat-card-header>
        <mat-card-title>Title</mat-card-title>
        <mat-card-subtitle>Subtitle</mat-card-subtitle>
    </mat-card-header>
    <img matCardImage src="Card wide image source">
    <mat-card-content>
        Text content
    </mat-card-content>
    <mat-card-actions align="start">
        <button mat-button (click)="onAction1">Action1</button>

    </mat-card-actions>
    <mat-card-footer>
        Footer
    </mat-card-footer> -->
</mat-card>

 </div>
  `,
  styles: [`
  mat-card{
    padding: 1rem;
    margin: 2rem
  } `]
})
export class DashboardComponent implements OnInit {
  users:User[] = [];
  loading=true;
  constructor(private apiService:ApiService){
  }

  ngOnInit(){
    this.apiService.getUserList().subscribe(users=>{
      this.users=users;
      console.log(users);
    });
  }


}
