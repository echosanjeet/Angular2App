import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'employee-count',
    templateUrl: 'employee-count.component.html',
    styleUrls: ['employee-count.component.scss']
})
export class EmployeeCountComponent 
{
    selectedRadioButtonValue: string = 'All';

    @Output()
    countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

    @Input()
    all: number;
    
    @Input()
    male: number;
    
    @Input()
    female: number;

    onRadioButtonSelectionChanged()
    {
        this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
        console.log(this.selectedRadioButtonValue);
    }

}
