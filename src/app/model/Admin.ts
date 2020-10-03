export class Admin{
    adminName:String;
    adminPassword:String;

    constructor(adminName:String,adminPassword:String){

        this.adminName=adminName;
        this.adminPassword=adminPassword;


    }

    getadminName():String{
        return this.adminName;
}

getadminPassword():String{
    return this.adminPassword;


}


}

