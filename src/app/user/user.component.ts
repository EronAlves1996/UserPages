import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserInfosService } from './user-infos.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = [];

  constructor(private userInfo: UserInfosService) { }

  ngOnInit(): void {
    this.users = this.userInfo.retrieveAllUsers();
  }

}
