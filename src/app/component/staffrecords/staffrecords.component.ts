import { Component, OnInit, ViewChild } from '@angular/core';
import { staffrecords } from '../../staffrecords';
import { MasterServiceService } from '../../service/master-service.service';
import { PopupComponent } from '../popup/popup.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-staffrecords',
  templateUrl: './staffrecords.component.html',
  styleUrl: './staffrecords.component.css'
})
export class StaffrecordsComponent implements OnInit {

  staffrecordlist!: staffrecords[];
  datasource: any;
  displayedColumns: string[] = ["id", "name", "email", "year", "department", "date", "actions"]



  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;




  constructor(private service: MasterServiceService, private dialog: MatDialog) { }
  ngOnInit(): void {
    this.loadStaffRecords()
  }

  openPopup(id: any, title: any) {
    this.dialog.open(PopupComponent, {
      width: "40",
      height: '250px',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      data: {
        id: id,
        title: title,
      }
    })
  }
  loadStaffRecords() {
    this.service.Getall().subscribe((res: any) => {
      this.staffrecordlist = res;
      this.datasource = new MatTableDataSource<staffrecords>(this.staffrecordlist);
      console.log('Customers retrieved successfuly', this.staffrecordlist)
      this.datasource.paginator = this.paginator
      this.datasource.sort = this.sort
    },
      (error: any) => {
        console.log(error)
        console.log('Error fetching user', error)

      })
  }

  editRecord(id: any) {
    this.openPopup(id, 'Edit Record');
  }
  addRecord() {
    this.openPopup(0, 'Add new record')
  }

  deleteRecord(id: any): void {
    this.service.DeleteRecord(id).subscribe({
      next: (res) => {
        alert('Record deleted successfully');
      },
      error: console.log
    })
  }

}

