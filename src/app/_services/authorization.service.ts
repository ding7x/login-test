import {Injectable} from '@angular/core';
import {User} from '../interfaces/user.interface';
import {TimeTrackInterface} from '../interfaces/timetrack.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private loginState = false;
  private token = '';
  private user: User;
  private TimeTrack: TimeTrackInterface[];

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

  setToken(token: string) {
    this.token = token;
  }

  getToken() {
    return this.token;
  }

  setTimeTrack(TimeTrack: TimeTrackInterface[]) {
    this.TimeTrack = TimeTrack;
  }

  getTimeTrack() {
    return this.TimeTrack;
  }
}
