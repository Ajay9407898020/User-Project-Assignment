import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/library/models/user.model';
import { UserService } from 'src/app/library/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  user: User | undefined;
  userForm!: FormGroup;
  userMode!: string;
  users: User[] = []
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    this.route.params.subscribe(params => {
      const { id } = params;
      if (id) {
        this.userMode = 'Edit';
        this.user = this.users.find(user => user?.id == id);
      } else {
        this.userMode = 'Add'
      }
    })
    this._initForm();
  }

  private _initForm() {
    this.userForm = this.fb.group({
      id: [this.user ? this.user.id : this.users[this.users.length - 1]?.id + 1],
      name: [this.user ? this.user.name : '', Validators.required],
      email: [this.user ? this.user.email : '', [Validators.required, Validators.email]],
      role: [this.user ? this.user.role : '', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.userMode === 'Edit') {
      this.userService.updateUser(this.userForm.value)
    } else {
      this.userService.addUser(this.userForm?.value);
    }
    this.router.navigateByUrl('/user-list');
  }
}
