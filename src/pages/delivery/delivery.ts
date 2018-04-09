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
  unitNum: string;
  streetName: string;
  postalCode: string;
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
    if(sessionStorage.getItem("deliveryUpdated") == "true") {
      this.deliveryUpdated = true;
    }
    this.unitNum = sessionStorage.getItem("unitNum");
    this.streetName = sessionStorage.getItem("streetName");
    this.postalCode = sessionStorage.getItem("postalCode");
    this.datetime = sessionStorage.getItem("datetime");
  }

  updateDelivery(deliveryForm: NgForm) {
    this.submitted = true;
    if (deliveryForm.valid) {
      this.deliveryUpdated = true;
      this.unitNum = unitNum;
      this.streetName = streetName;
      this.postalCode = postalCode;
      this.datetime = datetime;
      
      sessionStorage.setItem("unitNum", this.unitNum);
      sessionStorage.setItem("streetName", this.streetName);
      sessionStorage.setItem("postalCode", this.postalCode);
      sessionStorage.setItem("datetime", this.datetime);
      sessionStorage.setItem("deliveryUpdated", "true");

      let toast = this.toastCtrl.create(
        {
          message: 'Delivery Details Confirmed',
          cssClass: 'toast',
          duration: 3000
        });
    } else {
      let alert = this.alertCtrl.create ({
      title: 'Invalid Delivery Details',
      subTitle: '',
      buttons:['OK']
      });
      alert.present();
    }
  }

  buttonTapped(event, page) {
  	this.navCtrl.push(PaymentPage, page);
  }
}
