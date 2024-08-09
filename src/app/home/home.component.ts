import { Component, NgModule } from '@angular/core';
import { User } from '../interface/user';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../pipes/search.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  users: User[] = [];
  id: string = '';
  pagesArray = Array;
  totalPages: number = 0;

  constructor(private _userService: UserService, private _router: Router) {
    this.getAllUsers();
  }

  getAllUsers(page: number = 1) {
    this._userService.getUsers(page).subscribe({
      next: (res) => {
        this.users = res.data;
        this.totalPages = res.total_pages;
        console.log(this.totalPages);
        console.log(res);
      },
    });
  }

  getUser(userId: string) {
    this._router.navigate(['user', userId]);
  }
}
