import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
//import { RegisterPage } from '../pages/register/register';
import { ProfilePage } from '../pages/profile/profile';
//import { ViewTransactionsPage } from '../pages/viewTransactions/viewTransactions';
import { ShopsPage } from '../pages/shops/shops';
//import { ShopIndivPage } from '../pages/shop-indiv/shop-indiv';
import { ProductCatPage } from '../pages/product-cat/product-cat';
//import { ProductIndivPage } from '../pages/product-indiv/product-indiv';
import { ShoppingCartPage } from '../pages/shoppingCart/shoppingCart';
//import { PaymentPage } from '../pages/payment/payment';
//import { DeliveryPage } from '../pages/delivery/delivery';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen) 
  {
    this.initializeApp();

    this.pages = [
      {title: 'Home', component: HomePage},      
      {title: 'Profile', component: ProfilePage},
      {title: 'Shops', component: ShopsPage},
      {title: 'Products - Category', component: ProductCatPage},
      {title: 'View Shopping Cart', component: ShoppingCartPage},
      {title: 'Login/Logout', component: LoginPage},
      {title: 'Exit', component: null}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  
  openPage(page) {
    if (page.title == "Exit"){
      this.platform.exitApp();
    }     
    else {
      this.nav.setRoot(page.component);          
    }         
  }
}