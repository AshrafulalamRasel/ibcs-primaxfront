import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomePageComponent} from "./component/home-page/home-page.component";
import {CreateDepartmentComponent} from "./component/Department/create-department/create-department.component";
import {CreateEmployeeComponent} from "./component/Employee/create-employee/create-employee.component";
import {DashboardDepartmentComponent} from "./component/Department/dashboard-department/dashboard-department.component";
import {GetEmployeeProfileComponent} from "./component/Employee/get-employee-profile/get-employee-profile.component";
import {GetAllEmployeelistsComponent} from "./component/Employee/get-all-employeelists/get-all-employeelists.component";
import {EditDepartmentComponent} from "./component/Department/edit-department/edit-department.component";


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      {path: 'department/create', component: CreateDepartmentComponent},
      {path: 'department/show-all-employee-by/:id', component: DashboardDepartmentComponent},
      {path: 'employee', component: CreateEmployeeComponent},
      {path: 'employee/view/own-profile-by-employee/:id', component: GetEmployeeProfileComponent},
      {path: 'employee/show/all-employee-details', component: GetAllEmployeelistsComponent},
      {path: 'department/edit/:id', component: EditDepartmentComponent},
    ]
  },





 /* {path: 'employee/login', component: LoginPageComponent, pathMatch:'full'},
  {path: 'employee/registration', component: RegistrationComponent, pathMatch:'full'},*/



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class AppRoutingModule {
}

