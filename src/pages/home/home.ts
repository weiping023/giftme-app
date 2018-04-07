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
