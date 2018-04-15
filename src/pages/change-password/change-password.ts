import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UserProvider } from '../../providers/user/user';
import { Customer } from '../../entities/user';
import {
  NgForm,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";

@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html',
})
export class ChangePasswordPage {
  submitted: boolean;
  pwUpdated: boolean;
  currentPassword: string;
  updatePassword: FormGroup;
  user: Customer;

  constructor(public navCtrl: NavController, public userProvider: UserProvider,
    public navParams: NavParams, public toastCtrl: ToastController,
    public alertCtrl: AlertController,  public frmBuilder: FormBuilder) {
      this.submitted = false;
      this.pwUpdated = false;
      this.currentPassword = "";

      this.updatePassword = this.frmBuilder.group({
  			inputCurrPassword: ["", Validators.compose([Validators.maxLength(32), Validators.minLength(4)])],
  			password: ["", Validators.compose([Validators.maxLength(32), Validators.minLength(4)])],
  			verify: ["", Validators.compose([Validators.maxLength(32), Validators.minLength(4)])]
  		});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangePasswordPage');
  }

  get inputCurrPassword() {
		return this.updatePassword.get("inputCurrPassword");
	}
	get password() {
		return this.updatePassword.get("password");
	}
	get verify() {
		return this.updatePassword.get("verify");
	}

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem("user")).customer;

    this.currentPassword = this.user.password;
    console.log(this.user);
    console.log(this.user.password);

    this.updatePassword = this.frmBuilder.group({
      inputCurrPassword: ["", Validators.compose([Validators.maxLength(32), Validators.minLength(4)])],
      password: ["", Validators.compose([Validators.maxLength(32), Validators.minLength(4)])],
      verify: ["", Validators.compose([Validators.maxLength(32), Validators.minLength(4)])]
    });
	}

  changePassword() {
    this.submitted = true;
    delete this.updatePassword["inputCurrPassword"];

    if (this.updatePassword.valid) {
      this.pwUpdated = true;
      this.user.password = this.updatePassword.value.password;
      this.userProvider.updateCustomerPassword(this.user).subscribe(
        response => {
          let toast = this.toastCtrl.create(
					{
						message: 'Password Updated',
						cssClass: 'toast',
						duration: 3000
					});
					toast.present();
          sessionStorage.setItem("user", JSON.stringify({"customer": this.user}));
        },
        error => {
          let alert = this.alertCtrl.create(
					{
						title: 'Password',
						subTitle: 'Invalid password change',
						buttons: ['OK']
					});
					alert.present();
        }
      )
    }
    // if (this.updatePassword.valid) {
    //   if (this.currentPassword != this.newPassword) {
    //     if (this.newPassword == this.verifyPassword) {
    //       this.pwUpdated = true;
    //       sessionStorage.setItem("currentPassword", this.currentPassword);
    //       sessionStorage.setItem("newPassword", this.newPassword);
    //       sessionStorage.setItem("verifyPassword", this.verifyPassword);
    //
    //       let toast = this.toastCtrl.create(
    // 			{
    // 				message: 'Password Updated',
    // 				cssClass: 'toast',
    // 				duration: 3000
    // 			});
    // 			toast.present();
    //     } else {
    //       let alert = this.alertCtrl.create(
    // 			{
    // 				title: 'Passwords do not match',
    // 				subTitle: '',
    //         cssClass:'buttonCss',
    // 				buttons: ['OK']
    // 			});
    // 			alert.present();
    //     }
    //   } else {
    //     let alert = this.alertCtrl.create(
    //     {
    //       title: 'Incorrect current password',
    //       subTitle: '',
    //       cssClass:'buttonCss',
    //       buttons: ['OK']
    //     });
    //     alert.present();
    //   }
    // } else {
    // }
  }

  homeTapped(event, page) {
    this.navCtrl.push(HomePage, page);
  }
}
