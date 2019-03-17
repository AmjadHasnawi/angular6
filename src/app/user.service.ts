import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user.model';
import { SignIn } from './sign.model';

// import { SignIn } from './sign.model';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UserService {
    private rootUrl = "/api";
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

  // selectedUser: User = {
  //   name: '',
  //   email: '',
  //   password: ''
  // };
  constructor(private http: HttpClient) { }
  registerUser(user: User) {
    return this.http.post(this.rootUrl + '/signUp', user);
  }

  userAuthentication(model: SignIn) {
    return this.http.post(this.rootUrl+'/signIn',model);
  }
  
  Edit(name: string, email: string) {
    console.log(name, email)
    const user : User= {
      name: name,
      email: email,
      password: ''
    }
    return this.http.post(this.rootUrl + '/modifyUser', user);
  }

  Delete(email) {
    email = {email: email}
    return this.http.post(this.rootUrl + '/deleteUser', email);
  }
}
