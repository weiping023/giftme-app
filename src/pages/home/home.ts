import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
//import { AlertController } from 'ionic-angular';
//import { ToastController } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { ShoppingCartPage } from '../shoppingCart/shoppingCart';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  shopPath1= "../assets/img/shops/angelflorist1.jpg" 
  shopPath2= "../assets/img/shops/teddylodge.jpg" 
  shopPath3= "../assets/img/shops/fionatreadwell.jpg" 
  shopPath4= "../assets/img/shops/flowergarage.jpg"
  productPath1= "../assets/img/products/CON005.jpg" 
  productPath2= "../assets/img/products/CON006.jpg" 
  productPath3= "../assets/img/products/FLR001.jpg" 
  productPath4= "../assets/img/products/PSH006.jpg" 
  

  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController) {
  }

  @ViewChild(Slides) slides: Slides;

  goToSlide(){
  	this.slides.slideTo(2, 500);
  }
  
  cartTapped(event, page) {
    if (sessionStorage.getItem("Cart")=== null) {
      this.navCtrl.push(LoginPage);
      let toast = this.toastCtrl.create({
        message: 'Error: Please Login to view Cart',
        cssClass: 'toast',
        duration: 3000
      });
      toast.present();
    } else {
    this.navCtrl.push(ShoppingCartPage, page);
    }
	}
}
