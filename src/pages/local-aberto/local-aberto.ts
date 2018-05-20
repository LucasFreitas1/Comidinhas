import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LocalAbertoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-local-aberto',
  templateUrl: 'local-aberto.html',
})
export class LocalAbertoPage {

  public nomeRec;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.nomeRec = navParams.get("atribNome")
  
  }


}
