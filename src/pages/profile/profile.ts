import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { ShoppingCartPage } from '../shoppingCart/shoppingCart';

@Component({
	selector: 'page-profile',
	templateUrl: 'profile.html',
})
export class ProfilePage {
	
	submitted: boolean;
	firstName: String;
	lastName: String;
	password: String;

	constructor(public navCtrl: NavController, 
				public navParams: NavParams, 
				public toastCtrl: ToastController) {
		this.submitted = false;
	}

	cartTapped(event, page) {
		this.navCtrl.push(ShoppingCartPage, page);
	}

	ionViewDidLoad() {
    	console.log('ionViewDidLoad ProfilePage');
	}

	updateProfile(updateProfileForm: NgForm) {
		this.submitted = true;
		let toast = this.toastCtrl.create(
		{
			message: 'Details updated successfully',
			cssClass: 'toast',
			duration: 3000
		});
		toast.present();
	}
}
