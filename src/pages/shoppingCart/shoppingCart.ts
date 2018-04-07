import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DeliveryPage } from '../delivery/delivery';

@Component({
  selector: 'page-shopingCart',
  templateUrl: 'shoppingCart.html',
})
export class ShoppingCartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoppingCartPage');
  }

  buttonTapped(event, page) {
  	this.navCtrl.push(DeliveryPage, page);
  }
}