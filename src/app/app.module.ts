import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import {HttpModule} from '@angular/http';
import {UserService} from './services/user.service';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule
  ],
  declarations: [ AppComponent, UserListComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    UserService
  ],

})
export class AppModule { }
