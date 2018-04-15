import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ShoppingCartPage } from '../shoppingCart/shoppingCart';
import { ProductIndivPage } from '../product-indiv/product-indiv';

//Provider
import { ProductProvider } from '../../providers/product/product';

import { Product } from '../../entities/product';

@Component({
  selector: 'page-category-flowers',
  templateUrl: 'category-flowers.html',
})
export class CatFlowersPage {

  errorMessage: string;
	products: Product[];

  constructor(public navCtrl: NavController,
  						public navParams: NavParams,
  						public productProvider: ProductProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryFlowersPage');

    this.productProvider.retrieveAllProducts().subscribe(
			response => {
        this.products = response.products;
        for (var i=0; i <this.products.length;i++){
          if (this.products[i].category != "Flowers"){
            this.products.splice(i,1);
          }
        }
			},
			error => {
				this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
			}
		);
  }

  viewProduct(productId){
    console.log(productId)
    this.navCtrl.push(ProductIndivPage, {
      productId
    });
  }
  
 	cartTapped(event, page) {
		this.navCtrl.push(ShoppingCartPage, page);
	}
}
