import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AlertController, ToastController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { UserProvider } from '../../providers/user/user';
import { User } from '../../entities/user';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

	submitted: boolean;
	isLogin: boolean;
	email: string;
	password: string;
  user: User;
  loginCredential: string;

	constructor(public navCtrl: NavController,
  				public alertCtrl: AlertController,
  				public navParams: NavParams,
  				public toastCtrl: ToastController, public userProvider: UserProvider)
	{
	  this.submitted = false;
		this.isLogin = false;
    this.loginCredential = "";
 	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad LoginPage');

	  if(sessionStorage.getItem("isLogin") === "true") {
			this.isLogin = true;
		}
	}

	login(loginForm: NgForm) {
		this.submitted = true;
    //try to get customer if valid and catch any error
    console.log(this.email, this.password);
    if (loginForm.valid) {
      this.userProvider.getCustomer(this.email, this.password).subscribe (
        response => {
          this.user = response.customer;
          sessionStorage.setItem("user", JSON.stringify({"customer": this.user}));
          this.isLogin = true;
          sessionStorage.setItem("isLogin", "true");

          let toast = this.toastCtrl.create({
  					message: 'Log in Successful. Welcome back',
  					cssClass: 'toast',
  					duration: 3000
  				});
  				toast.present();
        },
        error => {
          let alert = this.alertCtrl.create(
    			{
    				title: 'Login',
    				subTitle: 'Invalid login details',
    				buttons: ['OK']
    			});
    			alert.present();
        }
      )
    }
	}

	logout(){
		console.log("Logout");
		sessionStorage.setItem("isLogin", "false");
		this.navCtrl.setRoot(HomePage);

		let toast = this.toastCtrl.create(
		{
			message: 'Logout Successful.',
			cssClass: 'toast',
			duration: 3000
		});

		toast.present();
	}

	register(event, page){
		this.navCtrl.push(SignupPage, page);
	}
}
