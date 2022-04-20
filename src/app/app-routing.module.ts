import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeelistComponent } from './component/employeelist/employeelist.component';
import {EmployeeComponent} from "./component/employee/employee.component";

const routes: Routes = [
  {
    path:'',
    component:EmployeelistComponent
  },
  {
    path:'employee',
    component:EmployeeComponent
  },
  {
    path:'employee/:employeeId',
    component:EmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
