//Angular
import { Component, ViewChild } from '@angular/core';

//Ionic
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuController, AlertController } from 'ionic-angular';

//Pages
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
//import { RegisterPage } from '../pages/register/register';
import { ProfilePage } from '../pages/profile/profile';
//import { ViewTransactionsPage } from '../pages/viewTransactions/viewTransactions';
import { ShopsPage } from '../pages/shops/shops';
//import { ShopIndivPage } from '../pages/shop-indiv/shop-indiv';
import { ProductCatPage } from '../pages/product-cat/product-cat';
import { ProductIndivPage } from '../pages/product-indiv/product-indiv';
import { ShoppingCartPage } from '../pages/shoppingCart/shoppingCart';
//import { PaymentPage } from '../pages/payment/payment';
//import { DeliveryPage } from '../pages/delivery/delivery';

//Side Menu Component
import { SideMenuContentComponent } from '../pages/side-menu-content/side-menu-content.component';
import { MenuOptionModel } from '../pages/side-menu-content/models/menu-option-model';
import { SideMenuSettings } from '../pages/side-menu-content/models/side-menu-settings';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;

  //@viewchild: to get access to component and methods
  @ViewChild(SideMenuContentComponent) sideMenu: SideMenuContentComponent; 

  rootPage: any = HomePage;

  // Options to show in the SideMenuComponent
  options: Array<MenuOptionModel>; 
  
  // Settings for the SideMenuComponent
  public sideMenuSettings: SideMenuSettings = {
    accordionMode: true,
    showSelectedOption: true,
    selectedOptionClass: 'active-side-menu-option',
    subOptionIndentation: {
      md: '56px',
      ios: '64px',
      wp: '56px'
    }
  };

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen,
              private alertCtrl: AlertController,
              private menuCtrl: MenuController) 
  {
    this.initializeApp();

    this.pages = [      
      {title: 'Login/Logout', component: LoginPage},
      {title: 'Exit', component: null}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // Initialize some options
      this.initializeOptions();
    });
  }

  private initializeOptions(): void {
    this.options = new Array<MenuOptionModel>();

    // Load simple menu options
    // ------------------------------------------
    this.options.push({
      iconName: 'home',
      displayName: 'Home',
      component: HomePage,

      // This option is already selected
      selected: true
    });

    this.options.push({
      iconName: 'apps',
      displayName: 'Profile',
      component: ProfilePage
    });    

    // Load options with nested items (with icons)
    // -----------------------------------------------
    this.options.push({
      displayName: 'Product',
      subItems: [
        {
          iconName: 'basket',
          displayName: 'Flowers',
          component: ProductIndivPage //to replace
        },
        {
          iconName: 'bookmark',
          displayName: 'Confectionary',
          component: ProductIndivPage //to replace
        },
        {
          iconName: 'bookmark',
          displayName: 'Plushies',
          component: ProductIndivPage //to replace
        }
      ]
    });

    // Load options with nested items (without icons)
    // -----------------------------------------------
    this.options.push({
      displayName: 'Shop',
      subItems: [
        {
          displayName: 'Location',
          component: ShopsPage
        },        
        {
          displayName: 'Sub Option 7',
          component: ShopsPage
        }
      ]
    });
    
    this.options.push({
      iconName: 'basket',
      displayName: 'Shopping Cart',
      component: ShoppingCartPage
    });

    // Load special options
    // -----------------------------------------------
    this.options.push({
      displayName: 'Login/ Logout',
      subItems: [
        {
          iconName: 'log-in',
          displayName: 'Login',
          custom: {
            isLogin: true
          }
        },
        {
          iconName: 'log-out',
          displayName: 'Logout',
          custom: {
            isLogout: true
          }
        }        
      ]
    });
    
  }

  public selectOption(option: MenuOptionModel): void {
    this.menuCtrl.close().then(() => {
      if (option.custom && option.custom.isLogin) {
        this.presentAlert('You\'ve clicked the login option!');
      } else if (option.custom && option.custom.isLogout) {
        this.presentAlert('You\'ve clicked the logout option!');
      } else {
        // Redirect to the selected page
        this.navCtrl.setRoot(option.component);
      }
    });
  }

  public collapseMenuOptions(): void {
    // Collapse all the options
    this.sideMenu.collapseAllOptions();
  }

  public presentAlert(message: string): void {
    let alert = this.alertCtrl.create({
      title: 'Information',
      message: message,
      buttons: ['Ok']
    });
    alert.present();
  }

  openPage(page) {
    if (page.title == "Exit"){
      this.platform.exitApp();
    }     
    else {
      this.navCtrl.setRoot(page.component);          
    }         
  }
}