import { ChangeDetectorRef, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SharedDataService } from './services/shared-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('temRef') temRef!: ElementRef;

  public forma!: FormGroup;
  public nombre: any;
  public users: any;
  public payload: any;
  public gifsResults: any;

  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef,
    private http: HttpClient, private sharedDataService: SharedDataService) {

  }

  ngOnInit(): void {
    this.forma = this.fb.group({
      name: ['', Validators.required],
      edad: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  addUser() {
    let payload = this.forma.value;
    this.sharedDataService.addUser(payload)

  }


  deleteUser(id: any) {
    console.log('id', id)
    this.sharedDataService.deleteUser(id);
  }

  getUserById(id: string) {
    this.sharedDataService.getUserById(id)
      .subscribe(user => console.log('userById', user))

  }

  // Gif Stuff

  searchGif(gifName: string) {
    console.log('gifName', gifName)
    this.sharedDataService.searchGif(gifName)
      .subscribe((results: any) => {
        this.gifsResults = results.data
        console.log('this.gifsResults', this.gifsResults)

      });
  }


}
