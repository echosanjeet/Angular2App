import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: `
  //     Name: <input [(ngModel)]='name' />
  //     <br/>
  //     You entered: {{ name }}
  //     <div>
  //       <employee-details></employee-details>
  //     </div>
  //     <br/>
  //     <div>
  //       <employee-list></employee-list>
  //     </div>
  // `,
  // template: `
  //            <div style="padding:  5x">
  //               <ul class="nav nav-tabs">
  //                 <li routerLink="home">Home</li>
  //                 <li routerLink="employees">Employees</li>
  //               </ul>
  //            <div>
  // `,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  pageHeader: string = 'Employee Details';
  imgPath: string = './assets/images/logo.jpg';
  isDisabled: boolean = false;
  name: string = 'Tom';
}
