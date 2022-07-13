import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolbarRouterService {

  actualRoute = new Subject<string>();
  
  constructor() { }

  setActualRoute(route: string): void{
    this.actualRoute.next(route);
  }
}
