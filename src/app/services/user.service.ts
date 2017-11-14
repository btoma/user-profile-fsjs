
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

  public create(data: User): Promise<User> {
    console.log(data);
    const url = 'http://localhost:3000/api/user';
    return this.http.post(url, data).map(res => res.json()).toPromise();
  }

  public edit(user: User): Promise<User> {
    console.log(user);
    const url = 'http://localhost:3000/api/user';
    return this.http.post(url, user).map(res => res.json()).toPromise();
  }

  /**
   *
   * @param {number} id
   * @returns {Promise<any>}
   */
  public deleteUser(id: number) {
    console.log(id);
    return this.http.delete('http://localhost:3000/api/user/' + id).map(res => res.json());

  }

}
