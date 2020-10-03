import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { UserService } from '../service/UserService';

@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent  {
  userService: any;
  constructor(private userservice :UserService) { }
user:User;
addUser(form:any){
  let data=form.value;
  let userEmail=data.userEmail;
  let userName=data.userName;
  let userPhone=data.userPhone;
  let password=data.password;
  this.user=new User(-1,userEmail,userName,userPhone,password);
  let observable:Observable<User>=this.userservice.addUser;
  observable.subscribe(userArg=>{
    this.user=userArg;
  });
}

}
