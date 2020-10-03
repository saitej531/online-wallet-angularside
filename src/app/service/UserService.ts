import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../model/Admin';
import { User } from '../model/User';


@Injectable()
export class UserService{
  urlPath="http://localhost:8585";
  addUser: any;
  allUsers: any;
  getAllusers: any;

    constructor(private http:HttpClient){

    }

    adduser(user:User):Observable<User>{
        let url=this.urlPath+"/user/reg";
        let observable:Observable<User>=this.http.post<User>(url,user);
        return observable;
    }

    getUser(UserName:string,password:string):Observable<User>{
        let url=this.urlPath+"/userLogin/{name}/{password}";
        let observable:Observable<User>=this.http.get<User>(url);
        return observable;
    }

    getAll():Observable<User[]>{
        let url=this.urlPath+"/user/findall";
        let observable:Observable<User[]>=this.http.get<User[]>(url);
        return observable;
    }

    getAdmin(adminName:string,adminPassword:string):Observable<Admin>{
        let url=this.urlPath+"/adminLogin/{name}/{password}";

        let observable:Observable<Admin>=this.http.get<Admin>(url);
        return observable;
    }


  
}