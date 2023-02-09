import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: any;
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.loadUsers();
  }
  loadUsers() {
    this.userService.getAllUsers().subscribe((response) => {
      this.users = response;
    });
  }
  deleteUserHandler(userId: any) {
    this.userService.deleteUser(userId).subscribe((response) => {
      console.log(response);
      this.users = this.users.filter((user: any) => {
        return user.Id != userId;
      });
      alert(`Deleted`);
      this.loadUsers();
    });
  }
}
