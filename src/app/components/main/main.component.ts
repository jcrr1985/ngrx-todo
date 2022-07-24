import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { Tarea } from 'src/app/task';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @ViewChild('lista') lista: ElementRef | undefined;

  tasks: Tarea[] = [];

  constructor(private sds: SharedDataService) { }

  ngOnInit(): void {
    this.sds.pushTask$.subscribe(task => {
      console.log('task', task)
      this.tasks.push(task)
      console.log('this.tasks', this.tasks)
    }
    )
  }

  check(ev: any, i: any) {

    console.log('this.lista', this.lista)
    console.log('this.lista.nativeElement.checked', this.lista?.nativeElement.checked);
    this.tasks.splice(i, 1)
  }

}
