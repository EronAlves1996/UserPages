import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToolbarRouterService } from '../toolbar-router.service';
import { User } from './user';
import { UserInfosService } from './user-infos.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = [];

  constructor(private userInfo: UserInfosService, private tbR: ToolbarRouterService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.users = this.userInfo.retrieveAllUsers();
    this.activatedRoute.url.subscribe({
      next: r=> {
        this.tbR.setActualRoute("");
      },
      error: err=>console.log(err)
    })
  }

}
