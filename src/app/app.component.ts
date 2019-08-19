import { Component, OnInit } from '@angular/core';
import { CommonService } from './common.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  task;
  importance;
  data = [];

  ngOnInit() {
    this.data = this.cService.getData();
    console.log("ngOnInit() data : " + this.data);
  }

  constructor(private cService: CommonService, private router: Router) { }

  addTask(newTask) {
    this.task = '';
    this.importance = 0;
    const currentTask = newTask;
    currentTask.id = this.data.length + 1;
    console.log(currentTask);
    this.data.push(currentTask);
    this.cService.addTasks(this.data);
    this.cService.getData();
    //console.log("data : "+this.data);
  }

  deletetask(task) {
    for (var i = 0; i < this.data.length; i++) {
      console.log(this.data[i].id);
      if (this.data[i].id == task.id)
        this.data.splice(i, 1);
    }
    console.log("delete data : " + this.data);
    this.cService.tasksAfterRemovingCurrent(this.data);
    this.cService.getData();

  }

  showtaskDetails(selectedTask) {
    this.cService.changeData(selectedTask);
    this.router.navigate(['taskdetail']);
  }

}
