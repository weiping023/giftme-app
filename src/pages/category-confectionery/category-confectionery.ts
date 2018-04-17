import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ShoppingCartPage } from '../shoppingCart/shoppingCart';
import { ProductIndivPage } from '../product-indiv/product-indiv';

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
    upper:100,
    lower:1
  }
  priceFilterMin: any;
  priceFilterMax: any;
  priceFilteredProducts: Product[];
  colorFilteredProducts: Product[];

  constructor(public navCtrl: NavController,
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
          //to change to confectionEry*         
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
		this.navCtrl.push(ShoppingCartPage, page);
	}

}
