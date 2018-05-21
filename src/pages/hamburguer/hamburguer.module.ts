import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HamburguerPage } from './hamburguer';
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
  declarations: [
    HamburguerPage,
  ],
  imports: [
    IonicPageModule.forChild(HamburguerPage),
    Ionic2RatingModule
  ],
})
export class HamburguerPageModule {}
