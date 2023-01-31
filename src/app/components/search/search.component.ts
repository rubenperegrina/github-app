import { Component } from '@angular/core';
import { Item, User } from 'src/app/models/user.model';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  userName: string = '';
  userList!: Item[];
  userCount!: User["total_count"];
  displayedColumns: string[] = ['avatar_url', 'type', 'login'];

  constructor(private _githubService: GithubService) { }

  getUserData(userName: string) {
    if (userName.length >= 4) {
      this._githubService.getUser(userName).subscribe((res: User) => {
        this.userList = res.items;
        this.userCount = res.total_count;
      });
    }
  }
}
