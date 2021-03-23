import {Component} from '@angular/core';
import {AuthorizationService} from './_services/authorization.service';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private authorizationService: AuthorizationService,
    private router: Router,
    private cookieService: CookieService,
  ) {
    const at = this.cookieService.get('at_test_login');
    if (at !== '') {
      this.authorizationService.setLoginState(true);
      this.authorizationService.setToken(at);
      this.router.navigate(['/']);
    }
    const loginState = this.authorizationService.getLoginState();
    if (!loginState) {
      this.router.navigate(['/login']);
    }
  }
}
