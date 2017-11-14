import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import {HttpModule} from '@angular/http';
import {UserService} from './services/user.service';
import { UserFormComponent } from './user-form/user-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { NguiPopupModule } from '@ngui/popup';
import {appRoutingProviders, routing} from "./app.router";


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    NguiPopupModule,
    routing
  ],
  declarations: [ AppComponent, UserListComponent, UserFormComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    UserService,
    appRoutingProviders
  ],
  exports: [
    UserFormComponent,
    UserListComponent
  ],
  entryComponents: [UserFormComponent]
})
export class AppModule { }
