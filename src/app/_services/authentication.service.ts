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
      return await axios.post('https://vtimetrack.taydocantho.com/signin', {username, password});
    } catch (e) {
      return e;
    }
  }
}
