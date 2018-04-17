import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ShoppingCartPage } from '../shoppingCart/shoppingCart';
import { Customer } from '../../entities/user';
import { Transaction } from '../../entities/transaction';
import { TransactionProvider } from '../../providers/transaction/transaction';

@Component({
  selector: 'page-viewTransactions',
  templateUrl: 'viewTransactions.html',
})
export class ViewTransactionsPage {
  user: Customer;
  transactionsToView: Transaction[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewTransactionsPage');

    //this.
  }

  cartTapped(event, page) {
		this.navCtrl.push(ShoppingCartPage, page);

	}
}
