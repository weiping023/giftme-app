import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-confirm-transaction',
  templateUrl: 'confirm-transaction.html',
})
export class ConfirmTransactionPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmTransactionPage');

    let toast = this.toastCtrl.create(
    {
      message: 'This thing works',
      cssClass: 'toast',
      duration: 3000
    });
    toast.present();
  }

}
