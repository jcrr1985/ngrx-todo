import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Tarea } from '../task';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  pushTask: Subject<Tarea> = new Subject()
  pushTask$ = this.pushTask.asObservable();

  constructor() { }

}
