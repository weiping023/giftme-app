import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {
	
	submitted: boolean;
	isLogin: boolean;
	firstName: string;
	lastName: string;
	username: string;
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
		this.username = "";
		this.password = "";
	}

	login(loginForm: NgForm)
	{
		this.submitted = true;
		
		if (loginForm.valid) 
		{
			if((this.username == "admin") && (this.password == "password"))
			{				
				if(this.username == "admin")
				{
					this.firstName = "Admin";			
				}				
				
				this.lastName = "Default";
				this.isLogin = true;
				
				sessionStorage.setItem("firstName", this.firstName);
				sessionStorage.setItem("lastName", this.lastName);				
				sessionStorage.setItem("isLogin", "true");
				
				//this.productProvider.setLoginCredential(this.username, this.password);
				
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
		//this.navCtrl.popToRoot(); need to figure out how to redirect to homepage directly

		let toast = this.toastCtrl.create(
		{
			message: 'Logout Successful.',
			cssClass: 'toast',
			duration: 3000
		});
		
		toast.present();
	}	
}
