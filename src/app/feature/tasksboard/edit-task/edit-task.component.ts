import { NewListComponent } from './../new-list/new-list.component';
import { Component, OnInit } from '@angular/core';
import {MatDialog , MatDialogConfig} from '@angular/material/dialog';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(NewListComponent);

  }


}
