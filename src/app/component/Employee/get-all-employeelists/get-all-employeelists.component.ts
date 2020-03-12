import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CreateEmployee} from "../../../Services/create-employee";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-get-all-employeelists',
  templateUrl: './get-all-employeelists.component.html',
  styleUrls: ['./get-all-employeelists.component.css']
})
export class GetAllEmployeelistsComponent implements OnInit {
  departmentListin: any;
  employeesdsfc: any;
 private  getAllListDepartment: Array<String> = [];
 private  getAllListemployee: Array<String> = [];
 gtt:Array<string>=[];
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,private getListAllEmployee:CreateEmployee,
              private route: ActivatedRoute, private router: Router) {

  }

  get f() {

    return this.form.controls;
  }

  ngOnInit() {
    this.form = this.formBuilder.group({

    });
    this.getAllEmployeeListIn();
  }

  getAllEmployeeListIn(){

      this.getListAllEmployee.getAllEmployeeList().subscribe(res => {
       this.departmentListin =res;

        this.departmentListin.forEach(employeeList => {
          this.getAllListDepartment.push(employeeList);
        });


      });
  }

  onPrint() {
    window.print();
  }

}
