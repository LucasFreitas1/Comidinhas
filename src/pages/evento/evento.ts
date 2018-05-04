import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 
/**
 * Generated class for the EventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-evento',
  templateUrl: 'evento.html',
})
export class EventoPage {

  public nomeRec; 
  public descricaoRec;
  public linkMapsRec;
  public dataRec;
  public enderecoRec;
  public infoRec;
  public horarioRec;
  public precoRec;
  public imagemRec;

  constructor(public navCtrl: NavController, public navParams: NavParams) {


  }

  ionViewDidLoad() {
    console.log(this.navParams.get('nome'));
  }

}
