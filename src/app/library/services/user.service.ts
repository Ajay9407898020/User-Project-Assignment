import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private users: User[] = [
    {
      id: 1,
      name: 'Vishal Rane',
      email: 'vishal@example.com',
      role: 'Admin'
    },
    {
      id: 2,
      name: 'Alice Smith',
      email: 'alice@example.com',
      role: 'User'
    },
    {
      id: 3,
      name: 'Allie Johnson',
      email: 'allie@example.com',
      role: 'User'
    },
    {
      id: 4,
      name: 'Justine Brown',
      email: 'justine@example.com',
      role: 'User'
    },
    {
      id: 5,
      name: 'Michael Davis',
      email: 'michael@example.com',
      role: 'Admin'
    }
  ];

  constructor() { }

  getUsers(): User[] {
    return this.users;
  }

  getUserById(id: number) {
    return this.users.find(user => user.id === id);
  }

  addUser(user: User) {
    this.users.push(user);
  }

  updateUser(updatedUser: User) {
    const index = this.users.findIndex(user => user.id === updatedUser.id);
    if (index !== -1) {
      this.users[index] = updatedUser;
    }
  }

  deleteUser(id: number) {
    this.users = this.users.filter(user => user.id !== id);
  }
}
