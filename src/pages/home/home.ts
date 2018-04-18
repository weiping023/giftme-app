import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { AlertController } from 'ionic-angular';
//import { ToastController } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { ShoppingCartPage } from '../shoppingCart/shoppingCart';

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
  

  constructor(public navCtrl: NavController) {
  }

  @ViewChild(Slides) slides: Slides;

  goToSlide(){
  	this.slides.slideTo(2, 500);
  }
  
  cartTapped(event, page) {
		this.navCtrl.push(ShoppingCartPage, page);
	}
}
