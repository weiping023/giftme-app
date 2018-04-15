import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/share';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Api } from '../api/api';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Platform } from 'ionic-angular';
import { Review } from '../../entities/review';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ReviewProvider {
  ipAddress = '192.168.170.1';
  portNo = "8080";
  fullBaseUrl = 'http://' + this.ipAddress + ':' + this.portNo + '/GiftMe-war/Resources/Customer';
  baseUrl = "/api/Customer";

  constructor(public api: Api, public platform: Platform, private httpClient: HttpClient) {
    console.log('Hello UserProvider Provider');
  }

  createReview(newReview: Review): Observable<any> {
    let path: string = "";
    if (this.platform.is('core') || this.platform.is('mobileweb')) {
      path = this.baseUrl;
    } else {
      path = this.fullBaseUrl;
    }
    let createReviewReq = {
      "review": newReview
    }
    console.log(path);
    console.log(createReviewReq);
    return this.httpClient.put<any>(path, createReviewReq, httpOptions).pipe (
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
