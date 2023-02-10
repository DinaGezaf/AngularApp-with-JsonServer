import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  userId: any;
  userData: any;

  userForm = new FormGroup({
    Username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),
    Email: new FormControl('', [Validators.required, Validators.email]),
    Password: new FormControl('', [
      Validators.required,
      Validators.minLength(7),
      Validators.maxLength(15),
    ]),
  });

  constructor(
    public activatedRoute: ActivatedRoute,
    private userService: UserService,
    public router: Router
  ) {
    this.userId = this.activatedRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    if (this.userId) {
      this.userService.getUserById(this.userId).subscribe((response) => {
        this.userData = response;
        this.userForm.setValue({
          Username: this.userData.Username,
          Email: this.userData.Email,
          Password: this.userData.Password,
        });
      });
    }
  }
  SaveData(e: Event) {
    e.preventDefault();
    this.userData = this.userForm.value;
    if (this.userId) {
      this.userService
        .editUser(this.userId, this.userData)
        .subscribe((response) => {
          alert(`Updated ${this.userData.Username}`);
          this.userData = response;
        });
    } else {
      this.userService.addNewUser(this.userData).subscribe((response) => {
        alert(`Added ${this.userData.Username}`);
        this.userData = response;
      });
    }
  }

  backToHome() {
    this.router.navigate(['/users']);
  }
}
