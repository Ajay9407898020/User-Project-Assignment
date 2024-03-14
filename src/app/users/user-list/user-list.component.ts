import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/library/models/user.model';
import { UserService } from 'src/app/library/services/user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers()
  }


  deleteUser(id: number) {
    this.userService.deleteUser(id);
    this.users = this.userService.getUsers()
   }

  editUser(id: number) {
    this.router.navigateByUrl(`/edit-user/${id}`)
  }

}
