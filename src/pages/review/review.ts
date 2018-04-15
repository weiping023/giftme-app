import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController, AlertController } from 'ionic-angular';
import { Review } from '../../providers/review/review';
import {
  NgForm,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";

@Component({
  selector: 'page-review',
  templateUrl: 'review.html',
})
export class ReviewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewPage');
  }
  
  cartTapped(event, page) {
		this.navCtrl.push(ShoppingCartPage, page);
	}
}
