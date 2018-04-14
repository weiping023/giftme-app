import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DeliveryPage } from '../delivery/delivery';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-shopingCart',
  templateUrl: 'shoppingCart.html',
})
export class ShoppingCartPage {

  isLogin: boolean;
  cartExists: boolean;
  products: any[] = [];
  subtotal: number;
  promoCode: string;
  discount: number;
  deliveryFee: number;
  total: number;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {
    this.isLogin=false;
    this.products = [];
    this.subtotal = 0;
    this.promoCode = "";
    this.discount = 0;
    this.deliveryFee = 10;
    this.total = 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoppingCartPage');
    
    if (sessionStorage.getItem("isLogin") === null){
      this.navCtrl.push(LoginPage);
    } else {
      if (sessionStorage.getItem("Cart") != null) {
          this.cartExists = true;
          
          let sessionStorageItems = JSON.parse(sessionStorage.getItem("Cart"));
          console.log(sessionStorageItems);

          for (var i = 0; i < sessionStorageItems.length; i++){
            let currentItem = sessionStorageItems[i];
            this.products.push(currentItem);
          }
          console.log("Product", this.products[0]); 
          
          this.calculateSubtotal();
          this.calculateTotal();
      }
    }
  }

  calculateSubtotal(){

    let subtotal = 0;

    for (var i=0; i< this.products.length; i++){
      let currentProduct = this.products[i];

      console.log(currentProduct);      
      subtotal += currentProduct.product.price * currentProduct.quantityInCart;

      this.subtotal = subtotal;

      if (subtotal >= 40){
        this.deliveryFee = 0;
      }
    }
    
  }
  
  calculateTotal(){
    this.total = this.subtotal + this.deliveryFee;
  }

  buttonTapped(event, page) {
  	this.navCtrl.push(DeliveryPage, page);
  }
}