
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {User} from '../../interface/userInterface';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
  constructor(private http: Http) { }

  /**
   * get all user list
   * @returns {Promise<User[]>}
   */
  public getUsers(): Promise<User[]> {
    const userUrl = 'http://localhost:3000/api/users';
   return this.http.get(userUrl).map(res => res.json()).toPromise();
  }

  /**
   * Add new user to database
   * @param {User} data
   * @returns {Promise<User>}
   */
  public create(data: User): Promise<User> {
    console.log(data);
    const url = 'http://localhost:3000/api/user';
    return this.http.post(url, data).map(res => res.json()).toPromise();
  }

  /**
   * Edit user information
   * @param {User} user
   * @param {number} id
   * @returns {Promise<User>}
   */
  public edit(user: User, id: number): Promise<User> {
    const url = 'http://localhost:3000/api/user/' + id;
    return this.http.put(url,user).map(res => res.json()).toPromise();
  }

  /**
   * Delete the user from database.
   * @param {number} id
   * @returns {Promise<any>}
   */
  public deleteUser(id: number) {
    console.log(id);
    return this.http.delete('http://localhost:3000/api/user/' + id).map(res => res.json());

  }

}
