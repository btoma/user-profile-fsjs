
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {User} from '../../interface/userInterface';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
  private userUrl = 'http://localhost:3000/api/users';
  constructor(private http: Http) { }
  public getUsers(): Promise<User[]> {
   return this.http.get(this.userUrl).map(res => res.json()).toPromise();
  }
}
