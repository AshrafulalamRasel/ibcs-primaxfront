import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CreateDepartment} from "../../../Services/create-department";
import {CreateDepartMentModel} from "../../../modal/CreateDepartMentModel";

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent implements OnInit {
  departmentget: any;
  signUpForm: FormGroup;
  submitted = false;
  public id: string;
  private getAllCodeDepartment: Array<String> = [];
  private getAllNameDepartment: Array<String> = [];
  private getAllActiveDepartment: Array<String> = [];

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute,
              private getDepartment: CreateDepartment) {
    this.route.params.subscribe(params => {
      this.id = this.route.snapshot.params['id'];
    });
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
    this.getDepartmentTemplate(this.id);
  }

  getDepartmentTemplate(departmentId: string) {

    this.getDepartment.getDepaartmentLists(departmentId).subscribe(res => {
      this.departmentget = res
      /*console.log("Code" + res.code);
      console.log("Name" + res.name);
      console.log("Active" + res.active);
      this.getAllCodeDepartment.push(res.code);
      this.getAllNameDepartment.push(res.name);
      this.getAllActiveDepartment.push(res.active)
      this.getAllCodeDepartment=this.signUpForm.controls['code'].value

      console.log("Code" + this.getAllCodeDepartment);*/

    });

  }

  onSubmit(){
    const createDrug: CreateDepartMentModel = new CreateDepartMentModel();
    createDrug.code = this.signUpForm.controls['code'].value;
    createDrug.name = this.signUpForm.controls['userName'].value;
    createDrug.active = this.signUpForm.controls['active'].value;

    this.getDepartment.editTemplate(this.id,

      createDrug.code,
      createDrug.name,
      createDrug.active,).subscribe(res => {
      console.log("Console"+'hi');
      this.router.navigate(['department/show-all-employee-by/'+this.id]);

    }, error => {
      if (error.status === 400) {

      }
    });
  }

}
