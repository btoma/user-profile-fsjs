import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {User} from '../../interface/userInterface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[];

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('/api/users').subscribe(data => {
      this.users = data.json();
      console.log(this.users);
    });
  }
}
