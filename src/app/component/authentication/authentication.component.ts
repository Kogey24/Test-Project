import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css'
})
export class AuthenticationComponent {
constructor(private builder: FormBuilder, private service: AuthService,private toastr:ToastrService,private router: Router){}
userdata:any;

authenticationform=this.builder.group({
  username:this.builder.control('',Validators.required),
  emailAdress:this.builder.control('',Validators.required),
  password:this.builder.control('',Validators.required),
})

proceedlogin(){
  // if(this.authenticationform.valid){
  //   this.service.GetbyCode(this.authenticationform.value.username).subscribe(res =>{
  //     this.userdata = res;
  //     console.log(this.userdata);
  //     if(this.userdata.password===this.authenticationform.value.password){
  //       if(this.userdata.isActive){
  //         sessionStorage.setItem('username',this.userdata.id);
  //         sessionStorage.setItem('userrole',this.userdata.role);
  //         this.router.navigate(['menu'])
  //       }else{
  //         this.toastr.error('Please contact your admin','Inactive User')
  //       }

  //     }else{
  //       this.toastr.error('Invalid Credentials')
  //     }
  //   })
  // }else{
  //   this.toastr.error('Please fill in your credentials');
  // }

  
}
}
