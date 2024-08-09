import { Component } from '@angular/core';
import { User } from '../interface/user';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent {
  user: User = {} as User;
  userId: string = '';

  constructor(
    private _userService: UserService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {
    _activatedRoute.params.subscribe((res: any) => {
      this.userId = res.userId;
    });
    this.getUser(this.userId);
  }

  getUser(id: string) {
    this._userService.getUser(id).subscribe({
      next: (res) => {
        this.user = res.data;
      },
    });
  }

  backToHome() {
    this._router.navigate(['home']);
  }
}
