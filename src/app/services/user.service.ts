
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {User} from '../../interface/userInterface';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
  constructor(private http: Http) { }
  public getUsers(): Promise<User[]> {
    const userUrl = 'http://localhost:3000/api/users';
   return this.http.get(userUrl).map(res => res.json()).toPromise();
  }
}
