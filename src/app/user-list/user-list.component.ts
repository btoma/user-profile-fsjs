import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../../interface/userInterface';
import {UserService} from '../services/user.service';
import {NguiMessagePopupComponent, NguiPopupComponent} from '@ngui/popup';
import {UserFormComponent} from "../user-form/user-form.component";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @ViewChild(NguiPopupComponent) popup: NguiPopupComponent;
  users: User[];
  message: string;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().then( (res) => this.users = res);
  }

  openPopup() {
    this.popup.open(NguiMessagePopupComponent, {
      title: 'My Title',
      message: 'My Message',
      buttons: {
        OK: () => {
          this.message = 'Ok button is pressed';
        },
        CANCEL: () => {
          this.message = 'Cancel button is pressed';
          this.popup.close();
        }
      }
    });
  }
  openCustomPopup() {
    this.popup.open(UserFormComponent, {
      classNames: 'custom',
      closeButton: true,
      title: 'My Title',
      message: 'My Message',
      buttons: {
        OK: () => {
          this.message = 'Ok button is pressed';
        },
        CANCEL: () => {
          this.message = 'Cancel button is pressed';
          this.popup.close();
        }
      }
    });
  }
}
