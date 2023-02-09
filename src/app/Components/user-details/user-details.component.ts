import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  userId: any;
  user: any;
  constructor(
    public activatedRoute: ActivatedRoute,
    private userService: UserService,
    public router: Router
  ) {
    this.userId = this.activatedRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.userService.getUserById(this.userId).subscribe((response) => {
      this.user = response;
    });
  }
  backToHome() {
    this.router.navigate(['/users']);
  }
}
