import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [

  {
    path: "app-home",
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'app-home',
    pathMatch: 'full'
  },
  {
    path:'add-user',
    component:AddUserComponent
  },
  {
    path:'user-login',
    component:UserLoginComponent
  },
  {
    path:'admin-login',
    component:AdminLoginComponent
  },
  {
    path:'user-list',
    component:UsersListComponent
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
