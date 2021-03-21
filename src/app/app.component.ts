import { Component } from '@angular/core';
import {AuthorizationService} from './_services/authorization.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private authorizationService: AuthorizationService,
    private router: Router
  ) {
    const loginState = this.authorizationService.getLoginState();
    if (!loginState) {
      this.router.navigate(['/login']);
    }
  }
}
