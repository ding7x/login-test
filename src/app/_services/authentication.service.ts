import {Injectable} from '@angular/core';

import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() {
  }

  async login(username, password) {
    try {
      const res = await axios.post('https://s.hatinhcogi.com/auth/jwt', {username, password});
      console.log(res);
      return await axios.post('https://s.hatinhcogi.com/auth/login', {username, password});
    } catch (e) {
      return e;
    }
  }
}
