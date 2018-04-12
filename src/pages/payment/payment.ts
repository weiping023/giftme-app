import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { ConfirmTransactionPage } from '../confirm-transaction/confirm-transaction';

@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  submitted: boolean;
  paid: boolean;
  name: string;
  cardnum: string;
  expirydate: string;
  cvcnum: string;
  unitnum: string;
  streetname: string;
  postalcode: string;
  promocode: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public toastCtrl: ToastController) {
    this.submitted = false;
    this.paid = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
    if (sessionStorage.getItem("paid") == "true") {
      this.paid = true;
    }
    this.name = sessionStorage.getItem("name");
    this.cardnum = sessionStorage.getItem("cardnum");
    this.expirydate = sessionStorage.getItem("expirydate");
    this.cvcnum = sessionStorage.getItem("cvcnum");
    this.unitnum = sessionStorage.getItem("unitnum");
    this.streetname = sessionStorage.getItem("streetname");
    this.postalcode = sessionStorage.getItem("postalcode");
  }

  updatePayment(paymentForm: NgForm) {
    this.submitted = true;
    if (paymentForm.valid) {
      if (this.name != null || this.cardnum != null || this.expirydate != null || this.cvcnum != null || this.unitnum != null || this.streetname != null || this.postalcode != null) {
        this.paid = true;
        sessionStorage.setItem("name", this.name);
        sessionStorage.setItem("cardnum", this.cardnum);
        sessionStorage.setItem("expirydate", this.expirydate);
        sessionStorage.setItem("cvcnum", this.cvcnum);
        sessionStorage.setItem("unitnum", this.unitnum);
        sessionStorage.setItem("streetname", this.streetname);
        sessionStorage.setItem("postalcode", this.postalcode);

        this.name = sessionStorage.getItem("name");
        this.cardnum = sessionStorage.getItem("cardnum");
        this.expirydate = sessionStorage.getItem("expirydate");
        this.cvcnum = sessionStorage.getItem("cvcnum");
        this.unitnum = sessionStorage.getItem("unitnum");
        this.streetname = sessionStorage.getItem("streetname");
        this.postalcode = sessionStorage.getItem("postalcode");

        if (this.promocode != null) {
          sessionStorage.setItem("promocode", this.promocode);
          this.promocode = sessionStorage.getItem("promocode");
        }

        let toast = this.toastCtrl.create(
				{
					message: 'Payment Details Confirmed',
					cssClass: 'toast',
					duration: 3000
				});
				toast.present();
      } else {
        let alert = this.alertCtrl.create ({
          title: 'Invalid Payment Details',
          subTitle: '',
          buttons:['OK']
        });
        alert.present();
      }
    } else {
    }
  }

  buttonTapped(event, page) {
  	this.navCtrl.push(ConfirmTransactionPage, page);
  }

}
