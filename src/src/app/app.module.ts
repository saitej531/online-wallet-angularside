import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectHomeComponent } from './project-home/project-home.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectHomeComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    ListEmployeesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
