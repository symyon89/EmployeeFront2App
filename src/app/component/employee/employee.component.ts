import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';
import {ActivatedRoute} from "@angular/router";
import { Employee } from 'src/app/interface/employee';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeForm!: FormGroup;
  employeeId: any;
  employee: Employee = {id: null,name:"",email:"",department:""};
  formMessage: string = '';

  constructor(public employeeService:EmployeeService ,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.params['employeeId'];
    if(this.employeeId != undefined){
      this.employeeService.getByID(this.employeeId).subscribe({
        next:employee => this.employee = employee,
        error: error=>console.log(error)
    }
      );
    }
    this.employeeForm = new FormGroup({
      name:new FormControl("",[Validators.required]),
      email:new FormControl("",[Validators.email]),
      department:new FormControl("",[Validators.required])
    });
  }

  submitEmployee() {
    if(this.employeeForm.valid){
      this.employeeService.save(this.employee).subscribe({
         next: data => {this.employee=data; this.formMessage = "Success" },
        error: error => {this.formMessage = "Update eror"; console.log(error);}
    });
    }else {
      this.formMessage = "Please complete all fields"
    }

  }
}
