import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MasterServiceService } from '../../service/master-service.service';
import { staffrecords } from '../../staffrecords';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent implements OnInit{
  duplicateError: string = '';
  editdata!: any;
  inputdata: any;

constructor(private builder:FormBuilder, private ref:MatDialogRef<PopupComponent>,private service: MasterServiceService, @Inject(MAT_DIALOG_DATA) public data: any){}


  ngOnInit(): void {
    this.inputdata = this.data;
    if (this.inputdata.id > 0) {
      this.setpopupdata(this.inputdata.id)
    }
    // this.recordsform.setValue({name:'Jakes Mwangi', email:'jakesmwangi@gmail.com', Year:'2012',department:'Finance',date:new Date(20,4,2012),})
  }

recordsform =this.builder.group({
  name:this.builder.control('',Validators.required),
  email:this.builder.control('',Validators.required),
  Year:this.builder.control('',Validators.required),
  department:this.builder.control('',Validators.required),
  date:this.builder.control(new Date(2012,4,20)),
})
closepopup(){
this.ref.close();
}
setpopupdata(id: any) {
  this.service.GetRecord(id).subscribe(item => {
      this.editdata = item;
      this.recordsform.setValue({
        name: this.editdata.name,
        email: this.editdata.email,
        Year: this.editdata.Year,
        department: this.editdata.department,
        date: this.editdata.date
      });
  })
}
OnSubmit(): void {
  if (this.inputdata.title === 'Add new record') {
   
    const newRecord: staffrecords = {
      id: this.recordsform.get('id')?.value || 0,
      name: this.recordsform.get('name')?.value || '',
      email: this.recordsform.get('email')?.value || '',
      Year: this.recordsform.get('year')?.value || 0,
      department: this.recordsform.get('department')?.value || '',
      date: this.recordsform.get('date')?.value || new Date()
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
