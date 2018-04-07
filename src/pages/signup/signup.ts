import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';

import { User } from '../../providers/user/user';
import { HomePage } from '../home/home';
import { ShoppingCartPage } from '../shoppingCart/shoppingCart';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  submitted: boolean;


  // The account fields for the signup form.  
  account: { firstname: string, lastname: string, email: string, password: string, phoneNum: string } = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    phoneNum: '',    
  };

  // Our text strings
  private signupErrorString: string;

  constructor(public navCtrl: NavController,
              public user: User,
              public toastCtrl: ToastController) 
  {    
    this.submitted = false;
  }

  signup(signupForm: NgForm) {

    this.submitted = true;   
    
    if (signupForm.valid) {
      
      //need to push to backend!

      let toast = this.toastCtrl.create({
        message: 'Sign up is Successful!',
        cssClass: 'toast',
        duration: 3000,
      });
      toast.present();        

      // Attempt to signup in through our User service
      this.user.signup(this.account).subscribe((resp) => {
        console.log('signup worked')
        this.navCtrl.push(HomePage);
      }, (err) => {

        this.navCtrl.push(HomePage);

        // Unable to sign up
        let toast = this.toastCtrl.create({
          message: this.signupErrorString,
          duration: 3000,
          position: 'top'
        });
        toast.present();
      });
    }
  }
}
