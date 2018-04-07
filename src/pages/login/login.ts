import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {
	
	submitted: boolean;
	isLogin: boolean;
	firstName: string;
	lastName: string;
	email: string;
	password: string;

	constructor(public navCtrl: NavController, 		
  				public alertCtrl: AlertController,
  				public navParams: NavParams,
  				public toastCtrl: ToastController) 
	{
	  this.submitted = false;
		this.isLogin = false;		
 	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad LoginPage');

	    if(sessionStorage.getItem("isLogin") === "true")
		{
			this.isLogin = true;
		}
			
		this.firstName = sessionStorage.getItem("firstName")
		this.lastName = sessionStorage.getItem("lastName")
	}

  	clear()
	{
		this.email = "";
		this.password = "";
	}

	login(loginForm: NgForm)
	{
		this.submitted = true;		
		if (loginForm.valid) 
		{
			if((this.email == "giftmeadmin@gmail.com") && (this.password == "password"))
			{				
				if(this.email == "giftmeadmin@gmail.com")
				{
					this.firstName = "Admin";			
				}				
				
				this.lastName = "Default";
				this.isLogin = true;
				
				sessionStorage.setItem("firstName", this.firstName);
				sessionStorage.setItem("lastName", this.lastName);				
				sessionStorage.setItem("isLogin", "true");
				
				//this.productProvider.setLoginCredential(this.email, this.password);
				
				let toast = this.toastCtrl.create(
				{
					message: 'Log in Successful. Welcome back ' + this.firstName + ' ' + this.lastName,
					cssClass: 'toast',
					duration: 3000
				});
				
				toast.present();
			}
			else
			{
				let alert = this.alertCtrl.create(
				{
					title: 'Login',
					subTitle: 'Invalid login credential',
					buttons: ['OK']
				});
				
				alert.present();			
			}
		}
		else
		{
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

	register(){				
		let toast = this.toastCtrl.create(
		{
			message: 'Redirect to Signup.',
			cssClass: 'toast',
			duration: 3000
		});	
		this.navCtrl.push(SignupPage);
	}	
}
