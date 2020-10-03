import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/UserService';

@Component({
  selector: 'admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  adminLoginForm: FormGroup;
  isSubmitted: boolean = false;
  UserService: any;
  constructor(private formBuilder: FormBuilder, private userservice: UserService) {

    this.adminLoginForm = this.formBuilder.group({
      username: new FormControl('', [Validators.required ]),
      password: new FormControl('', [Validators.required]),

    });
  }
  ngOnInit() {
  }
  errorMessage: string;
  checkError: boolean = false;
  checkInfo: boolean = false;
  infoMessage: string;
  onAdminLoginFormSubmit() {
    this.isSubmitted = true;
    if (this.adminLoginForm.valid) {
      console.log("Admin Login Form Submitted", this.adminLoginForm.value);
      this.UserService.AdminLoginComponent(this.adminLoginForm.value.username, this.adminLoginForm.value.password).subscribe(
        (data) => {
          this.infoMessage = "You have successfully logged in";
          this.checkInfo = true;
          this.checkError = false;
        },
        (error) => {
          this.errorMessage = error.error;
          this.checkError = true;
          this.checkInfo = false;
        }
      )
    }

  }

  

}
