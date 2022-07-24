import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { appState } from 'src/app/app.reducer';
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

  constructor(private sds: SharedDataService, private store: Store<any>) { }

  ngOnInit(): void {
    this.store.select('todo').subscribe(todos => this.tasks = todos)
  }

  check(ev: any, i: any) {

    console.log('this.lista', this.lista)
    console.log('this.lista.nativeElement.checked', this.lista?.nativeElement.checked);
    this.tasks.splice(i, 1)
  }

}
