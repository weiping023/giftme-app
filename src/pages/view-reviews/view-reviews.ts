import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ReviewPage } from '../review/review';

import { ReviewProvider } from '../../providers/review/review';

import { Review } from '../../entities/review';

@Component({
  selector: 'page-view-reviews',
  templateUrl: 'view-reviews.html',
})
export class ViewReviewsPage {

  errorMessage: string;
  
  shopId: number;
  reviews: Review[];
  hasReviews: boolean = true;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public reviewProvider: ReviewProvider) 
  {
    this.shopId = this.navParams.get("shopId");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewReviewsPage');

    this.reviewProvider.retrieveAllReviewsByShop(this.shopId).subscribe(
      response => {
        this.reviews = response.reviews
        if (this.reviews.length == 0){
          this.hasReviews = false;
          console.log(this.hasReviews);
        }
        console.log(this.reviews);
        console.log(this.reviews.length);
      },
      error => {
        this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
      }
    );    
  }

  addReview(){
    let shopId = this.shopId;
    this.navCtrl.push(ReviewPage, {
      shopId
    });
  }

}
