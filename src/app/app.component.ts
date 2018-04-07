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
import { ProfilePage } from '../pages/profile/profile';
//import { ViewTransactionsPage } from '../pages/viewTransactions/viewTransactions';
import { ShopsPage } from '../pages/shops/shops';
//import { ShopIndivPage } from '../pages/shop-indiv/shop-indiv';
import { ProductCatPage } from '../pages/product-cat/product-cat';
import { ProductIndivPage } from '../pages/product-indiv/product-indiv';
import { ShoppingCartPage } from '../pages/shoppingCart/shoppingCart';
//import { PaymentPage } from '../pages/payment/payment';

// Uncomment it after checkout page is done
import { DeliveryPage } from '../pages/delivery/delivery';

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

  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen,
              private alertCtrl: AlertController,
              private menuCtrl: MenuController) 
  {
    this.initializeApp();
    
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
      iconName: 'person',
      displayName: 'Profile',
      component: ProfilePage
    });    

    // Load options with nested items
    // -----------------------------------------------
    this.options.push({
      displayName: 'Product',
      subItems: [
        {
          iconName: 'flower',
          displayName: 'Flowers',
          component: ProductIndivPage //to replace
        },
        {
          iconName: 'basket',
          displayName: 'Confectionery',
          component: ProductIndivPage //to replace
        },
        {
          iconName: 'basket',
          displayName: 'Plushies',
          component: ProductIndivPage //to replace
        }
      ]
    });
    
    this.options.push({
      displayName: 'Shop',
      subItems: [
        {
          iconName: 'pin',
          displayName: 'Location',
          component: ShopsPage
        }
      ]
    });
    
    this.options.push({
      iconName: 'cart',
      displayName: 'Shopping Cart',
      component: ShoppingCartPage
    });

    // Load special options
    // -----------------------------------------------
    this.options.push({
      iconName: 'log-in',
      displayName: 'Login/ Logout',
      component: LoginPage
    });
    
    this.options.push({
      iconName: 'exit',
      displayName: 'Exit',   
      custom: {
        isExit: true
      }      
    });

    // Load pages for testing only
    // TO BE DELETED WHEN CHECKOUT PAGE IS DONE
    // -----------------------------------------------
    this.options.push({
      iconName: 'car',
      displayName: 'Delivery',
      component: DeliveryPage
    });
  }

  public selectOption(option: MenuOptionModel): void {
    this.menuCtrl.close().then(() => {
      if (option.custom && option.custom.isExit) {
        this.platform.exitApp();
      }
      else {
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