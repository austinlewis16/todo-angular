import { Component, OnInit } from '@angular/core';
import {MatDialog , MatDialogConfig} from '@angular/material/dialog';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent implements OnInit {
  isclicked = false;

  constructor() { }

  ngOnInit(): void {
  }
  ontoggle(){
    this.isclicked= !this.isclicked;
  }

}
