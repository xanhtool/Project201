import { Component, Input } from '@angular/core';
import {User} from '../shared/models/user';
@Component({
  selector: 'user-profile',
  templateUrl: 'app/users/user-profile.component.html',
})
export class UserProfileComponent {
  @Input() user: User;
}
