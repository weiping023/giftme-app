import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ShoppingCartPage } from '../shoppingCart/shoppingCart';
import { ProductIndivPage } from '../product-indiv/product-indiv';
import { ReviewPage } from '../review/review';


//Provider
import { ShopProvider } from '../../providers/shop/shop';

import { Shop } from '../../entities/shop';
import { Product } from '../../entities/product';

@Component({
  selector: 'page-shop-indiv',
  templateUrl: 'shop-indiv.html',
})
export class ShopIndivPage {

  errorMessage: string;

  shopId: number;
  shopToView: Shop;
  products: Product;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public shopProvider: ShopProvider) 
  {
    this.shopId = this.navParams.get('shopId');    
    console.log("receivedShopid", this.shopId);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopIndivPage');

    this.shopProvider.retrieveShop(this.shopId).subscribe(
      response => {
        
        this.shopToView = response.shop;        
        this.products = this.shopToView.products;
        console.log(this.shopToView);
        console.log(this.products);
      },
      
      error => {
        this.errorMessage = "HTTP" + error.status + ": " + error.error.message;
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

  buttonTapped(event, page) {
  	this.navCtrl.push(ReviewPage, page);
  }
}
