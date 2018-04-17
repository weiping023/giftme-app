import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/share';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Api } from '../api/api';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Platform } from 'ionic-angular';
import { Transaction } from '../../entities/transaction';
import { RemoteCheckoutLineItem } from '../../entities/remoteCheckoutLineItem';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TransactionProvider {
  ipAddress = '172.25.105.206';
  portNo = "8080";
  fullBaseUrl = 'http://' + this.ipAddress + ':' + this.portNo + '/GiftMe-war/Resources/Transaction';
  baseUrl = "/api/Transaction";

  constructor(public api: Api, public platform: Platform, private httpClient: HttpClient) {
    console.log('Hello TransactionProvider Provider');
  }

  remoteCheckout(promoCode: string, email: string, customerAddress: string, shopAddress: string, remoteCheckoutLineItems: RemoteCheckoutLineItem[]): Observable<any> {
    let path: string = "";
    if (this.platform.is('core') || this.platform.is('mobileweb')) {
      path = this.baseUrl;
    } else {
      path = this.fullBaseUrl;
    }
    let remoteCheckoutReq = {
      "promoCode": promoCode,
      "email": email,
      "customerAddress": customerAddress,
      "shopAddress": shopAddress,
      "remoteCheckoutLineItems": remoteCheckoutLineItems
    }
    console.log(path);
    console.log(remoteCheckoutReq);
    return this.httpClient.put<any>(path, remoteCheckoutReq, httpOptions).pipe (
      catchError(this.handleError)
    );
  }

  retrieveAllTransactionsByEmail(email: string): Observable<any> {
    let path: string = "";
    if (this.platform.is('core') || this.platform.is('mobileweb')) {
      path = this.baseUrl;
    } else {
      path = this.fullBaseUrl;
    }
    return this.httpClient.post<any>(path + "//retrieveAllTransactionsByEmail/?email=", httpOptions).pipe (
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
}
