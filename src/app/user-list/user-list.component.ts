import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../../interface/userInterface';
import {UserService} from '../services/user.service';
import {NguiPopupComponent } from '@ngui/popup';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @ViewChild(NguiPopupComponent) popup: NguiPopupComponent;
  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().then( (res) => this.users = res);
  }


}
