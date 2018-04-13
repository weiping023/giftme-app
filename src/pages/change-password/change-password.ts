import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html',
})
export class ChangePasswordPage {
  submitted: boolean;
  pwUpdated: boolean;
  currentPassword: string;
  newPassword: string;
  verifyPassword: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController) {
      this.submitted = false;
      this.pwUpdated = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangePasswordPage');
    if(sessionStorage.getItem("pwUpdated") == "true") {
      this.pwUpdated = true;
    }
    this.currentPassword = sessionStorage.getItem("currentPassword");
		this.newPassword = sessionStorage.getItem("newPassword");
		this.verifyPassword = sessionStorage.getItem("verifyPassword");
  }

  changePassword(changePasswordForm: NgForm) {
    this.submitted = true;
    if (changePasswordForm.valid) {
      if (this.currentPassword != this.newPassword) {
        if (this.newPassword == this.verifyPassword) {
          this.pwUpdated = true;
          sessionStorage.setItem("currentPassword", this.currentPassword);
          sessionStorage.setItem("newPassword", this.newPassword);
          sessionStorage.setItem("verifyPassword", this.verifyPassword);

          let toast = this.toastCtrl.create(
    			{
    				message: 'Password Updated',
    				cssClass: 'toast',
    				duration: 3000
    			});
    			toast.present();
        } else {
          let alert = this.alertCtrl.create(
    			{
    				title: 'Passwords do not match',
    				subTitle: '',
            cssClass:'buttonCss',
    				buttons: ['OK']
    			});
    			alert.present();
        }
      } else {
        let alert = this.alertCtrl.create(
        {
          title: 'Incorrect current password',
          subTitle: '',
          cssClass:'buttonCss',
          buttons: ['OK']
        });
        alert.present();
      }
    } else {
    }
  }

  buttonTapped(event, page) {
    this.navCtrl.push(HomePage, page);
  }
}
