import { AnonGuard } from './guards/anon-guard';
import { AuthGuard } from './guards/auth-guard';
import { LoginComponent } from './container/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
//import { HttpService } from './services/http-services';
import { DashboardComponent } from './container/dashboard.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule

  ],
  providers: [AuthGuard,AnonGuard],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
