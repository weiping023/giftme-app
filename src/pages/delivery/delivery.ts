import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';

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

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public toastCtrl: ToastController) {
    this.submitted = false;
    this.deliveryUpdated = false;
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

  buttonTapped(event, page) {
  	this.navCtrl.push(PaymentPage, page);
  }
}
