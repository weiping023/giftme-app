import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ShoppingCartPage } from '../shoppingCart/shoppingCart';
import { ProductIndivPage } from '../product-indiv/product-indiv';

//Provider
import { ProductProvider } from '../../providers/product/product';

import { Product } from '../../entities/product';

@Component({
  selector: 'page-product-cat',
  templateUrl: 'product-cat.html',
})

export class ProductCatPage {
	
	errorMessage: string;
	products: Product[];

  constructor(public navCtrl: NavController, 
  						public navParams: NavParams,
  						public productProvider: ProductProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductCatPage');

    this.productProvider.retrieveAllProducts().subscribe(
			response => {
				this.products = response.products
			},
			error => {				
				this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
			}
		);
  }

  productClicked(productClicked){
  	this.navCtrl.push(ProductIndivPage, {
  		productId: productClicked.productId;
  	});
  }
 	cartTapped(event, page) {
		this.navCtrl.push(ShoppingCartPage, page);
	}

}
