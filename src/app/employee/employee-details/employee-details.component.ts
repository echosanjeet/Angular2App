import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employee-list/employee';
import { EmployeeService } from '../employee-list/employee-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'employee-details',
    templateUrl: 'employee-details.component.html',
    styleUrls: ['employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit
{
    employee: IEmployee;
    statuMessage: string = "Loading data. Please wait...";
 
    constructor(private _employeeService: EmployeeService, 
                private _activatedRoute: ActivatedRoute, 
                private _router: Router)
    { 

    }

    onBackButtonClick(): void 
    {
        this._router.navigate(['/employees']);
    }

    ngOnInit(): void 
    {
        let empCode = this._activatedRoute.snapshot.params['code'];
        this.employee = this._employeeService.getEmployeesByCode(empCode);
    }

    // firstName: string = "Tom";
    // lastName: string = "Hopkins";
    // gender: string = "Male";
    // age: number = 20;

    showDetails: boolean = false;

    toggleDetails(): void {
        this.showDetails = !this.showDetails;
    }
}
