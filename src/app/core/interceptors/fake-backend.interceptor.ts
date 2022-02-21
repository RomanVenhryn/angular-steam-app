import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../services/user.model';
import { UserService } from '../services/user.service';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  //users: <User[]> = this.userService.getUsers();

  constructor(
    private userService: UserService
  ) {
    
  }



  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request);
  }
}
