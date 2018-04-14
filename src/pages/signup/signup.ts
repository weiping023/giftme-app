import { Component } from '@angular/core';
import { NavController, ToastController, AlertController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { UserProvider } from '../../providers/user/user';
import { HomePage } from '../home/home';
import { ShoppingCartPage } from '../shoppingCart/shoppingCart';
import { Customer } from '../../entities/user';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  submitted: boolean;
  newUser: Customer;
  errorMessage: string;
  // firstName: string;
  // lastName: string;
  // mobileNumber: string;
  // email: string;
  // password: string;


  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController, public userProvider: UserProvider, public alertCtrl: AlertController) {
    this.submitted = false;
    // this.email = "";
    // this.firstName = "";
    // this.lastName = "";
    // this.mobileNumber = "";
    // this.password = "";
    this.newUser = new Customer();
  }

  ionViewDidLoad() {
		console.log('ionViewDidLoad SignupPage');
	}

  signup(signupForm: NgForm) {
    this.submitted = true;
    console.log(this.newUser.email);
    if (signupForm.valid) {
      this.userProvider.createCustomer(this.newUser).subscribe (
        response => {
          sessionStorage.setItem("user", JSON.stringify({"customer": this.newUser}));
          let toast = this.toastCtrl.create({
            message: 'Sign up is Successful!',
            cssClass: 'toast',
            duration: 3000,
          });
          toast.present();
          this.navCtrl.push(HomePage);
        },
        error => {
          console.log(this.newUser.email);
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
