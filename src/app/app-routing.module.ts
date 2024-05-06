import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './component/authentication/authentication.component';
import { StaffrecordsComponent } from './component/staffrecords/staffrecords.component';
import { RegisterComponent } from './component/register/register.component';
import { MenuComponent } from './component/menu/menu.component';

const routes: Routes = [
  { path: '', component: AuthenticationComponent },
  { path: 'staffrecords', component: StaffrecordsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'menu', component: MenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
