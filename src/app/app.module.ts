import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeTitlePipe } from './employee/employee-list/employeeTitle.pipe';
import { EmployeeCountComponent } from './employee/employee-count/employee-count.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './others/pageNotFound.component';
import { EmployeeService } from './employee/employee-list/employee-service';
import { UserPreferenceService } from './employee/employee-list/userPreferences.service';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employees/:code', component: EmployeeDetailsComponent },  
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    EmployeeTitlePipe,
    EmployeeCountComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmployeeService, UserPreferenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
