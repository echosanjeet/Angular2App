import { Component } from "@angular/core";
import { UserPreferenceService } from "../employee/employee-list/userPreferences.service";

@Component({
    template: `<h1>This is home page.</h1>
               <div>
                 Colour Preference :
                 <input type='text' [(ngModel)]='colour' [style.background]='colour' />
               </div>
    `
})
export class HomeComponent
{
    //private _userPreferenceService: UserPreferenceService;

    constructor(private _userPreferenceService: UserPreferenceService)
    {
        //this._userPreferenceService = new UserPreferenceService();
    }

    get colour(): string
    {
        return this._userPreferenceService.colourPreference;
    }

    set colour(value: string)
    {
        this._userPreferenceService.colourPreference = value;
    }
}