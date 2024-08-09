import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../interface/user';

@Pipe({
  name: 'search',
  standalone: true,
})
export class SearchPipe implements PipeTransform {
  transform(users: User[], userId: string): User[] {
    if (userId == '') {
      return users;
    }
    return users.filter((user) => {
      return user.id == userId;
    });
  }
}
