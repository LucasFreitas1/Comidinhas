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
  public descricaoRec;
  public imagemRec;
  public localizacaoRec;
  public linkmapsRec

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.nomeRec = navParams.get("atribNome");
  this.descricaoRec = navParams.get("atribDescricao");
  this.imagemRec = navParams.get("atribImagem");
  this.localizacaoRec = navParams.get("atribLocalizacao");
  this.linkmapsRec = navParams.get("atribLinkmaps");
  }


}
