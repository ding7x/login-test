import {Component, OnInit} from '@angular/core';
import {AuthorizationService} from '../_services/authorization.service';
import {Router} from '@angular/router';
import {User} from '../interfaces/user.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private user: User;

  constructor(
    private authorizationService: AuthorizationService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.user = this.authorizationService.getUser();
  }

  getId() {
    return this.user.id;
  }

  getUsername() {
    return this.user.email;
  }

  getName() {
    return this.user.name;
  }

  getPhone() {
    return this.user.phone;
  }

  getAvatar() {
    return `https://s.hatinhcogi.com/account/image/${this.user.avatar}`;
  }

  getEmail() {
    return this.user.email;
  }

  getGender() {
    return this.user.gender;
  }

  logout() {
    this.authorizationService.setLoginState(false);
    this.router.navigate(['/login']);
  }
}
