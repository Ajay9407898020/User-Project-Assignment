import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './library/material/angular-material.module.ts/angular-material.module.ts.module';
import { UserListComponent } from './users/user-list/user-list.component';
import { EditUserComponent } from './users/user-list/edit-user/edit-user.component';
import { CreateUserComponent } from './users/user-list/create-user/create-user.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    EditUserComponent,
    CreateUserComponent,
  ],
  imports: [
    AngularMaterialModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
