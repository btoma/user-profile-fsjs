import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../../interface/userInterface';
import {UserService} from '../services/user.service';
import {NguiPopupComponent} from '@ngui/popup';
import {UserFormComponent} from '../user-form/user-form.component';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @ViewChild(NguiPopupComponent) popup: NguiPopupComponent;
  users: User[];
  user: FormGroup;

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.user = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required)
    });
    this.getUserList();
  }
  selectUser(user: User) {
    this.user = new FormGroup({
      name: new FormControl(user.name, [Validators.required, Validators.minLength(2)]),
      email: new FormControl(user.email, Validators.required),
      address: new FormControl(user.address, Validators.required),
      phone: new FormControl(user.phone, Validators.required)
    });
    this.openCustomPopup();
  }

  getUserList() {
    this.userService.getUsers().then( (res) => this.users = res);
  }

  openCustomPopup() {
    this.popup.open(UserFormComponent, {
      classNames: 'custom',
      closeButton: true
    });
  }

  editUser(user: User) {
    this.userService.edit(user).then( () => {
      console.log('hey');
    });
  }

  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    this.userService.create(value).then( () => {
      this.getUserList();
      this.popup.close();
    });
  }

  deleteUser(id: any) {

    this.userService.deleteUser(id).subscribe(() => {
      this.users = this.users.filter(user => user._id !== id);
    });
  }

}
