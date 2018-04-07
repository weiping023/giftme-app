import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ShoppingCartPage } from '../shoppingCart/shoppingCart';

@Component({
  selector: 'page-shop-indiv',
  templateUrl: 'shop-indiv.html',
})
export class ShopIndivPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopIndivPage');
  }

  cartTapped(event, page) {
  	this.navCtrl.push(ShoppingCartPage, page);
  }
}