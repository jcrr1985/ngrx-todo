import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @ViewChild('lista') lista: ElementRef | undefined;
  forma!: FormGroup;


  constructor(private sds: SharedDataService, private store: Store<any>, private fb: FormBuilder) {
    this.forma = this.fb.group({
      algo: ['algo', Validators.required]
    })
  }

  ngOnInit(): void {
  }



}
