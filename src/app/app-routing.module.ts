import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import {ContactListComponent} from './modules/core/components/user-dashboard/contact-list/contact-list.component'

const routes: Routes = [
  {path:'auth',component:LoginComponent},
  {path:'contactlist',component:ContactListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
