import { Component } from '@angular/core';
import { NavController, ToastController, AlertController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { UserProvider } from '../../providers/user/user';
import { HomePage } from '../home/home';
import { ShoppingCartPage } from '../shoppingCart/shoppingCart';
import { User } from '../../entities/user';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  submitted: boolean;
  user: User;
  firstName: string;
  lastName: string;
  mobileNumber: string;
  email: string;
  password: string;

  account: { email: string, firstName: string, lastName: string, mobileNumber: string,  password: string } = {
    email: '',
    firstName: '',
    lastName: '',
    mobileNumber: '',
    password: ''
  };

  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController, public userProvider: UserProvider, public alertCtrl: AlertController) {
    this.submitted = false;
    this.email = "";
    this.firstName = "";
    this.lastName = "";
    this.mobileNumber = "";
    this.password = "";
  }

  signup(signupForm: NgForm) {
    this.submitted = true;
    if (signupForm.valid) {
      this.userProvider.createCustomer(this.account).subscribe (
        response => {
          sessionStorage.setItem("user", JSON.stringify({"customer": this.user}));
          let toast = this.toastCtrl.create({
            message: 'Sign up is Successful!',
            cssClass: 'toast',
            duration: 3000,
          });
          toast.present();
          this.navCtrl.push(HomePage);
        },
        error => {
          let alert = this.alertCtrl.create(
    			{
    				title: 'Register',
    				subTitle: 'Invalid details',
    				buttons: ['OK']
    			});
    			alert.present();
        }
      )
    }
  }
}
