import {Injectable} from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from "rxjs/operators";


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({providedIn: 'root'})
export class CreateDepartment {

  constructor(private http: HttpClient) {
  }




  createDepartments(code: string, name: string, active: string): Observable<any> {

  const createEmployeeEndPointServer: string =
      'http://localhost:44444/department/create';

    return this.http.post(createEmployeeEndPointServer, {

        'code': code,
        'name': name,
        'active': active,

      },
      /* {
         headers: httpHeaders,
         observe: 'response'
       }*/
    );
  }

  public getDepartmentUnderEmployee(selectedTemplateId): Observable<any> {
    const getEmployeeListEndpoint: string = 'http://localhost:44444/employee/view/own-profile-by-employee/'+selectedTemplateId;
    return this.http.get(getEmployeeListEndpoint, httpOptions)
      .pipe(map(res => res));

  }

  public getDepaartmentLists(selectedTemplateId): Observable<any> {
    const getEmployeeProfileListEndpoint: string = 'http://localhost:44444/department/'+selectedTemplateId;
    return this.http.get(getEmployeeProfileListEndpoint, httpOptions)
      .pipe(map(res => res));

  }


  public editTemplate(tempId: string,
                      code: string,
                      name: string,
                      active: string,
                     ): Observable<any> {
    console.log(tempId);
    console.log(name);


    const editTemplateEndPoint: string = 'http://localhost:44444/department/update-by/'+tempId;
    return this.http.put(editTemplateEndPoint, {
        code: code, name, active
      },
     /* {
        headers: httpHeaders,
        observe: 'response'
      }*/
    );



  }
}
