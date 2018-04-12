import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { ShoppingCartPage } from '../shoppingCart/shoppingCart';
import { ChangePasswordPage } from '../change-password/change-password'

@Component({
	selector: 'page-profile',
	templateUrl: 'profile.html',
})
export class ProfilePage {
	submitted: boolean;
	isUpdated: boolean;
	firstName: string;
	lastName: string;
	mobileNum: string;

	constructor(public navCtrl: NavController,
				public navParams: NavParams,
				public toastCtrl: ToastController,
				public alertCtrl: AlertController) {
		this.submitted = false;
		this.isUpdated = false;
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad ProfilePage');
		if(sessionStorage.getItem("isUpdated") === "true") {
			this.isUpdated = true;
		}
		this.firstName = sessionStorage.getItem("firstName");
		this.firstName = sessionStorage.getItem("lastName");
		this.firstName = sessionStorage.getItem("mobileNum");
	}

	updateProfile(updateProfileForm: NgForm) {
		this.submitted = true;

		if (updateProfileForm.valid) {
			this.isUpdated = true;
			sessionStorage.setItem("firstName", this.firstName);
			sessionStorage.setItem("lastName", this.lastName);
			sessionStorage.setItem("mobileNum");
			sessionStorage.setItem("isUpdated", "true");

			let toast = this.toastCtrl.create(
			{
				message: 'Details Updated',
				cssClass: 'toast',
				duration: 3000
			});
			toast.present();
		} else {
			let alert = this.alertCtrl.create(
			{
				title: 'Invalid profile details',
				subTitle: '',
				buttons: ['OK']
			});
			alert.present();
		}
	}

	cartTapped(event, page) {
		this.navCtrl.push(ShoppingCartPage, page);
	}

	buttonTapped(event, page) {
		this.navCtrl.push(ChangePasswordPage, page);
	}
}
