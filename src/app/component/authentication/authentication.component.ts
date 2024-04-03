import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css'
})
export class AuthenticationComponent {
constructor(private builder: FormBuilder){}

authenticationform=this.builder.group({
  fullname:this.builder.control('',Validators.required),
  emailAdress:this.builder.control('',Validators.required),
  password:this.builder.control('',Validators.required),
})

Onsubmit(){
  
}
}
