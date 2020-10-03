import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { UserService } from '../service/UserService';

@Component({
  selector: 'user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  usernameCtrl:FormControl;
  passwordCtrl:FormControl;
  user: any;
  UserService: any;

constructor(private userService:UserService,fb:FormBuilder)
 {
    this.usernameCtrl=fb.control('',[Validators.minLength(8),Validators.maxLength(30),Validators.required]);
    this.passwordCtrl=fb.control('',[Validators.required]); 
  }
  


  ngOnInit(): void {
  }


  userLogin(){
    let username:string=this.usernameCtrl.value;
   
    let password:string=this.passwordCtrl.value;
   
    
    let observable:Observable<UserLoginComponent>=this.UserService.addUser(this.userLogin);
    observable.subscribe(
      userArg=>{
        this.user=userArg;
      }
    )
  }

}
