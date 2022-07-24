import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { Tarea } from 'src/app/task';
import * as actions from 'src/app/todo.actions';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @ViewChild('lista') lista: ElementRef | undefined;

  tasks: Tarea[] = [];

  task: Tarea = { name: '', checked: false }

  constructor(private sds: SharedDataService, private store: Store) { }

  ngOnInit(): void {
  }


  addTask(ev: any) {
    if (ev.key === "Enter") {
      if (ev.target.value === '' || ev.target.value === undefined) {
        console.log('chau');
        return
      }
      this.task.name = ev.target.value;
      this.task.checked = false;
      // this.sds.pushTask.next(this.task)
      // this.task = { name: '', checked: false }
      // ev.target.value = ''
      this.store.dispatch(actions.crear({ name: ev.target.value }))
    }

  }

  check(ev: any) {

    console.log('this.lista', this.lista)
    console.log('this.lista.nativeElement.checked', this.lista?.nativeElement.checked);
  }
}
