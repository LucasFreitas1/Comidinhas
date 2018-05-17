import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HamburguerPage } from './hamburguer';

@NgModule({
  declarations: [
    HamburguerPage,
  ],
  imports: [
    IonicPageModule.forChild(HamburguerPage),
  ],
})
export class HamburguerPageModule {}
