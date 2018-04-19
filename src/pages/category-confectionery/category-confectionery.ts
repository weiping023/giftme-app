import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { ShoppingCartPage } from '../shoppingCart/shoppingCart';
import { ProductIndivPage } from '../product-indiv/product-indiv';
import { LoginPage } from '../login/login';

//Provider
import { ProductProvider } from '../../providers/product/product';

import { Product } from '../../entities/product';

@Component({
  selector: 'page-category-confectionery',
  templateUrl: 'category-confectionery.html',
})
export class CatConfectioneryPage {

	errorMessage: string;
  products: Product[];
  filteredProducts: Product[];

  priceFilter: any= {
    upper:250,
    lower:1
  }
  priceFilterMin: any;
  priceFilterMax: any;
  priceFilteredProducts: Product[];
  colorFilteredProducts: Product[];

  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController,
  						public navParams: NavParams,
  						public productProvider: ProductProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryConfectioneryPage');

    this.priceFilteredProducts = [];
    this.colorFilteredProducts = [];
    this.filteredProducts =[];

    this.productProvider.retrieveAllProducts().subscribe(
			response => {
        this.products = response.products
                
        for (var i=0; i <this.products.length;i++){           
          if (this.products[i].category === "Confectionary"){ 
            this.filteredProducts.push(this.products[i]);
          }
        }
        this.priceFilteredProducts = this.filteredProducts;    
			},
			error => {
				this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
			}
		);
  }

  filterProductByPrice(){
    //always reset filteredProducts  
    this.priceFilteredProducts = [];
    
    console.log("filteredproduct",this.filteredProducts);
    
    this.priceFilterMin = this.priceFilter.lower;
    this.priceFilterMax = this.priceFilter.upper;
    
    for (var i =0; i < this.filteredProducts.length; i++){
      if (this.filteredProducts[i].price >= this.priceFilterMin && this.filteredProducts[i].price <= this.priceFilterMax){
        this.priceFilteredProducts.push(this.products[i]);
      }
    }    
  }

  viewProduct(productId){
    console.log(productId)
    this.navCtrl.push(ProductIndivPage, {
      productId
    });
  }
  
  cartTapped(event, page) {
    if (sessionStorage.getItem("Cart")=== null) {
      this.navCtrl.push(LoginPage);
      let toast = this.toastCtrl.create({
        message: 'Error: Please Login to view Cart',
        cssClass: 'toast',
        duration: 3000
      });
      toast.present();
    } else {
    this.navCtrl.push(ShoppingCartPage, page);
    }
	}

}
