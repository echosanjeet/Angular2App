import { Injectable } from "@angular/core";
import { IEmployee } from "./employee";
import { Http, Response } from "@angular/http";
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService
{
    constructor(private _http: Http) { }

    // getEmployees_new(): Observable<IEmployee[]>
    // {
    //     return this._http.get("http://localhost:1234/api/employees").map((response: Response) => <IEmployee[]>response.json());
    // }

    getEmployees(): IEmployee[]
    {
        return [
            {code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '6/25/1988' },
            {code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 5700, dateOfBirth: '9/6/1982' },
            {code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 5900, dateOfBirth: '12/8/1979' },
            {code: 'emp104', name: 'Mary', gender: 'Female', annualSalary: 6500.826, dateOfBirth: '10/14/1980' },
        ];
    }

    getEmployeesByCode(empCode: string): IEmployee
    {
        return {code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 5700, dateOfBirth: '9/6/1982' };
    }

}