import {Component, OnInit} from '@angular/core';
import {AuthorizationService} from '../_services/authorization.service';
import {Router} from '@angular/router';
import {User} from '../interfaces/user.interface';
import axios from 'axios';
import {TimeTrackInterface} from '../interfaces/timetrack.interface';
import {CookieService} from 'ngx-cookie-service';

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
    private router: Router,
    private cookieService: CookieService,
  ) {
  }

  async ngOnInit() {
    const resTimeTrack = await axios.get('http://vtimetrack.taydocantho.com/api/TimeTrack/all',
      {headers: {Authorization: `Bearer ${this.authorizationService.getToken()}`}});
    this.timetrack = resTimeTrack.data;
  }

  logout() {
    this.authorizationService.setLoginState(false);
    this.cookieService.delete('at_test_login');
    this.router.navigate(['/login']);
  }
}
