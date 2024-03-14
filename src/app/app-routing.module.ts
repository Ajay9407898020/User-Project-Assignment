import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './users/user-list/user-list.component';
import { EditUserComponent } from './users/user-list/edit-user/edit-user.component';
import { CreateUserComponent } from './users/user-list/create-user/create-user.component';

const routes: Routes = [
  { component: UserListComponent, path: 'user-list' },
  { component: CreateUserComponent, path: 'add-user' },
  { component: CreateUserComponent, path: 'edit-user/:id' },
  { path: '', pathMatch: 'full', redirectTo: '/user-list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
