import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ToolbarRouterService } from '../toolbar-router.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  route:string = "";

  constructor(private toolbarRouter: ToolbarRouterService) {

   }


  ngOnInit(): void {
    this.toolbarRouter.actualRoute.subscribe({
      next: v => this.route = v,
      error: err => console.log(err)
    })
  }

}
