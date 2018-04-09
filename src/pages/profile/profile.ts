import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { ShoppingCartPage } from '../shoppingCart/shoppingCart';

@Component({
	selector: 'page-profile',
	templateUrl: 'profile.html',
})
export class ProfilePage {
	
	submitted: boolean;
	isUpdated: boolean;
	firstName: string;
	lastName: string;
	password: string;

	constructor(public navCtrl: NavController, 
				public navParams: NavParams, 
				public toastCtrl: ToastController, 
				public alertCtrl: AlertController) {
		this.submitted = false;
		this.isUpdated = false;
	}

	cartTapped(event, page) {
		this.navCtrl.push(ShoppingCartPage, page);
	}

	ionViewDidLoad() {
    	console.log('ionViewDidLoad ProfilePage');
    	if(sessionStorage.getItem("isUpdated") === "true") {
			this.isUpdated = true;
		}
	}

	updateProfile(updateProfileForm: NgForm) {
		this.submitted = true;
		
		if (updateProfileForm.valid) {
			this.isUpdated = true;
			sessionStorage.setItem("firstName", this.firstName);
			sessionStorage.setItem("lastName", this.lastName);
			sessionStorage.setItem("password", this.password);				
			sessionStorage.setItem("isUpdated", "true");
			
			let toast = this.toastCtrl.create(
			{
				message: 'Details updated successfully',
				cssClass: 'toast',
				duration: 3000
			});
			toast.present();
		} else {
			let alert = this.alertCtrl.create(
			{
				title: 'Profile',
				subTitle: 'Invalid profile details',
				buttons: ['OK']
			});		
			alert.present();
		}
	}
}
