import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ShoppingCartPage } from '../shoppingCart/shoppingCart';

@IonicPage()
@Component({
  selector: 'page-product-indiv',
  templateUrl: 'product-indiv.html',
})
export class ProductIndivPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductIndivPage');
  }

  cartTapped(event, page) {
  	this.navCtrl.push(ShoppingCartPage, page);
  }

}
