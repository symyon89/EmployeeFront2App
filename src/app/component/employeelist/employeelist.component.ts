import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../../service/employee.service";
import {Employee} from "../../interface/employee";

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  employeeList: Employee[] = [];

  constructor(public employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.employeeService.getAll().subscribe({
      next: employees => this.employeeList = employees,
      error: err => console.error(err)
    })

  }

  deleteEmployee(id:any) {
    this.employeeService.deleteById(id).subscribe(()=>
    {
      window.location.reload();
      console.log("Product deleted");
    });
  }
}
