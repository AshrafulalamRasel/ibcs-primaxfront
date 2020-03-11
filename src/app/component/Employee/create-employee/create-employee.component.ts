import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CreateDepartment} from "../../../Services/create-department";
import {CreateEmployee} from "../../../Services/create-employee";
import {CreateDepartMentModel} from "../../../modal/CreateDepartMentModel";
import {CreateMyEmployeeModel} from "../../../modal/CreateMyEmployeeModel";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  signUpForm: FormGroup;
  submitted = false;
  departmentList: Array<String> = [];

  constructor(private formBuilder: FormBuilder,private router: Router,private route: ActivatedRoute, private datePipe:DatePipe,
              private createEmployee:CreateEmployee) {


  }

  get f() {
    return this.signUpForm.controls;
  }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group(
      {
        code: [''],
        name: [''],
        joiningDate: [''],
        dateOfBirth: [''],
        designation: [''],
        basic: [''],
        gender: [''],
        departmentId: [''],
      }
    );
    this.fetchDoctorList();

  }

  onSubmit() {
    this.createMyEmployeesdsds();
    console.log("hi succes!")

  }

  fetchDoctorList() {

      this.createEmployee.getMyDepartmentList().subscribe(res => {
        res.forEach(doctorList => {
          this.departmentList.push(doctorList);
        });
      });
  }

  createMyEmployeesdsds(){
    const  createMyEmployeeModel:CreateMyEmployeeModel = new CreateMyEmployeeModel();
    createMyEmployeeModel.code=this.signUpForm.controls['code'].value;
    createMyEmployeeModel.name=this.signUpForm.controls['name'].value;
    createMyEmployeeModel.joiningDate= this.datePipe.transform(this.signUpForm.controls['joiningDate'].value, 'yyyy-MM-dd');
    createMyEmployeeModel.dateOfBirth= this.datePipe.transform(this.signUpForm.controls['dateOfBirth'].value, 'yyyy-MM-dd');
    createMyEmployeeModel.designation=this.signUpForm.controls['designation'].value;
    createMyEmployeeModel.basic=this.signUpForm.controls['basic'].value;
    createMyEmployeeModel.gender=this.signUpForm.controls['gender'].value;
    createMyEmployeeModel.departmentId=this.signUpForm.controls['departmentId'].value;
    this.createEmployee.createMyEmploye(
      createMyEmployeeModel.code,
      createMyEmployeeModel.name,
      createMyEmployeeModel.joiningDate,
      createMyEmployeeModel.dateOfBirth,
      createMyEmployeeModel.designation,
      createMyEmployeeModel.basic,
      createMyEmployeeModel.gender,
      createMyEmployeeModel.departmentId,
      ).subscribe(res => {
      res.id;
      console.log("Console"+res.id);
      this.router.navigate(['employee/view/own-profile-by-employee/'+ res.id]);
    }, error => {
      if (error.status === 400) {

      }
    });
  }


}
