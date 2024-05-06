import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { staffrecords } from '../../staffrecords';
import { MasterService } from '../../service/master.service';
import { Console } from 'console';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent implements OnInit{
  duplicateError: string = '';
  editdata!: any;
  inputdata: any;

constructor(private builder:FormBuilder, private ref:MatDialogRef<PopupComponent>,private service: MasterService, @Inject(MAT_DIALOG_DATA) public data: any){}


  ngOnInit(): void {
    this.inputdata = this.data;
    if (this.inputdata.id > 0) {
      this.setpopupdata(this.inputdata.id)
    }
    // this.recordsform.setValue({name:'Jakes Mwangi', email:'jakesmwangi@gmail.com', Year:'2012',department:'Finance',date:new Date(20,4,2012),})
  }

recordsform =this.builder.group({
  Fullname:this.builder.control('',Validators.required),
  email:this.builder.control('',Validators.required),
  BirthYear:this.builder.control('',Validators.required),
  department:this.builder.control('',Validators.required),
  JoiningDate:this.builder.control('',Validators.required),
})
closepopup(){
this.ref.close();
}
setpopupdata(id: any) {
  // this.service.GetRecord(id).subscribe(item => {
  //     this.editdata = item;
  //     this.recordsform.setValue({
  //       name: this.editdata.name,
  //       email: this.editdata.email,
  //       Year: this.editdata.Year,
  //       department: this.editdata.department,
  //       date: this.editdata.date
  //     });
  // })
}
OnSubmit(): void {
  console.log(this.recordsform.value);
  if (this.inputdata.title === 'Add new record') {
   
    const newRecord: staffrecords = {
      code: this.recordsform.get('Code')?.value || '',
      fullname: this.recordsform.get('fullName')?.value || '',
      email: this.recordsform.get('email')?.value || '',
      department: this.recordsform.get('department')?.value || '',
      joiningDate: this.recordsform.get('Joining Date')?.value || '',
      isActive: this.recordsform.get('IsActive')?.value || true,
      statusname:this.recordsform.get('statusname')?.value || '',
    };

    this.service.CreateRecord(newRecord).subscribe(
      res => {
        console.log('Form submitted successfully', res);
        this.closepopup();
      },
      error => {
        console.log('Error submitting the form', error);
        this.duplicateError = 'User with the same email address already exists.';
      }
    );
  } else {
    this.service.UpdateRecord(this.data).subscribe(
      res => {
        console.log('Record updated successfully', res);
        this.closepopup();
      },
      error => {
        console.log('Error updating the record', error);
      }
    );
  }
}
}
