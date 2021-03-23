import {Component, OnInit} from '@angular/core';
import {FormBuilder,} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../_services/authentication.service';
import {ToastController} from '@ionic/angular';
import {AuthorizationService} from '../_services/authorization.service';
import axios from 'axios';
// tslint:disable-next-line:no-unused-expression
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm = this.formBuilder.group({
    username: '',
    password: ''
  });


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private authorizationService: AuthorizationService,
    public toastController: ToastController,
    private cookieService: CookieService,
  ) {
  }


  ngOnInit() {
  }

  async onSubmit() {
    if (this.loginForm.value.username.trim() === '' || this.loginForm.value.password.trim() === '') {
      const toast = await this.toastController.create({
        message: 'Username or Password be not empty.',
        duration: 2000,
        color: 'danger'
      });
      await toast.present();
      return;
    }
    try {
      const res = await this.authenticationService.login(this.loginForm.value.username, this.loginForm.value.password);
      if (res.status === 200) {
        this.authorizationService.setLoginState(true);
        this.loginForm.reset();
        await this.cookieService.set('at_test_login', res.data.token);
        await this.authorizationService.setToken(res.data.token);
        await this.router.navigate(['/'], {relativeTo: this.route});
      } else {
        const toast = await this.toastController.create({
          message: 'Username or Password is incorrect.',
          duration: 2000,
          color: 'danger'
        });
        await toast.present();
      }
    } catch (e) {
      const toast = await this.toastController.create({
        message: e,
        duration: 2000,
        color: 'danger'
      });
      await toast.present();
    }
  }

}
