import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController, AlertController } from 'ionic-angular';
import { ReviewProvider } from '../../providers/review/review';
import { Review } from '../../entities/review';
import { ShoppingCartPage } from '../shoppingCart/shoppingCart';
// import {
//   NgForm,
//   FormGroup,
//   FormBuilder,
//   Validators
// } from "@angular/forms";

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

  // get comment() {
  //   return this.commentForm.get("comment");
  //  }
  //
  //  get rating() {
  //    return this.commentForm.get("rating");
  //  }
  //
  //  get title() {
  //    return this.commentForm.get("title");
  //  }
  //
  //  get customerName() {
  //    return this.commentForm.get("customerName");
  //  }
  //
  //
  // ngOnInit() {
  //   this.commentForm = this.frmBuilder.group({
  //     comment: ["", [Validators.required]],
  //     rating: ["", Validators.required],
  //     title: ["", Validators.required],
  //     customerName: [""]
  //   });
  // }

  cartTapped(event, page) {
		this.navCtrl.push(ShoppingCartPage, page);
	}
}
