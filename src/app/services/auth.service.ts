import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  isLoggedIn: boolean;
  redirectUrl: string;
  constructor() {
    if (sessionStorage.getItem('isLoogedIn') === '1') {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  // TODO: replace login with onservable and google+ authenticationServices
  // authenticationServices
  logIn1(email, password): Promise<any> {
    const resolveObj = {
      access: '',
      data: undefined
    };
    if (email === 'admin' && password === 'admin') {
      resolveObj.access = 'AdminAccess';
      this.isLoggedIn = true;
      this.redirectUrl = '/library-admin';
      return Promise.resolve(resolveObj);
    } else if (email === 'sheshaj' && password === 'sheshaj') {
      resolveObj.access = 'UserAccess';
      this.redirectUrl = '/library-user';
      this.isLoggedIn = true;
      resolveObj.data = 1;
      return Promise.resolve(resolveObj);
    } else {
      return Promise.reject('Username/password is incorrect');
    }
  }
}
