import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddUserMenuComponent } from './add-user-menu/add-user-menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddUserComponent,
    AddUserMenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'add-user', component: AddUserMenuComponent
      },
      {
        path: '', component: UserComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
