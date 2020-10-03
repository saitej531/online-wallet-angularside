import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { UserService } from '../service/UserService';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent  {

  users:User[];
  constructor(private userService:UserService) {
    let observable:Observable<User[]>=userService.getAllusers();
    observable.subscribe(
      userArray=> {
        this.users=userArray;
      },
      error=> {
        console.log("inside user list component"+error.message);
      }
    );

  }
    

  

}
