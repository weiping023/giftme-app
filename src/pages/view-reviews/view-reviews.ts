import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ReviewPage } from '../review/review';

import { ReviewProvider } from '../../providers/review/review';

@Component({
  selector: 'page-view-reviews',
  templateUrl: 'view-reviews.html',
})
export class ViewReviewsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewReviewsPage');
  }

}
