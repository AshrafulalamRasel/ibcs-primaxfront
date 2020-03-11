import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CreateDepartMentModel} from "../../../modal/CreateDepartMentModel";
import {CreateDepartment} from "../../../Services/create-department";

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent implements OnInit {
  signUpForm: FormGroup;
  submitted = false;
  departmentId: string;
  constructor(private formBuilder: FormBuilder,private router: Router,private route: ActivatedRoute,
              private employeeSignupHttp:CreateDepartment) {


  }
  get f() {
    return this.signUpForm.controls;
  }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group(
      {
        userName: [''],
        code: [''],
        active: [''],
      }
    );
  }


  createDepartment(){
    const  createDepartMentModel:CreateDepartMentModel = new CreateDepartMentModel();
    createDepartMentModel.code=this.signUpForm.controls['code'].value;
    createDepartMentModel.name=this.signUpForm.controls['userName'].value;
    createDepartMentModel.active=this.signUpForm.controls['active'].value;
    this.employeeSignupHttp.createDepartments(
      createDepartMentModel.code,
      createDepartMentModel.name,
      createDepartMentModel.active,).subscribe(res => {
        res.id;
      this.router.navigate(['department/show-all-employee-by/'+res.id]);
    }, error => {
      if (error.status === 400) {

      }
    });
  }


  onSubmit() {
    console.log("hi succes!")
    this.createDepartment()
  }

}
