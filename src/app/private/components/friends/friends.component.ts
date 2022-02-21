import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/services/user.model';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
  users: any;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }


  getUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

}
