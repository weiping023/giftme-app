import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/share';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Api } from '../api/api';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Platform } from 'ionic-angular';
import { User } from '../../entities/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserProvider {
  _user: any;
  ipAddress = '192.168.170.1';
  portNo = "8080";
  fullBaseUrl = 'http://' + this.ipAddress + ':' + this.portNo + '/GiftMe-war/Resources/Customer';
  baseUrl = "/api/Customer";

  email = "";
  password = "";
  loginCredential = "";
  firstName = "";
  lastName = "";
  mobileNumber = "";

  constructor(public api: Api, public platform: Platform, private httpClient: HttpClient) {
    console.log('Hello UserProvider Provider');
  }

  setLoginCredential(email: string, password: string) {
		this.email = email;
		this.password = password;
		this.loginCredential = "?email=" + email + "&password=" + password;
	}

  getCustomer(email: string, password: string): Observable<any> {
		let path: string = '';
		if(this.platform.is('core') || this.platform.is('mobileweb')) {
			path = this.baseUrl;
		} else {
			path = this.fullBaseUrl;
		}
    console.log(path + "/getCustomer" + "?email=" + email + "&password=" + password);
		return this.httpClient.get<any>(path + "/getCustomer" + "?email=" + email + "&password=" + password).pipe
    (catchError(this.handleError)
		);
	}

  createCustomer(account: any): Observable<any> {
    let path: string = "";
    if (this.platform.is('core') || this.platform.is('mobileweb')) {
      path = this.baseUrl;
    } else {
      path = this.fullBaseUrl;
    }
    let createCustomerReq = {
      'customer': account
    }
    return this.httpClient.put<any>(path, createCustomerReq, httpOptions).pipe (
      catchError(this.handleError)
    );
  }

  updateCustomer(profile: any): Observable<any> {
    let path: string = "";
    if (this.platform.is('core') || this.platform.is('mobileweb')) {
      path = this.baseUrl;
    } else {
      path = this.fullBaseUrl;
    }

    let updateCustomerReq = {
      "firstName": this.firstName,
      "lastName": this.lastName,
      "mobileNum": this.mobileNumber
    };

    return this.httpClient.post<any>(path, updateCustomerReq, httpOptions).pipe (
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
			console.error('An unknown error has occurred:', error.error.message);
		} else {
			console.error(" A HTTP error has occurred: " + `HTTP ${error.status}: ${error.error.message}`);
		}
		return new ErrorObservable(error);
  }

  /**
   * Send a POST request to our login endpoint with the data
   * the user entered on the form.
   */
  login(accountInfo: any) {
    let seq = this.api.post('login', accountInfo).share();

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'success') {
        this._loggedIn(res);
      } else {
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  /**
   * Send a POST request to our signup endpoint with the data
   * the user entered on the form.
   */
  // signup(accountInfo: any) {
  //   let seq = this.api.post('signup', accountInfo).share();
  //
  //   seq.subscribe((res: any) => {
  //     // If the API returned a successful response, mark the user as logged in
  //     if (res.status == 'success') {
  //       this._loggedIn(res);
  //     }
  //   }, err => {
  //     console.error('ERROR', err);
  //   });
  //
  //   return seq;
  // }

  /**
   * Log the user out, which forgets the session
   */
  logout() {
    this._user = null;
  }

  /**
   * Process a login/signup response to store user data
   */
  _loggedIn(resp) {
    this._user = resp.user;
  }
}
