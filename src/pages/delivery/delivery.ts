import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { ConfirmTransactionPage } from '../confirm-transaction/confirm-transaction';

@Component({
  selector: 'page-delivery',
  templateUrl: 'delivery.html',
})
export class DeliveryPage {
  submitted: boolean;
  deliveryUpdated: boolean;
  unitnum: string;
  streetname: string;
  postalcode: string;
  datetime: string;

  submittedPay: boolean;
  paid: boolean;
  name: string;
  cardnum: string;
  expirydate: string;
  cvcnum: string;
  unitnumPay: string;
  streetnamePay: string;
  postalcodePay: string;

  constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public alertCtrl: AlertController,
        public toastCtrl: ToastController) {
    this.submitted = false;
    this.submittedPay = false;
    this.deliveryUpdated = false;
    this.paid = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeliveryPage');
    if (sessionStorage.getItem("deliveryUpdated") == "true") {
      this.deliveryUpdated = true;
    }
    this.unitnum = sessionStorage.getItem("unitnum");
    this.streetname = sessionStorage.getItem("streetname");
    this.postalcode = sessionStorage.getItem("postalcode");
    this.datetime = sessionStorage.getItem("datetime");
  }

  updateDelivery(deliveryForm: NgForm) {
    this.submitted = true;
    if (deliveryForm.valid) {
      if (this.unitnum != null || this.streetname != null || this.postalcode != null || this.datetime != null) {
        this.deliveryUpdated = true;
        sessionStorage.setItem("unitnum", this.unitnum);
        sessionStorage.setItem("streetname", this.streetname);
        sessionStorage.setItem("postalcode", this.postalcode);
        sessionStorage.setItem("datetime", this.datetime);
        sessionStorage.setItem("deliveryUpdated", "true");

        this.unitnum = sessionStorage.getItem("unitnum");
        this.streetname = sessionStorage.getItem("streetname");
        this.postalcode = sessionStorage.getItem("postalcode");
        this.datetime = sessionStorage.getItem("datetime");

        let toast = this.toastCtrl.create(
				{
					message: 'Delivery Details Confirmed',
					cssClass: 'toast',
					duration: 3000
				});
				toast.present();
      } else {
        let alert = this.alertCtrl.create ({
          title: 'Invalid Delivery Details',
          subTitle: '',
          buttons:['OK']
        });
        alert.present();
      }
    } else {
    }
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
        sessionStorage.setItem("unitnumPay", this.unitnumPay);
        sessionStorage.setItem("streetnamePay", this.streetnamePay);
        sessionStorage.setItem("postalcodePay", this.postalcodePay);

        this.name = sessionStorage.getItem("name");
        this.cardnum = sessionStorage.getItem("cardnum");
        this.expirydate = sessionStorage.getItem("expirydate");
        this.cvcnum = sessionStorage.getItem("cvcnum");
        this.unitnumPay = sessionStorage.getItem("unitnumPay");
        this.streetnamePay = sessionStorage.getItem("streetnamePay");
        this.postalcodePay = sessionStorage.getItem("postalcodePay");

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
