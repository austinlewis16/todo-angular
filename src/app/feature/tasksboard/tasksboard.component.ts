import { Component, OnInit, Input, TemplateRef, ViewChild } from '@angular/core';
export interface TaskData {
  taskCardTitle: string;
}
import {MatDialog , MatDialogConfig} from '@angular/material/dialog';

@Component({
  selector: 'app-tasksboard',
  templateUrl: './tasksboard.component.html',
  styleUrls: ['./tasksboard.component.css']
})
export class TasksboardComponent implements OnInit {

  tasks =  [];
  @ViewChild('callAPIDialog') callAPIDialog: TemplateRef<any>;

  constructor(private dialog: MatDialog) { }

  callAPI() {
      let dialogRef = this.dialog.open(this.callAPIDialog);

  }


  @Input() taskData: TaskData;


  showDiv = {
    logout : false,
    taskCard : false,
  }



  ngOnInit() {
    this.tasks = [];
  }

  addCard() {
    this.tasks.push({
      taskCardTitle: (<HTMLInputElement>document.getElementById('newTaskCardName')).value
    });
  }

  displayModal() {
    document.getElementById("addNewTaskModal").style.display = "block";
  }

  closeModal() {
    document.getElementById("addNewTaskModal").style.display = "none";
  }


}
