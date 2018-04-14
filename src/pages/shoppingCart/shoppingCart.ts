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

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {
    this.isLogin=false;
    this.products = [];
    this.subtotal = 0;
    this.promoCode = "";
    this.discount = 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoppingCartPage');
    
    if (sessionStorage.getItem("Login") === null){
      this.navCtrl.push(LoginPage);
    }
    
    if (sessionStorage.getItem("Cart") != null) {
        this.cartExists = true;
        
        let sessionStorageItems = JSON.parse(sessionStorage.getItem("Cart"));
        console.log(sessionStorageItems);

        for (var i = 0; i < sessionStorageItems.length; i++){
          let currentItem = sessionStorageItems[i];
          
        }
    }
  }


  buttonTapped(event, page) {
  	this.navCtrl.push(DeliveryPage, page);
  }
}