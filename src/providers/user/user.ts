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
  ipAddress = '172.25.107.169';
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

  updateCustomer(email: string, firstName: string, lastName: string, mobileNumber: string, password: string): Observable<any> {
    let path: string = "";
    if (this.platform.is('core') || this.platform.is('mobileweb')) {
      path = this.baseUrl;
    } else {
      path = this.fullBaseUrl;
    }

    let updateCustomerReq = {
      "email": ""
    }

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
