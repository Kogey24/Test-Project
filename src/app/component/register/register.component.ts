import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { user } from './User';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  registrationform!: FormGroup;
constructor( private builder: FormBuilder,private service:AuthService,private toastr:ToastrService, private router:Router){}
  ngOnInit(): void {
   this.registrationform = this.builder.group({
      username: this.builder.control('',Validators.compose([Validators.required,Validators.minLength(5)])),
      password: this.builder.control('',Validators.required),
      // confirmpassword: this.builder.control('',Validators.required),
      name: this.builder.control('',Validators.required),
      email: this.builder.control('',Validators.compose([Validators.required,Validators.email])),
      phone: this.builder.control('',Validators.required),
      gender: this.builder.control('Male'),
      role: this.builder.control('', Validators.required),
      isActive: this.builder.control(true)
    })
  }
customerdata:any;



Register() {
  console.log(this.registrationform.value)
  if (this.registrationform.valid) {
    this.service.ProceedRegister(this.registrationform.value).subscribe(
      (res: any) => {
        
        console.log('User added successfully', res);
        this.toastr.success('Please contact your Admin to enable access', 'Registered successfully');
        this.router.navigate(['']);
      },
      (error) => {
        console.error('Error occurred during registration:', error);
        this.toastr.error('An error occurred during registration. Please try again later.');
      }
    );
  } else {
    this.toastr.warning('Please enter a valid form');
  }
}


}
