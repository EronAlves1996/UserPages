import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToolbarRouterService } from '../toolbar-router.service';
import { User } from '../user/user';
import { UserInfosService } from '../user/user-infos.service';

@Component({
  selector: 'app-add-user-menu',
  templateUrl: './add-user-menu.component.html',
  styleUrls: ['./add-user-menu.component.css']
})
export class AddUserMenuComponent implements OnInit {

  name: string = "";
  email: string = "";
  imgUrl: string = "";
  workEmail?: string;

  constructor(private tbR: ToolbarRouterService, private activatedRoute: ActivatedRoute, private uis: UserInfosService) { }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe({
      next: r=> {
        this.tbR.setActualRoute(r[0].path);
        console.log(r[0].path);
      },
      error: err=>console.log(err)
    })
  }

  addUser(){
    if(this.name && this.email && this.imgUrl){
      if(this.workEmail) this.uis.addUser(new User(this.name, this.email, this.imgUrl, this.workEmail))
      else this.uis.addUser(new User(this.name, this.email, this.imgUrl));
    }
  }

}
