import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { ShoppingCartPage } from '../shoppingCart/shoppingCart';
import { NgForm } from '@angular/forms';

//Provider
import { ProductProvider } from '../../providers/product/product';

import { Product } from '../../entities/product';

@IonicPage()
@Component({
  selector: 'page-product-indiv',
  templateUrl: 'product-indiv.html',
})
export class ProductIndivPage {

  errorMessage: string;
  product: Product;
  submitted: boolean;  

  cart: { quantity: number } = {
    quantity: 0
  };

  private addToCartErrorMessage: string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public productProvider: ProductProvider,
              public toastCtrl: ToastController) 
  {
    this.submitted = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductIndivPage');
    this.productProvider.retrieveProduct(1).subscribe(
      response => {
        this.product = response.product
      },
      error => {
        this.errorMessage = "HTTP" + error.status + ": " + error.error.message;
      }
    );
  }

  addToCart(addToCartForm: NgForm){

    this.submitted = true;
    
    if (addToCartForm.valid){
      let toast = this.toastCtrl.create({
        message: 'Add to Cart Successful!',
        cssClass: 'toast',
        duration: 3000,
      });
      toast.present();        

      // Session storage to keep this must implement
      // need to pass in skuCode to cart/ from form      
    }
  }

  cartTapped(event, page) {
  	this.navCtrl.push(ShoppingCartPage, page);
  }

}
