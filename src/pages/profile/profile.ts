import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController, AlertController } from 'ionic-angular';
import { ShoppingCartPage } from '../shoppingCart/shoppingCart';
import { ChangePasswordPage } from '../change-password/change-password';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { UserProvider } from '../../providers/user/user';
import { Customer } from '../../entities/user';
import {
  NgForm,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";

@Component({
	selector: 'page-profile',
	templateUrl: 'profile.html',
})
export class ProfilePage implements OnInit{
	submitted: boolean;
	user: Customer;
	isLogin: boolean;
	isUpdated: boolean;
	email: string;
	password: string;
	currFirstName: string;
	currLastName: string;
	currMobileNumber: string;
	updateProfile: FormGroup;
	updateProfileErrorMessage: string;

	constructor(public navCtrl: NavController,
				public navParams: NavParams,
				public toastCtrl: ToastController,
				public alertCtrl: AlertController, public userProvider: UserProvider, public frmBuilder: FormBuilder) {
		this.submitted = false;
		this.isUpdated = false;
		this.currFirstName = "";
		this.currLastName = "";
		this.currMobileNumber = "";

		this.updateProfile = this.frmBuilder.group({
			firstName: ["", Validators.compose([Validators.maxLength(50), Validators.minLength(3)])],
			lastName: ["", Validators.compose([Validators.maxLength(50), Validators.minLength(3)])],
			mobileNumber: [
				"",
				[Validators.minLength(8), Validators.maxLength(8)]
			]
		});
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad ProfilePage');
	}

	get firstName() {
		return this.updateProfile.get("firstName");
	}
	get lastName() {
		return this.updateProfile.get("lastName");
	}
	get mobileNumber() {
		return this.updateProfile.get("mobileNumber");
	}

	ngOnInit() {
		if (sessionStorage.getItem("isLogin") !== null) {
			this.isLogin = true;
			this.user = JSON.parse(sessionStorage.getItem("user")).customer;

			this.currFirstName = this.user.firstName;
			this.currLastName = this.user.lastName;
			this.currMobileNumber = this.user.mobileNumber;
			console.log(this.user);

			this.updateProfile = this.frmBuilder.group({
        firstName: ["", Validators.compose([Validators.maxLength(50), Validators.minLength(3)])],
        lastName: ["", Validators.compose([Validators.maxLength(50), Validators.minLength(3)])],
        mobileNumber: [
          "",
          [Validators.minLength(8), Validators.maxLength(8)]
        ]
      });
			this.updateProfileErrorMessage = "";

			console.log(this.updateProfile.value.firstName);
			console.log(this.user.firstName);
		} else {
			this.navCtrl.push(LoginPage);
		}
	}

	update() {
		this.submitted = true;
		console.log(this.email);
		if (this.updateProfile.valid) {
			this.isUpdated = true;

			// if (this.updateProfile.value.firstName !== null) {
			// 	this.user.firstName = this.updateProfile.value.firstName;
			// }
			// if (this.updateProfile.value.lastName !== null) {
			// 	this.user.lastName = this.updateProfile.value.lastName;
			// }
			// if (this.updateProfile.value.mobileNumber !== null) {
			// 	this.user.mobileNumber = this.updateProfile.value.mobileNumber;
			// }
      //
			// console.log("updated " + this.updateProfile.value.firstName);
			// console.log("updated " + this.user.firstName);
			this.userProvider.updateCustomer(this.user).subscribe(
				response => {
					let toast = this.toastCtrl.create(
					{
						message: 'Details Updated',
						cssClass: 'toast',
						duration: 3000
					});
					toast.present();

					sessionStorage.setItem("user", JSON.stringify({"customer": this.user}));
				},
				error => {
					//this.errorMessage = "HTTP " + error.status + ":" + error.error.message;
					let alert = this.alertCtrl.create(
					{
						title: 'Profile',
						subTitle: 'Invalid profile details',
						buttons: ['OK']
					});
					alert.present();
					this.navCtrl.push(HomePage);
				}
			);
		}
	}

	cartTapped(event, page) {
		this.navCtrl.push(ShoppingCartPage, page);
	}

	buttonTapped(event, page) {
		this.navCtrl.push(ChangePasswordPage, page);
	}

	homeTapped(event, page) {
    this.navCtrl.push(HomePage, page);
  }
}
