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

  route: string = "";

  constructor(private tbR: ToolbarRouterService, private activatedRoute: ActivatedRoute, private uis: UserInfosService) { }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe({
      next: r => {
        this.route = r[0].path;

        this.tbR.setActualRoute(this.route);

        if (r[1]) {
          const tempUser = this.uis.retrieveUser(r[1].path);
          this.name = tempUser.name;
          this.email = tempUser.email;
          this.imgUrl = tempUser.imgUrl;
          this.workEmail = tempUser.workEmail;
        }

      },
      error: err => console.log(err)
    })
  }

  addUser() {
    if (this.route === "edit-user") {
      this.uis.editUser(new User(this.name, this.email, this.imgUrl, this.workEmail), this.email);
    } else {
      if (this.name && this.email && this.imgUrl) {
        if (this.workEmail) this.uis.addUser(new User(this.name, this.email, this.imgUrl, this.workEmail))
        else this.uis.addUser(new User(this.name, this.email, this.imgUrl));
      }
    }
  }

}
