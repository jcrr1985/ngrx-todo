import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { Tarea } from 'src/app/task';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @ViewChild('lista') lista: ElementRef | undefined;

  tasks: Tarea[] = [];

  task: Tarea = { name: '', checked: false }

  constructor(private sds: SharedDataService) { }

  ngOnInit(): void {
  }


  addTask(ev: any) {
    if (ev.key === "Enter") {
      this.task.name = ev.target.value;
      this.task.checked = false;
      this.tasks.push(this.task)
      this.sds.pushTask.next(this.task)
      this.task = { name: '', checked: false }
      ev.target.value = ''
    }

  }

  check(ev: any) {

    console.log('this.lista', this.lista)
    console.log('this.lista.nativeElement.checked', this.lista?.nativeElement.checked);
  }
}
