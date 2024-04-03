import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './component/authentication/authentication.component';
import { StaffrecordsComponent } from './component/staffrecords/staffrecords.component';

const routes: Routes = [
  {path:'', component:AuthenticationComponent},
  {path:'staffrecords', component:StaffrecordsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
