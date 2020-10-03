export class User{
    UserId:number;
    UserName:string;
    password:string;
    UserPhone:string;
    UserEmail:string;
    constructor(UserId:number,UserName:string,password:string, UserPhone:string, UserEmail:string){
        this.UserId=UserId;
        this.UserName=UserName;
        this.password=password;
        this.UserPhone=UserPhone;
        this.UserEmail=UserEmail;
    }
    getUserId():number{
        return this.UserId;
        
    }

getUserName():string{
        return this.UserName;
      }
    
      getpassword():string{
        return this.password;
      }
    getUserPhone():string{
        return this.UserPhone;

    }
    getUserEmail():string{
        return this.UserEmail;

    }

    
}