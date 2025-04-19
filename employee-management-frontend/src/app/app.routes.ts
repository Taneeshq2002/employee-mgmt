// app.routes.ts

import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NonemployeeListComponent } from './nonemployee-list/nonemployee-list.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
export const routes: Routes = [
  { path: '', redirectTo:"login",pathMatch:"full" },
  { path: "login", component:LoginComponent},
  {
      path:"",
      component:NavbarComponent}
      ,
      {
        path: "employee", component: EmployeeListComponent
      },
      {
        path: "add-employee", component: EmployeeFormComponent
      },
      { path: 'edit-employee/:id', component: EmployeeFormComponent },
      {path:'view-employees',component:NonemployeeListComponent},
      {path:'view-profile/:id',component:EmployeeProfileComponent}

      
];
