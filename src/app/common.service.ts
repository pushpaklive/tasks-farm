import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  STORAGE_KEY = "alpha_task";

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  data;

  private dataSource = new BehaviorSubject({});
  currentData = this.dataSource.asObservable();

  changeData(data) {
    this.dataSource.next(data);
  }

  getData() {
    console.log("getData()");
    if(this.storage.get(this.STORAGE_KEY) != undefined)
    this.data = this.storage.get(this.STORAGE_KEY);
    else
    this.data = [];
    return this.data;
  }

  addTasks(alltasks) {
    //this.storage.set(this.STORAGE_KEY,[]);
    for(var i=0;i<alltasks.length;i++){
      console.log("cService addTasks id : ",alltasks[i].id+" task : "+alltasks[i].task);
    }
    this.storage.set(this.STORAGE_KEY, alltasks);
    //this.getData();
  }

  tasksAfterRemovingCurrent(alltasks) {
    //this.storage.set(this.STORAGE_KEY,[]);
    this.storage.set(this.STORAGE_KEY, alltasks);
  }

}
