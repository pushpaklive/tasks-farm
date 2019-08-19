import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  task = {};

  public constructor(private cService: CommonService) {
     this.cService.currentData.subscribe((data) => {
       console.log("SubjectDetailComponent data : "+data);
       this.task = data;
     })
   }

  ngOnInit() {
  }

}
