import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import { CreateDepartmentComponent } from './component/Department/create-department/create-department.component';
import { CreateEmployeeComponent } from './component/Employee/create-employee/create-employee.component';
import { DashboardDepartmentComponent } from './component/Department/dashboard-department/dashboard-department.component';
import {DatePipe} from "@angular/common";
import {TabModule} from "angular-tabs-component";
import { GetEmployeeProfileComponent } from './component/Employee/get-employee-profile/get-employee-profile.component';
import { GetAllEmployeelistsComponent } from './component/Employee/get-all-employeelists/get-all-employeelists.component';
import { EditDepartmentComponent } from './component/Department/edit-department/edit-department.component';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CreateDepartmentComponent,
    CreateEmployeeComponent,
    DashboardDepartmentComponent,
    GetEmployeeProfileComponent,
    GetAllEmployeelistsComponent,
    EditDepartmentComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    TabModule
  ],
  providers: [
    DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
