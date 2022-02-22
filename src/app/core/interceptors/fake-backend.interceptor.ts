import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpClient,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize, take } from 'rxjs/operators';
import { User } from '../services/user.model';
import { UserService } from '../services/user.service';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  constructor(private userService: UserService, private http: HttpClient) {}

  users: User[];

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {

    //console.log(this.userService);

    let users;

    try {
      // array in local storage for registered users
      this.userService.getUsers().subscribe(users => {
        users = users; 
      });
    } catch(e) {
      console.log(e);
    }

    console.log(users);

    if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
      //console.log(request)
      // find if any user matches login credentials
      let filteredUsers = this.users.filter(user => {
          return user.username === request.body.username && user.password === request.body.password;
      });

      //console.log(request);

      if (filteredUsers.length) {
          // if login details are valid return 200 OK with user details and fake jwt token
          let user = filteredUsers[0];
          let body = {
              id: user.id,
              email: user.email,
              password: user.password,
              username: user.username,
              age: user.age,
              friends: user.friends,
              games: user.games,
              token: 'fake-jwt-token'
          };

          return of(new HttpResponse({ status: 200, body: body }));
      }/*  else {
          // else return 400 bad request
          return throwError({ error: { message: 'Username or password is incorrect' } });
      } */
  }

    return next.handle(request);
  }
}
