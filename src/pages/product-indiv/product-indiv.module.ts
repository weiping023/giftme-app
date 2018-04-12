import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ProductIndivPage } from './product-indiv';

@NgModule({
  declarations: [
    ProductIndivPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductIndivPage),    
  ],
  exports: [
    ProductIndivPage
  ]
})
export class ProductIndivPageModule { }
