import { Component, OnInit } from '@angular/core';

import { User } from '../../types/user';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  users: User[];

  constructor(private svc: RestService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.svc.getAllUsers()
        .then(users => this.users = users)
  }

}