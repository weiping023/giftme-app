import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ShoppingCartPage } from '../shoppingCart/shoppingCart';

//Provider 
import { ShopProvider } from '../../providers/shop/shop';

import { Shop } from '../../entities/shop';

@Component({
  selector: 'page-shops',
  templateUrl: 'shops.html',
})
export class ShopsPage {

  errorMessage: string;
  shops: Shop[];

  areaFilteredShops: Shop[];
  areas: string[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public shopProvider: ShopProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopsPage');
        
    this.areas = ["Central", "East", "North", "South", "West"];

    this.shopProvider.retrieveAllShops().subscribe(
      response => {        
        this.shops = response.shops;        
        this.areaFilteredShops = this.shops;
      },
      error => {
        this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
      }
    );                    
    
  }

  filterByArea(event, area: string){
    //always reset areaFilteredShops
    this.areaFilteredShops = [];
    console.log(this.shops[i]);

    for (var i=0; this.shops.length; i++){
      if (this.shops[i].area == area && event.checked == true){
        this.areaFilteredShops.push(this.shops[i]);
      }
    }
  }

  cartTapped(event, page) {
  	this.navCtrl.push(ShoppingCartPage, page);
  }
}