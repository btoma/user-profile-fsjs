import {Component, OnInit} from '@angular/core';
import {User} from '../../interface/userInterface';
import {UserService} from '../services/user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[];
  user: FormGroup;
  editUserVal = false;
  userSelectedId: number;

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.userForm();
    this.getUserList();
  }

  userForm(){
    this.user = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required)
    });
  }

  /**
   * Used for getting user info and id and pass it to from.
   * @param {User} user
   */
  selectUser(user: User) {
    this.editUserVal = true;
    this.userSelectedId = user._id;
    this.user = new FormGroup({
      name: new FormControl(user.name, [Validators.required, Validators.minLength(2)]),
      email: new FormControl(user.email, Validators.required),
      address: new FormControl(user.address, Validators.required),
      phone: new FormControl(user.phone, Validators.required)
    });
  }

  /**
   * Getting all users form database.
   */
  getUserList() {
    this.userService.getUsers().then( (res) => this.users = res);
  }

  /**
   * Saving the user to database.
   * @param {User} value
   * @param {boolean} valid
   */
  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    console.log("ON SUBMIT", value, valid);
    if (!this.editUserVal) {
      console.log('save');
      this.userService.create(value).then(() => {
        this.getUserList();
        this.userForm();
      });
    }else {

      this.userService.edit(value,this.userSelectedId).then( () => {
        this.getUserList();
      });
    }
  }

  /**
   * Delete the user from database.
   * @param id
   */
  deleteUser(id: any) {

    this.userService.deleteUser(id).subscribe(() => {
      this.users = this.users.filter(user => user._id !== id);
    });
  }

}
