import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://localhost:3000/users';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient, private user: User) { }

  getUsers(): Observable<User> {
    return this.http.get<User>(this.url);
  }

  postUsers(user): Observable<User> {
    return this.http.post<User>(this.url, user, this.httpOptions);
  }

  deleteUser(userId): Observable<{}> {
    const deleteUrl = this.url + '/' + userId;
    return this.http.delete(deleteUrl, this.httpOptions);
  }

  updateUser(userId, user): Observable<User> {
    const putUrl = this.url + '/' + userId;
    return this.http.put<User>(putUrl, user, this.httpOptions);
  }
}
