import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from "rxjs/operators";
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({providedIn: 'root'})
export class CreateEmployee {

  constructor(private http: HttpClient) {
  }

  private getDepartmentNameAndId: string ='http://localhost:44444/department/view-list';

  public getMyDepartmentList(): Observable<any> {
    const getDoctorChamberListEndpoint: string = this.getDepartmentNameAndId;
    return this.http.get(getDoctorChamberListEndpoint, httpOptions)
      .pipe(map(res => res));

  }

  createMyEmploye(code: string, name: string, joiningDate: string,dateOfBirth:string,designation:string,basic:string,gender:string,departmentId:string): Observable<any> {

    const createEmployeeEndPointServer: string =
      'http://localhost:44444/employee/create';

    return this.http.post(createEmployeeEndPointServer, {

        'code': code,
        'name': name,
        'joiningDate': joiningDate,
        'dateOfBirth': dateOfBirth,
        'designation': designation,
        'basic': basic,
        'gender': gender,
        'departmentId': departmentId,


      },
      /* {
         headers: httpHeaders,
         observe: 'response'
       }*/
    );
  }

  public getMyEmployeeListUnderDepartment(selectedTemplateId): Observable<any> {
    const getEmployeeProfileListEndpoint: string = 'http://localhost:44444/department/show-all/employee/by-department/'+selectedTemplateId;
    return this.http.get(getEmployeeProfileListEndpoint, httpOptions)
      .pipe(map(res => res));

  }

  public getAllEmployeeList(): Observable<any> {
    const getAllEmployeeListEndpoint: string = 'http://localhost:44444/employee/show/all-employee-details';
    return this.http.get(getAllEmployeeListEndpoint, httpOptions)
      .pipe(map(res => res));

  }



}
