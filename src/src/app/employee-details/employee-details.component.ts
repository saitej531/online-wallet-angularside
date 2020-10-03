import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent  {

  constructor() { }
  employee:Employee=new Employee("yasaswini",21);

  

}
