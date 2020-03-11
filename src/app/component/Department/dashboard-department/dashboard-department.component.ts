import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CreateEmployee} from "../../../Services/create-employee";
import {EmployeeLists} from "../../../modal/EmployeeLists";

@Component({
  selector: 'app-dashboard-department',
  templateUrl: './dashboard-department.component.html',
  styleUrls: ['./dashboard-department.component.css']
})
export class DashboardDepartmentComponent implements OnInit {
  public id: string;
  form: FormGroup;
  selectAllEmployeeList: any;
  employeeListFromDeprtment: Array<EmployeeLists> = [];
  departmentLists: Array<String> = [];

  constructor(private formBuilder: FormBuilder,private getEmployee:CreateEmployee,
              private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      this.id = this.route.snapshot.params['id'];
    });
  }
  get f() {

    return this.form.controls;
  }
  ngOnInit() {
    this.form = this.formBuilder.group({

    });

    console.log("Id "+this.id);
    this.getDepartmentEmployee(this.id);

  }

  getDepartmentEmployee(selectedDepartmentId) {
    this.getEmployee.getMyEmployeeListUnderDepartment(selectedDepartmentId).subscribe(res => {
      this.selectAllEmployeeList =res
      console.log("Code"+res.code);
      console.log("Name"+res.name);
      console.log("Active"+res.active);
      this.departmentLists.push(this.selectAllEmployeeList)

      this.selectAllEmployeeList['employeeList'].forEach((employeeList) => {
        const getEmployee: EmployeeLists = new EmployeeLists();
        //getEmployee.employeeId=employeeList.id;
        getEmployee.employeeName = employeeList.name;
        getEmployee.employeeJoiningDate = employeeList.joiningDate;
        this.employeeListFromDeprtment.push(getEmployee);
        console.log("EmployeeList"+employeeList.joiningDate);
      });

    });
  }
  getAllEmployee(){
    this.router.navigate(['employee/show/all-employee-details']);
  }

  editEmployeeList(id: string){
    this.router.navigate(['department/edit/'+ id]);
  }



  onPrint(){
    window.print();
  }
}
