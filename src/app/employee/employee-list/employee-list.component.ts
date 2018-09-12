import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee-service';
import { UserPreferenceService } from './userPreferences.service';

@Component({
    moduleId: module.id,
    selector: 'employee-list',
    templateUrl: 'employee-list.component.html',
    styleUrls: ['employee-list.component.scss'],
    providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit
{
    employees: IEmployee[];

    selectedEmployeeCountRadioButton: string = 'All';

    //private _userPreferenceService: UserPreferenceService;
    
    constructor(private _employeeService: EmployeeService, private _userPreferenceService: UserPreferenceService)
    {
        //this._userPreferenceService = new UserPreferenceService();

        // this.employees = _employeeService.getEmployees();

        // this.employees = [
        //     {code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '6/25/1988' },
        //     {code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 5700.95, dateOfBirth: '9/6/1982' },
        //     {code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 5900, dateOfBirth: '12/8/1979' },
        //     {code: 'emp104', name: 'Mary', gender: 'Female', annualSalary: 6500.826, dateOfBirth: '10/14/1980' },
        // ]; 
    }

    get colour(): string
    {
        return this._userPreferenceService.colourPreference;
    }

    set colour(value: string)
    {
        this._userPreferenceService.colourPreference = value;
    }

    ngOnInit(): void 
    {
        this.employees = this._employeeService.getEmployees();
    }

    getEmployees(): void
    {
        this.employees = [
            {code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '6/25/1988' },
            {code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 5700, dateOfBirth: '9/6/1982' },
            {code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 5900, dateOfBirth: '12/8/1979' },
            {code: 'emp104', name: 'Mary', gender: 'Female', annualSalary: 6500.826, dateOfBirth: '10/14/1980' },
            {code: 'emp105', name: 'Nancy', gender: 'Female', annualSalary: 6700.826, dateOfBirth: '12/15/1982' },
        ]; 
    }

    trackByEmployeeCode(index: number, employee: any): string
    {
        return employee.code;
    }

    getEmployeesCount(): number
    {
        return this.employees.length;
    }

    getMaleEmployeesCount(): number
    {
        return this.employees.filter(o => o.gender === 'Male').length;
    }

    getFemaleEmployeesCount(): number
    {
        return this.employees.filter(o => o.gender === 'Female').length;
    }

    onEmployeeCountRadioButtonChanged(selectedRadioButtonValue): void 
    {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }
    
}
