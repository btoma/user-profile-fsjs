import { Component, OnInit } from '@angular/core';
import {User} from '../../interface/userInterface';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  user: FormGroup;

  constructor() {

  }

  ngOnInit() {
    this.user = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required)
    });
  }

  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    console.log(value, valid);

  }

}
