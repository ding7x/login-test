import {Component, OnInit} from '@angular/core';
import {AuthorizationService} from '../_services/authorization.service';
import {Router} from '@angular/router';
import {User} from '../interfaces/user.interface';
import axios from 'axios';
import {TimeTrackInterface} from '../interfaces/timetrack.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private token: string;
  private timetrack: TimeTrackInterface[];

  constructor(
    private authorizationService: AuthorizationService,
    private router: Router
  ) {
  }

  async ngOnInit() {
    const resTimeTrack = await axios.get('http://vtimetrack.taydocantho.com/api/TimeTrack/all',
      {headers: {Authorization: `Bearer ${this.authorizationService.getToken()}`}});
    this.timetrack = resTimeTrack.data;
  }

  /*  getId() {
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
    }*/

  logout() {
    this.authorizationService.setLoginState(false);
    this.router.navigate(['/login']);
  }
}
