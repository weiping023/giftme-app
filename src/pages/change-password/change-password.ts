import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { NgForm } from '@angular/forms';

@IonicPage()
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

  changePassword(changePassswordForm: NgForm) {
    this.submitted = true;
    if (changePasswordForm.valid) {
      if (currentPassword != newPassword && newPassword == verifyPassword) {
        this.pwUpdated = true;
      }
    } else {
    }
  }

}
