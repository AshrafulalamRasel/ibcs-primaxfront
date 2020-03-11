import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CreateEmployee} from "../../../Services/create-employee";
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeLists} from "../../../modal/EmployeeLists";
import {DepartmentLists} from "../../../modal/DepartmentLists";
import {CreateDepartment} from "../../../Services/create-department";

@Component({
  selector: 'app-get-employee-profile',
  templateUrl: './get-employee-profile.component.html',
  styleUrls: ['./get-employee-profile.component.css']
})
export class GetEmployeeProfileComponent implements OnInit {
  public employeeId: string;
  form: FormGroup;
  employeeProfileList: any;
  getEmployeeFromDepart: Array<DepartmentLists> = [];
  getListEmployee: Array<String> = [];

  constructor(private formBuilder: FormBuilder,private getEmployee:CreateDepartment,private getListAllEmployee:CreateEmployee,
              private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      this.employeeId = this.route.snapshot.params['id'];
    });
  }

  get f() {

    return this.form.controls;
  }
  ngOnInit() {
    this.form = this.formBuilder.group({

    });
    console.log("EmployeeId"+this.employeeId);
   this. getEmployeeProfile(this.employeeId);
  }


  getEmployeeProfile(selectedEmployeeId) {
    this.getEmployee.getDepartmentUnderEmployee(selectedEmployeeId).subscribe(res => {
      this.employeeProfileList =res
      console.log("Code"+res.code);
      console.log("Name"+res.name);
      console.log("Active"+res.joiningDate);
      this.getListEmployee.push(this.employeeProfileList)

      this.employeeProfileList['departmentList'].forEach((departmentList) => {
        const getDepartmentCode: DepartmentLists = new DepartmentLists();
        getDepartmentCode.departmentCodeIn = departmentList.code;
        this.getEmployeeFromDepart.push(getDepartmentCode);
        console.log("EmployeeList"+departmentList.code);
      });

    });
  }

  getAllEmployeeList(){
    this.router.navigate(['employee/show/all-employee-details']);
  /*  this.getListAllEmployee.getAllEmployeeList().subscribe(res => {
      res.name;
      res.forEach(departmentList => {
        console.log("Console"+departmentList.code);
      });

    });*/
  }
}
