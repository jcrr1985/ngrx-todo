import { Iuser } from './../../interfaces/iuser';
import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnChanges {


  @Output() public deleteUserEvent: EventEmitter<string> = new EventEmitter();
  constructor(private sharedDataService: SharedDataService) { }


  get users(){
    return this.sharedDataService.users;
  }

  ngOnChanges(changes: SimpleChanges): void {
  }
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.sharedDataService.getUsers();
    console.log('users', this.users);
  }

  deleteUser(id: string) {
    this.deleteUserEvent.emit(id);
  }
}
