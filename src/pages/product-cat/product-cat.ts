import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ShoppingCartPage } from '../shoppingCart/shoppingCart';

@Component({
  selector: 'page-product-cat',
  templateUrl: 'product-cat.html',
})
export class ProductCatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductCatPage');
  }

 	cartTapped(event, page) {
		this.navCtrl.push(ShoppingCartPage, page);
	}

}
