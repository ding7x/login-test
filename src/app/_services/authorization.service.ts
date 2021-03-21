import {Injectable} from '@angular/core';
import {User} from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private loginState = false;
  private user: User;

  constructor() {
  }

  getLoginState() {
    return this.loginState;
  }

  setLoginState(state) {
    this.loginState = state;
  }

  setUser(user: User) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }
}
