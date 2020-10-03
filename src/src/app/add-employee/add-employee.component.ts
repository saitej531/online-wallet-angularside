import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  constructor() { }

  employee:Employee=undefined;

  addEmployee(form:any){
    let data=form.value;
    let name=data.customername;
    let age=data.age;
    this.employee=new Employee(name,age);
    console.log("employee initialized="+this.employee.age);
   }




}
