import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToolbarRouterService } from '../toolbar-router.service';

@Component({
  selector: 'app-add-user-menu',
  templateUrl: './add-user-menu.component.html',
  styleUrls: ['./add-user-menu.component.css']
})
export class AddUserMenuComponent implements OnInit {

  constructor(private tbR: ToolbarRouterService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe({
      next: r=> {
        this.tbR.setActualRoute(r[0].path);
        console.log(r[0].path);
      },
      error: err=>console.log(err)
    })
  }

}
