import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ConfirmTransactionPage } from '../confirm-transaction/confirm-transaction';

@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }

  buttonTapped(event, page) {
  	this.navCtrl.push(ConfirmTransactionPage, page);
  }

}
